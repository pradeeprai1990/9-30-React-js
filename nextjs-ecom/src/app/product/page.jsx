"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Product() {
let [product,setProduct]=useState([])
let getProduct=()=>{
    axios.get(`https://dummyjson.com/products`)
    .then((res)=>res.data)
    .then((finalres)=>{
        setProduct(finalres.products)
    })
}

useEffect(()=>{
    getProduct()
},[])

  return (
    <div>
      <div className='max-w-[1320px] gap-5 mx-auto grid grid-cols-4'>
           {product.map((items,index)=>{
            return(
                <ProductItems data={items} key={index}/>
            )
           })}
            
      </div>
    </div>
  )
}

function ProductItems({data}){
    let {id,title,price,thumbnail}=data
    return(
        <div className='shadow-2xl'>
            <Link href={`/product/${id}`}>
                <img src={thumbnail} alt="" />
                <div className='text-center p-3'>
                <h3 className='font-bold'>{title}  </h3>
                <p>Rs {price}</p>
                
                </div>
            </Link>
        </div>
    )
}