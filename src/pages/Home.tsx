import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

import qs from 'qs';
import {useNavigate} from 'react-router-dom'

import type { RootState } from '../redux/store'
import {setCategoryId,setSortId,setCurrentCount,setFilters} from '../redux/slices/filterSlice'
import { MyPizza } from '../interface/pizza'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/Pizza/Skeleton'
import Pizza from '../components/Pizza/Pizza'
import Pagination from '../components/Pagination/Pagination'
import { setItems } from 'redux/slices/pizzasSlice';

interface Props {
        searchValue: string,

}
const Home: React.FC<Props> = () => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [sort, setSort] = useState(0)

    const dispatch =useDispatch()
    const navigate = useNavigate()
    const {categoryId,searchValue,currentPage} = useSelector((state:any) => state.filter)

    const items = useSelector((state:any) => state.pizza.items)

const handleCategory =(id:number) =>{
    dispatch(setCategoryId(id))
}

const handlePageCount =(page:number)=>{
    dispatch(setCurrentCount(page))
}

    useEffect(()=>{
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilters({...params}))
        }},[])

const fetchPizzas = async ()=>{
        setIsLoading(true)
        const search = searchValue ? `search=${searchValue}` : "";
        const category = categoryId > 0 ? `category=${categoryId}` : ""
        try {  
        const {data} = await axios.get(`https://628f5e0d0e69410599db2da5.mockapi.io/items?&page=${currentPage}&limit=8&${category}&${search}`)
        dispatch(setItems(data))
            // setPizzas(data) 
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

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} handleClickCategory={handleCategory} />
                {/* <Sort value={sort}/> */}
            </div>
            <h2 className="content__title">Всі піци</h2>
            <div className="content__items">
                {isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) : items
                    .filter((obj:any) => {
                        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) { return true }
                        return false
                    })
                    .map((pizza:any) => <Pizza key={pizza.id} {...pizza} />)}
            </div>
            <Pagination currentPage={currentPage} handleChangePage={handlePageCount} />
        </div>
    )
}

export default Home
