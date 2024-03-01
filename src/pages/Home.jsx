import React, { useEffect, useState } from 'react'
import Product from "../components/Product";
import Spinner from '../components/Spinner';

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [storeItem, setStoreItem] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchProductData(){
    setLoading(true);
    try{
      const itemData=await fetch(API_URL);
      const data=await itemData.json();
      console.log(data);
      setStoreItem(data);
    }catch(e){
      setLoading(true);
      setStoreItem([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[]);

  return (
    <div>
      {
        loading? <Spinner/> : 
        storeItem.length>0 ? <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
            { storeItem.map((prod)=>(
                    <Product  prod={prod} key={prod.id} /> 
            ))}
        </div>  
        : <div className='flex items-center justify-center'><p>No Data Found</p></div>
      }
    </div>
  )
}

export default Home