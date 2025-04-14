import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function Product() {

    let [products, setProducts] = useState([])
    let [category, setCategory] = useState([])
    let [brand, setBrand] = useState([])

    let [dropdown, setDropdown] = useState(false)
    let [sorting,setSorting]=useState(null)







    let getCategories = () => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((axiosRes) => axiosRes.data)
            .then((finalRes) => {
                setCategory(finalRes.data)

            })

    }


    let getBrand = () => {
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then((axiosRes) => axiosRes.data)
            .then((finalRes) => {
                setBrand(finalRes.data)

            })

    }

    let getProducts = () => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                page: 1,
                limit: 20,
                categories: '',
                brands: '',
                price_from: '',
                price_to: '',
                discount_from: '',
                discount_to: '',
                rating: null,
                sorting: sorting
            }
        })
            .then((axiosRes) => axiosRes.data)
            .then((finalRes) => {
                setProducts(finalRes.data)

            })
    }

    useEffect(() => {
        getCategories()
        getBrand()
    }, [])




    useEffect(() => {
        getProducts()
    }, [sorting])




    return (
        <div className='grid grid-cols-[20%_auto] gap-5 my-5'>
            <div className='border-[1px] border-[#ccc]'>
                <div className='p-3 border-[1px] border-[#ccc] h-[250px] overflow-y-scroll'>
                    <h3 className='font-bold'>Categories</h3>

                    <ul>
                        {category.map((items, index) => {
                            return (
                                <li className='p-2'> <input type="checkbox" />  {items.name} </li>
                            )
                        })}


                    </ul>

                </div>
                <div className='p-3 border-[1px] border-[#ccc] h-[250px] overflow-y-scroll'>
                    <h3 className='font-bold'>Brand</h3>

                    <ul>
                        <ul>
                            {brand.map((items, index) => {
                                return (
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
            <div>
                <div className='flex justify-between items-center p-3 border-[1px] border-[#ccc]'>
                    <h3 className='font-bold text-2xl'>Products</h3>

                    <div className='relative'>
                        <button onClick={()=>setDropdown(!dropdown)} id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" class="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Sort by : Recommended <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>


                        <div id="multi-dropdown" class={`absolute top-[100%] z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 ${dropdown ? '' : 'hidden' } `}>
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                                <li onClick={()=>{
                                    setSorting(1)
                                    setDropdown(false)
                                }}>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Name : A to Z</a>
                                </li>

                                <li  onClick={()=>{
                                    setSorting(2)
                                    setDropdown(false)
                                }}>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Name : Z to A</a>
                                </li>
                                <li  onClick={()=>{
                                    setSorting(3)
                                    setDropdown(false)
                                }}>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price : Low to High</a>
                                </li>
                                <li  onClick={()=>{
                                    setSorting(4)
                                    setDropdown(false)
                                }}>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price : High to Low</a>
                                </li>
                                <li  onClick={()=>{
                                    setSorting(5)
                                    setDropdown(false)
                                }}>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Discounted Price : Low to High</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-4 gap-5'>


                    {products.map((items, index) => <ProductItems pdata={items} />)}


                </div>
            </div>
        </div>
    )
}

function ProductItems({ pdata }) {
    console.log(pdata)
    let { id, name, image,price } = pdata
    return (
        <div className='shadow-xl'>
            <img src={image} alt="" />
            <div className='p-3'>
                <Link to={`/product-details/${id}`} >
                    <h4 className='font-bold'>{name}</h4>
                     <h4 className='font-bold'>Rs {price}</h4>
                </Link>
            </div>
        </div>
    )
}