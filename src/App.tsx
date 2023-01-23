import React from 'react';

import './scss/app.scss';
import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import Pizza from './components/Pizza';
import pizzas from './assets/pizza/pizza.json';

function App() {

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

            {
              pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
