import React, { createContext, useEffect, useState } from 'react'

export let counterContext=createContext() //Context Create Function 
export default function MainContext({children}) {
 
   let [count,setCount]=useState(1)
   let [cart,setCart]=useState( JSON.parse(localStorage.getItem("CART")) ?? []  )

   let obj={
    count,
    setCount,
    cart,
    setCart
   }
    
   useEffect(()=>{
      localStorage.setItem("CART",JSON.stringify(cart))
   },[cart])
  return (
    <counterContext.Provider value={obj}>

        {children}


    </counterContext.Provider>
  )
}
