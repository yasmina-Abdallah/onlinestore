import React from 'react'

const Information = ({getProduct}) => {
  
   
    
  return (
    
    <div className='font-semibold'>
       
      <p>SKU:{getProduct.sku}</p>
      <p>{getProduct.description}</p>
      <p>Return Policy:{getProduct.returnPolicy}</p>
      <p>Waranty Information:{getProduct.warrantyInformation}</p>
      <p>Shipping Information:{getProduct.shippingInformation}</p>
        
    </div>
        
  )
}

export default Information
