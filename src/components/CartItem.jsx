import React from 'react';
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/CartSlice";
import {toast} from 'react-toastify';

const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch(); 

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item removed from cart")
  }


  return (
    <div className='w-full min-h-[50vh] bg-white rounded-3xl mt-8'>
      <div className='flex flex-col lg:flex-row justify-around my-10 items-center gap-y-6'>
        <div className='lg:h-[220px] lg:w-[220px] h-[130px] w-[130px] flex justify-center items-center'>
          <img src={item.image} className='h-full w-full'/>
        </div>
        <div className='flex flex-col gap-y-3'>
          <h1  className='text-left text-[#2e2557] text-2xl w-40 mt-1 font-bold '>{item.title.split(" ").slice(0,5).join(" ")+"..."}</h1>
          <h1 className='w-40 text-[#2e2557] opacity-50 font-normal text-[10px] text-left'>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
          <div className='flex flex-row justify-between items-center '>
            <p className='text-[#685bb3] text-lg font-semibold'>${item.price}</p>
            <div onClick={removeFromCart} className='text-xl cursor-pointer rounded-full bg-[#2e2557] p-1
            transition duration-300 hover:bg-[#e8e6f6]'>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
