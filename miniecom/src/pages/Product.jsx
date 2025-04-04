import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Product() {

    let [products,setProducts]=useState([])
    let [category,setCategory]=useState([])
    let [brand,setBrand]=useState([])

    let getCategories=()=>{
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
        .then( (axiosRes)=>axiosRes.data)
        .then((finalRes)=>{
            setCategory(finalRes.data)
          
        })


        // fetch('https://wscubetech.co/ecommerce-api/products.php')
        // .then((response) => response.json())
    }

    
    let getBrand=()=>{
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
        .then( (axiosRes)=>axiosRes.data)
        .then((finalRes)=>{
            setBrand(finalRes.data)
          
        })


        // fetch('https://wscubetech.co/ecommerce-api/products.php')
        // .then((response) => response.json())
    }

  let getProducts=()=>{
        axios.get('https://wscubetech.co/ecommerce-api/products.php')
        .then( (axiosRes)=>axiosRes.data)
        .then((finalRes)=>{
           setProducts(finalRes.data)
          
        })


        // fetch('https://wscubetech.co/ecommerce-api/products.php')
        // .then((response) => response.json())
        
  }  

useEffect(()=>{ //Next Class
    getProducts()
    getCategories()
    getBrand()
},[])
 
 


  return (
    <div className='grid grid-cols-[20%_auto] gap-5 my-5'>
        <div className='border-[1px] border-[#ccc]'>
            <div className='p-3 border-[1px] border-[#ccc] h-[250px] overflow-y-scroll'>
                <h3 className='font-bold'>Categories</h3>

                <ul>
                    {category.map((items,index)=>{
                        return(
                            <li className='p-2'> <input type="checkbox" />  {items.name} </li>
                        )
                    })}
                  
                    
                </ul>

            </div>
            <div className='p-3 border-[1px] border-[#ccc] h-[250px] overflow-y-scroll'>
                <h3 className='font-bold'>Brand</h3>

                <ul>
                <ul>
                    {brand.map((items,index)=>{
                        return(
                            <li className='p-2'> <input type="checkbox" />  {items.name} </li>
                        )
                    })}
                  
                    
                </ul>
                </ul>

            </div>
            <div className='p-3 border-[1px] border-[#ccc] '>
                <h3 className='font-bold'>PRICE
                </h3>

                <ul>
                    <li className='p-2'> <input type="radio" />  Rs. 10 to Rs. 250 </li>
                    <li className='p-2'> <input type="radio" />  Rs. 250 to Rs. 500 </li>
                    <li className='p-2'> <input type="radio" />  Rs. 500 to Rs. 1000 </li>
                    <li className='p-2'> <input type="radio" />  Rs. 1000 to Above </li>
                    
                </ul>

            </div>
        </div>
        <div className='grid grid-cols-4 gap-5'>
           
           
                {products.map((items,index)=> <ProductItems pdata={items}/> )}
               

        </div>
    </div>
  )
}

function ProductItems({pdata}){
    let {name,image}=pdata
    return(
        <div className='shadow-xl'>
            <img src={image} alt="" />
            <div className='p-3'>
                <h4 className='font-bold'>{name}</h4>
            </div>
        </div>
    )
}