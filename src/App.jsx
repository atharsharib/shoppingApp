import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Cart from "./pages/Cart" ;

const App = () => {
  return (
    <div>
      <div className='bg-[#685BB3]'>
        <Navbar />
      </div>
      <div className='bg-[#e8e6f6] pb-5'>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/cart' element={<Cart />} />
          </Routes>
      </div>
    </div>
  )
}

export default App