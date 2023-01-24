import { useState, useEffect } from 'react'

import { MyPizza } from '../interface/pizza'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/Pizza/Skeleton'
import Pizza from '../components/Pizza/Pizza'

const Home = () => {
    const [pizzas, setPizzas] = useState<MyPizza[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const [categoryId, setCategoryId] = useState(0)
    const [sort, setSort] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://628f5e0d0e69410599db2da5.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ""}`)
            .then((response) => response.json())
            .then((res) => {
                setPizzas(res)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sort])

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} handleClickCategory={(id: number) => setCategoryId(id)} />
                <Sort sort={sort} />
            </div>
            <h2 className="content__title">Всі піци</h2>
            <div className="content__items">
                {isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) : pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
            </div>
        </div>
    )
}

export default Home