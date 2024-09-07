"use client"; 
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Category = ({ params: { category } }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [ProductsByCategory, setProductsByCategory] = useState([]);

  const getProductsBycategory = async () => {
    try {
      const APIresponse = await fetch(`https://dummyjson.com/products/category/${category}`);
      const res = await APIresponse.json();
      setProductsByCategory(res.products);
    } catch (error) {
      console.error('Error fetching products by category:', error);
    }
  };

  useEffect(() => {
    getProductsBycategory();
  }, [category]);

  const handleHover = (id) => {
    console.log('Mouse In !');
    setHoveredProductId(id);
  };

  const handleOut = () => {
    setHoveredProductId(null);
  };

  return (
    <div className="flex flex-col m-24 text-base">
      <div className="lg:grid grid-cols-4 gap-4">
        {ProductsByCategory.length > 0 ? (
          ProductsByCategory.map((product) => (
            <div
              className=" p-4 flex flex-col justify-between hover:border border-green-800"
              key={product.id}
              onMouseEnter={() => handleHover(product.id)}
              onMouseLeave={handleOut}
            >
              <p className='font-semibold'>{product.title}</p>
              <div className="relative">
                {hoveredProductId === product.id && (
                  <Link href={`/products/${product.id}`} >
                  <div className="absolute inset-0 opacity-75 flex items-center justify-around">
            
                    <Link className="text-red-600" href={`/cart/${product.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                    </Link>
                    <Link className="text-red-600" href={`/products/${product.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </Link>
                  </div>
                  </Link>
                )}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-[250px] h-[250px]"
                />
              </div>
              <p className="text-center font-semibold">{product.price}$</p>
            </div>
          ))
        ) : (
          <p>No products to show</p>
        )}
      </div>
    </div>
  );
};

export default Category;
