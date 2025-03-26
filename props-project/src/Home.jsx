import React from 'react'
import { ProductItems } from './common/ProductItems'
import Header from './common/Header'
import { product } from './Data/Productdata'
import CategoryItems from './common/CategoryItems'
import { category } from './Data/CategoryData'

export default function Home() {
    let cname = "JavaScript"

    let obj={
        title:"Compressors GMCC",
        image:"https://solachey.com/wp-content/uploads/2024/11/COMGMCC18K-1024x1024.png",
        price: 1000

    }
    return (
        <>
            {/* Call Import */}
            <Header cname={cname} user={["ram","ravi","raj"]} phone="8888888" email="p@gmail.com"  >
                <p>Welcome</p>
            </Header>

            <div className='bg-gray-300 '>
                <h1 className='text-center text-3xl font-bold py-[40px]'>Our Category</h1>    

                <div className='max-w-[1320px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2   grid-cols-1   border-1 gap-4'>
                    {
                    category.map((cItems,index)=>
                         <CategoryItems cData={cItems} />
                    )
                    
                    }
                   
                   

                </div>
            </div>
            <div className='bg-gray-300 '>
                <h1 className='text-center text-3xl font-bold py-[40px]'>Our Product</h1>
                <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2   grid-cols-1  gap-5 border-1'>
                    {product.map((pitems, index) =>   <ProductItems pdata={pitems} /> )}

                  
                 
                </div>

            </div>
        </>
    )
}


