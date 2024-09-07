"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Products = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [Products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const APIresponse = await fetch('https://dummyjson.com/products?limit=200');
      const res = await APIresponse.json();
      setProducts(res.products); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []); 

  const handleHover = (id) => {
    setHoveredProductId(id);
  };

  const handleOut = () => {
    setHoveredProductId(null);
  };

  return (
    <div className="flex flex-col m-24 ">
      <div className="lg:grid grid-cols-4 gap-4">
        {Products.length > 0 ? (
          Products.map((product) => (
            <Link href={`/products/${product.id}`}>
            <div
              className=" p-4 flex flex-col justify-between hover:border border-green-800 rounded-sm"
              key={product.id}
              onMouseEnter={() => handleHover(product.id)}
              onMouseLeave={handleOut}
            >
              <p className='font-semibold'>{product.title}</p>
              <div className="relative">
                {hoveredProductId === product.id && (
                  <div className="absolute inset-0 opacity-75 flex items-center justify-around">
                    <Link className="text-red-800" href={{
      pathname:`/cart/${product.id}`,
      query:{id:product.id,price:product.price,quantity:1,thumbnail:product.thumbnail,title:product.title}
      
    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                      
                    </Link>
                    <Link className="text-red-800" href={`/products/${product.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </Link>
                  </div>
                )}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-[250px] h-[250px]"
                />
              </div>
              <p className="text-center font-semibold">{product.price}$</p>
             
            </div>
            </Link>
          )
        
        
        )
        ) : (
          <p>No products to show</p>
        )}
      </div>
    </div>
  );
};

export default Products;
