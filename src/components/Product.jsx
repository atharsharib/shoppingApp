import React, { useState } from 'react';
import {toast} from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from "../redux/Slices/CartSlice";


const Product = ({prod}) => {

  const [selected, setSelected] = useState(false);
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch(add(prod));
    toast.success("Item added to Cart");
  }
  const removeFromCart=()=>{
    dispatch(remove(prod.id));
    toast.error("Item Removed From Cart");
  }
  

  return (
    <div className='flex flex-col bg-white items-center justify-between hover:scale-[1.01]  lg:hover:scale-110 transition duration-300 ease-in hover:shadow-[0_20px_50px_#423873]
    rounded-xl  gap-3 p-4 mt-10 ml-5'>
      <div>
        <p className='text-center text-[#2e2557] text-lg truncate w-40 mt-1 font-semibold '>{prod.title}</p>
      </div>
      <div>
        <p className='w-40 text-[#2e2557] opacity-50 font-normal text-[10px] text-left'>{prod.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={`${prod.image}`} className='h-full w-full' />
      </div>
      <div className='flex justify-between gap-12 items-center w-full mt-5'>
          <div>
            <p className='text-[#685BB3] font-semibold '>${prod.price}</p>
          </div>
          {
            cart.some((p)=>p.id==prod.id) ? (<button onClick={removeFromCart} className='text-white bg-[#423873] border-2 border-[#2e2557] rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-white hover:text-[#685bb3] transition duration-300 ease-in'>Remove Item</button>) : (<button onClick={addToCart}
              className='text-white bg-[#423873] border-2 border-[#2e2557] rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-white hover:text-[#685bb3] transition duration-300 ease-in'
            >Add To Cart</button>)
          }
      </div>
    </div>
  )
}

export default Product
