import React from 'react';
import "../components/Spinner.css";

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] gap-y-5'>
        <div className='spinner'></div>
        <p className='text-2xl font-bold'>Loading...</p>
    </div>
  )
}

export default Spinner