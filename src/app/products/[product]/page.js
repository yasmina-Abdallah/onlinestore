"use client"
import Information from '@/Components/Details'
import Reviews from '@/Components/Reviews'
import React from 'react'
import { useState,useEffect } from 'react'
import Link from 'next/link'

const Product =({params:{product}}) => {

  const [hideInfo,setHideInfo]=useState(false)
  const [hideReviews,setHideReviews]=useState(false)
  const [getProduct, setGetProduct] = useState(null);
  const [quantity,setQuantity]=useState(1)
  const [cartProducts, setCartProducts] = useState([]);
 
const getProductDetails=async()=>{
  const APIresponse=await fetch(`https://dummyjson.com/products/${product}`)
  const res=await APIresponse.json()
  setGetProduct(res)
}

useEffect(() => {
  getProductDetails();
}, [product]);

const handleShowInfo=()=>{
  setHideInfo(!hideInfo)
  setHideReviews(false)
  
}

const handleShowReviews=()=>{
  setHideReviews(!hideReviews)
  setHideInfo(false)

}
if (!getProduct) return <div>Loading...</div>;

const handleChange=(e)=>{
  console.log(e.target.value);
  setQuantity(e.target.value)
}



  return (
    <div>
     
     <div className='flex'>
    
        
<div className='flex-gap-3 mt-24 ml-36'>
<div className='flex gap-3 '>
  <div><img src={getProduct.thumbnail} id={getProduct.id}  /></div>
  <div>
  <p className='text-3xl'>{getProduct.title}</p>
    <p>Product Size: 
     {getProduct.dimensions.width } x {getProduct.dimensions.height} cm
      </p>
      <p>Product Weight:{getProduct.weight}kg</p>
      <input type='number' className='w-10' placeholder='1' min={1} onChange={handleChange} />
      
<p>Price:{getProduct.price} $</p>
<div className='flex '>
  {
    getProduct.images.map(image=><img src={image} className='w-[100px] h-[100px]' id={image.id}/>)
  }
</div>
<div className='bg-green-500 rounded-md w-full h-10 font-semibold text-center p-2 m-2' >

<Link

 
    href={{
      pathname:`/cart/${getProduct.id}`,
      query:{id:getProduct.id,price:getProduct.price,quantity:quantity,thumbnail:getProduct.thumbnail,title:getProduct.title}
      
    }} 
>
    Add To cart
    </Link>
    </div>
  </div>
 
</div>
<div className='flex flex-col m-10  '>

<div className='flex gap-4 w-full border' >
<button onClick={handleShowInfo} className='bg-gray-400 rounded-md w-full h-10 font-semibold' >
    Show Details
  </button>
  <button onClick={handleShowReviews} className='bg-gray-400 rounded-md w-full h-10 font-semibold'>Reviews</button>
 
  </div>

  <div>
  {hideInfo && <Information getProduct={getProduct}/>}
    {hideReviews && <Reviews getProduct={getProduct}/>}
  </div>

</div>
</div>
   


      </div>
    </div>

   
    
   
 


    
  )
}

export default Product
