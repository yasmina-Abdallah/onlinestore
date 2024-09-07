import React from 'react'

const Reviews = ({getProduct}) => {
  return (
    <div className='font-semibold'>
      {getProduct.reviews.map(review=>
<div className='flex gap-6' id={getProduct.id}>
      <p>Rating:{review.rating}</p>
      <p>Comment:{review.comment}</p>
      
      </div>
      )}
     
    </div>
  )
}

export default Reviews
