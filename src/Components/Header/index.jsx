"use client"
import React, { useState,useEffect } from 'react'
import Link from 'next/link'

const Header = () => {

  return (


      <div className='flex justify-between h-20 fixed top-0 left-0 z-50 bg-custom-gradient w-full '>
        <div className='ml-5 mt-3 '>
          <Link href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
          </Link>
        

        </div>
          <div className='flex gap-10 mt-3 font-semibold'>
          <Link href='/products' className='font-semibold text-3xl hover:border-b-8 border-red-500'>Home</Link>
      <Link href='/categories' className='font-semibold text-3xl hover:border-b-8 border-red-500'>Categories</Link>
      <Link href='/contact' className='font-semibold text-3xl hover:border-b-8 border-red-500'>Contact</Link>
          </div>
        <div className='flex justify-around gap-4 mr-4'>
         
          <div className='mt-5'>
          <Link href='/cart/cartItems'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

          </Link>
          </div>
        </div>
      </div>
    )


  
}

export default Header
