import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header';
// import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza'
import './scss/app.scss';

const App = () => {
  // const [searchValue, setSearchValue] = useState("")
  return (
    <div className="wrapper">
      <Header  />
      <div className="content">
     
        <Routes>
          {/* <Route path='pizzarello' element={<MainLayout  />}> */}
          <Route path='/pizzarello' element={<Home  />} />
          <Route path='/pizza/:id' element={<FullPizza/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<NotFound />} />
        {/* </Route> */}
        </Routes>
   
       </div>
    </div>
  );
}

export default App;
