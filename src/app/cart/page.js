"use client"
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Cart = () => {
 
  const pathName=usePathname()
  console.log(pathName);
  return (
    <div>
    <p className='m-24'>This is the cart</p>  
    </div>
  )
}

export default Cart
