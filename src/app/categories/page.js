import React from 'react'
import Link from 'next/link'
const Categories = async () => {

  const getAllCategories=async()=>{
const APIresponse=await fetch('https://dummyjson.com/products/category-list')
const res=await APIresponse.json()
return res

  }

  const AllCategories=await getAllCategories()
  console.log(AllCategories);
  

  return (
    <div className="flex flex-col m-24  text-base">
    <div className="lg:grid grid-cols-4 gap-4">
     
      {
       AllCategories.length>0?(
      AllCategories.map((category)=>(
    <div className="flex flex-col justify-between p-4 font-semibold hover:bg-custom-gradient border cursor-pointer rounded-md ">
 <Link href={`categories/${category}`}>{category}</Link>
    </div>
       
       
        
  )
       )) :
       <p>No Categories to show</p>
        
      }       
     
</div>
    </div>
  
    )
  }


export default Categories
