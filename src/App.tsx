import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header';

import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza'
import './scss/app.scss';

const App = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path='/pizzarello' element={<Home searchValue={searchValue} />} />
          <Route path='/pizza/:id'/>
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
