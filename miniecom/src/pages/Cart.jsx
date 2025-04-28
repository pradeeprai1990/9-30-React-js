import React, { useContext, useEffect, useState } from 'react'
import { counterContext } from '../MainContext'
import { toast, ToastContainer } from 'react-toastify'

export default function Cart() {

  let { cart, setCart } = useContext(counterContext)


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">qty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {

              cart.map((item) => (
                  <CartRow item={item} key={item.id}/>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Summary */}
      <div className="mt-8 flex justify-end">
        <div className="w-1/3">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">
                5000
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-medium">$5.00</span>
            </div>
            <div className="flex justify-between mb-4 pt-2 border-t">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-lg font-bold">
                5000
              </span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}


function CartRow({ item }) {


  let {id,image,price,name,qty}=item

  let [currentQty,setCurrentQty]=useState(qty)

  let {cart,setCart}=useContext(counterContext)
 let removeCart=()=>{
          if(confirm("Are you Sure Want to Delete Item in Cart")){
             let finalData=cart.filter((items)=>items.id!=id)
            
             setCart(finalData)
             toast.success("Your Item Deleted in Cart !")
          }
         
 }


 useEffect(()=>{

    let finalCart=cart.filter((items)=>{
         if(items.id==id){
          items['qty']=currentQty
         }

         return items
    })

    setCart(finalCart)
 },[currentQty])

  return (
    <tr>
      <td>
        <img src={image} width={50} />
        {name}
      </td>
      <td>
        Rs  {price}
      </td>
      <td>
        <input type="number" className='border-1 w-20 text-center' min={1} max={10} value={currentQty} onChange={(e)=>setCurrentQty(e.target.value)} />
       
      </td>
      <td>
        Rs {price * qty}
      </td>
      <td>
        <button  onClick={removeCart}  className='p-3 bg-red-500'>Delete</button>
      </td>
    </tr>
  )
}