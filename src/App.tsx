import { useEffect, useState } from 'react';

import './scss/app.scss';
import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import Pizza from './components/Pizza/Pizza';
import { MyPizza } from './interface/pizza';

// import piz from './assets/pizza/pizza.json';
import Skeleton from './components/Pizza/Skeleton';

const App = () => {
  const [pizzas, setPizzas] = useState<MyPizza[]>([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    fetch("https://628f5e0d0e69410599db2da5.mockapi.io/items")
      .then((response) => response.json())
      .then((res) => {
        setPizzas(res)
        setIsLoading(false)
      })
  }
    , [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піци</h2>
          <div className="content__items">


            {isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) : pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
