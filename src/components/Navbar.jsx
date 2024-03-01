import React from 'react';
import {FaShoppingCart} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cart}=useSelector((state)=>state);

  return (
    <div>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to="/">
          <div className='ml-10 flex items-center'>
            <img src={Logo} className='lg:h-[70px] h-[40px] w-[40px]
             lg:w-[70px]'/>
            <p className='text-sm lg:text-2xl font-semibold underline underline-offset-4 text-white'>ShopSwift</p>
          </div>
        </NavLink>
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to="/">
            <p className='text-sm lg:text-[1.35rem]'>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-lg lg:text-2xl'/>
              {
                cart.length>0 && <span className='absolute -top-1 -right-2 bg-[#2e2557] text-xs lg:w-5 lg:h-5 h-4 w-4 flex justify-center items-center animate-bounce rounded-full text-white' >{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar