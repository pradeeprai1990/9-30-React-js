import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { counterContext } from '../MainContext'

export default function Home() {

 let {count,setCount} =useContext(counterContext); //Object

  let textInput1=useRef()
  let textInput2=useRef()
  let textInput3=useRef()
  function addData(){
      let outPut=Number(textInput1.current.value)+Number(textInput2.current.value)
      textInput3.current.value=outPut
    }

  return (
    <div className='max-w-[1320px] mx-auto'>

        <button onClick={()=>setCount(count+1)} className='p-3 bg-red-400 cursor-pointer
        '>Change Count</button>

        <h1 className='text-3xl text-center py-4'>Home</h1>

        <input type="text" ref={textInput1} className='border-1'  />
        <input type="text" ref={textInput2} className='border-1'  />
        <button onClick={addData}>Save</button>
        <input type="text" ref={textInput3} className='border-1'  />


        <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
        <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
       <p className='text-2xl mb-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deleniti ipsa quae reprehenderit similique corporis! Reprehenderit eveniet excepturi natus aut voluptatem at atque unde. Inventore veniam libero deserunt cupiditate eius.
        </p>
    </div>
  )
}
