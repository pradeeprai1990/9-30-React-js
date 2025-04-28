"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ProductDetails() {
  let {pid} =useParams()
  let [singleProduct,setsingleProduct]=useState(null)
  
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${pid}`)
    .then((res)=>res.data)
    .then((finalRes)=>{
        setsingleProduct(finalRes)
    })
  },[pid])

  return (
    <div>
        { singleProduct!=null ?
            <div className='max-w-[1320px] mx-auto mt-5 gap-[50px] items-center grid grid-cols-2'>
                    <div className='shadow-lg'>
                        <img src={singleProduct.thumbnail} className='w-[100%]' alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold'>
                            {singleProduct.title}
                        </h2>
                        <h3> {singleProduct.category} </h3>
                        <p> {singleProduct.description} </p>
                    </div>

            </div>
    
            :
            <div>
             Loading....

            </div>
    
        }
    </div>
  )
}
