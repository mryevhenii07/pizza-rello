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

interface Props {
    searchValue: string,

}
const Home: React.FC<Props> = ({ searchValue }) => {
    const [pizzas, setPizzas] = useState<MyPizza[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [sort, setSort] = useState(0)

    const dispatch =useDispatch()
    const navigate = useNavigate()

    const categoryId = useSelector((state:any) => state.filter.categoryId)
    const currentPage = useSelector((state:any) => state.filter.currentPage)

    const search = searchValue ? `search=${searchValue}` : "";
    const category = categoryId > 0 ? `category=${categoryId}` : ""

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
        }
        
    },[])

    useEffect(() => {
        setIsLoading(true)
            axios.get(`https://628f5e0d0e69410599db2da5.mockapi.io/items?&page=${currentPage}&limit=8&${category}&${search}`)
            .then((res)=> {
                setPizzas(res.data)
                setIsLoading(false)
            })
            
        window.scrollTo(0, 0)
    }, [categoryId, currentPage, search])

useEffect(()=>{
    const queryString = qs.stringify({
        categoryId,
        currentPage
    })
  
    navigate(`?${queryString}`)
},[categoryId, currentPage, search])

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} handleClickCategory={handleCategory} />
                {/* <Sort value={sort}/> */}
            </div>
            <h2 className="content__title">Всі піци</h2>
            <div className="content__items">
                {isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) : pizzas
                    .filter((obj) => {
                        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) { return true }
                        return false
                    })
                    .map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
            </div>
            <Pagination currentPage={currentPage} handleChangePage={handlePageCount} />
        </div>
    )
}

export default Home

// import { useState, useEffect } from 'react'

// import type { RootState } from '../redux/store'
// import { useSelector, useDispatch } from 'react-redux'

// import { MyPizza } from '../interface/pizza'
// import Categories from '../components/Categories'
// import Sort from '../components/Sort'
// import Skeleton from '../components/Pizza/Skeleton'
// import Pizza from '../components/Pizza/Pizza'
// import Pagination from '../components/Pagination/Pagination'

// interface Props {
//     searchValue: string,

// }
// const Home: React.FC<Props> = ({ searchValue }) => {
//     const [pizzas, setPizzas] = useState<MyPizza[]>([])
//     const [isLoading, setIsLoading] = useState(true)

//     const [categoryId, setCategoryId] = useState(0)
//     const [sort, setSort] = useState(0)
//     const [currentPage, setCurrentPage] = useState(1)

//     const search = searchValue ? `search=${searchValue}` : "";
//     const category = categoryId ? `category=${categoryId}` : ""

//     useEffect(() => {
//         setIsLoading(true)
//         fetch(`https://628f5e0d0e69410599db2da5.mockapi.io/items?${category}&search&limit=8&page=${currentPage}`)
//             .then((response) => response.json())
//             .then((res) => {
//                 setPizzas(res)
//                 setIsLoading(false)
//             })
//         window.scrollTo(0, 0)
//     }, [categoryId, sort, searchValue, currentPage])

//     return (
//         <div className="container">
//             <div className="content__top">
//                 <Categories categoryId={categoryId} handleClickCategory={(id: number) => setCategoryId(id)} />
//                 <Sort sort={sort} />
//             </div>
//             <h2 className="content__title">Всі піци</h2>
//             <div className="content__items">
//                 {isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) : pizzas
//                     .filter((obj) => {
//                         if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) { return true }
//                         return false
//                     })
//                     .map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
//             </div>
//             <Pagination handleChangePage={(number: number) => setCurrentPage(number)} />
//         </div>
//     )
// }

// export default Home