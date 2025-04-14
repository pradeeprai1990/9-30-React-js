import React from 'react'
import { use } from 'react'
import { useParams } from 'react-router'

export default function ProductDetails() {
    //get Dynamic params value from URL

   let {pid} =useParams() //Object {pid:166}

   console.log(pid) //
   //Api Call to get product details

  return (
    <div>
      <h1>Product Details {pid}</h1>


    </div>
  )
}
