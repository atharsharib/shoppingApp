import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {add,remove} from "../redux/Slices/CartSlice";
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';


const Cart = () => {

  const {cart}=useSelector((state)=>state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart]);


  return (
    <div className='max-w-6xl mx-auto'>
      {
        cart.length>0 ? (
          <div className='flex lg:flex-row items-center  flex-col gap-[3rem] w-full  min-h-[calc(100vh-5rem)]'>
            <div className='w-[80%] lg:w-[50%] flex flex-col gap-y-6'>
              {
                cart.map((item,index)=>(<CartItem key={item.id} item={item} itemIndex={index} />))
              }
            </div>
            <div className='flex flex-col lg:items-start items-center py-6 w-[80%] lg:w-[40%] lg:fixed lg:left-[55%] lg:top-[33%] border-t-2 border-b-2 border-b-[#2e2557] border-t-[#2e2557] h-[50vh] justify-between'>
              <div className='flex flex-col justify-between h-full'>
                <div className='text-2xl font-bold text-[#2e2557]'>Your Cart</div>
                <div className='space-y-3'>
                  <div className='text-2xl font-semibold text-[#2e2557]'>Summary</div>
                  <p>
                    <span className='text-[#423873] font-medium text-lg '>Total Item: {cart.length}</span>
                  </p>
                </div>
              </div>
              <div className='flex lg:flex-row lg:w-[100%] flex-col items-center lg:gap-y-0 gap-y-3 justify-between'>
                <p className='text-[#423873] text-lg font-medium lg:text-left text-center'>Total Amount : ${totalAmount}</p>
                <button className='text-white lg:w-[30%] w-full bg-[#423873]  border-2 border-[#2e2557] rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-white hover:text-[#685bb3] transition duration-300 ease-in'>Checkout Now</button>
              </div>
            </div>
          </div>
        )    
        :
          (
           <div className='flex flex-col gap-y-6 items-center justify-center h-[100vh]'>
            <h1 className='text-2xl font-semibold text-[#2e2557] '>Cart Empty</h1>
            <Link to="/">
              <button className='text-white bg-[#423873] border-2 border-[#2e2557] rounded-full font-semibold text-lg py-2 px-6 uppercase
            hover:bg-white hover:text-[#685bb3] transition duration-300 ease-in'>
                Shop Now 
              </button>
            </Link>
           </div>
          )
      }
    </div>
  )
}

export default Cart