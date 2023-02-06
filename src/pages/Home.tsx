

import { useState, useEffect } from 'react'
import { useSelector} from 'react-redux'
import axios from 'axios';
import qs from 'qs';
import { useNavigate} from 'react-router-dom'

import {setCategoryId,setSortId,setCurrentCount,setFilters} from '../redux/filter/filterSlice'
import Categories from '../components/Categories'
import {Sort} from '../components/Sort'
import Skeleton from '../components/Pizza/Skeleton'
import Pizza from '../components/Pizza/Pizza'
import Pagination from '../components/Pagination/Pagination'
import { setItems } from '../redux/pizza/pizzasSlice';
import {RootState,useAppDispatch} from '../redux/store'
import {MyPizza} from '../interface/pizza'

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {categoryId,searchValue,currentPage,sort} = useSelector((state:RootState) => state.filter)
    const items = useSelector((state:RootState) => state.pizza.items)

    const handleCategory =(id:number) =>{
    dispatch(setCategoryId(id))
}

    const handlePageCount =(page:number)=>{
    dispatch(setCurrentCount(page))
}

const fetchPizzas = async ()=>{
        setIsLoading(true)
        const search = searchValue ? `search=${searchValue}` : "";
        const category = categoryId > 0 ? `category=${categoryId}` : ""
        try {  
        const {data} = await axios.get<MyPizza[]>(`https://628f5e0d0e69410599db2da5.mockapi.io/items?&page=${currentPage}&limit=8&${category}&${search}`)
        dispatch(setItems(data))
        }
        
        catch(error){
            alert("Помилка при отриманні піц")
            console.log("Error",error);
            }
        finally{
                setIsLoading(false)
            }
        window.scrollTo(0, 0)
    }

useEffect(()=>{
    const queryString = qs.stringify({
        categoryId,
        currentPage
    })
  
    navigate(`?${queryString}`)
    fetchPizzas()
},[categoryId, currentPage, navigate])


const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />) 
const pizzas = items
.filter((obj:any) => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) { return true }
    return false
})
.map((pizza:any) =>  <Pizza key={pizza.id} {...pizza}/>  )
    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} handleClickCategory={handleCategory} />
                <Sort value={sort}/>
            </div>
            <h2 className="content__title">Всі піци</h2>
            <div className="content__items">
                {isLoading ? skeleton : pizzas}
            </div>
            <Pagination currentPage={currentPage} handleChangePage={handlePageCount} />
        </div>
    )
}

export default Home

