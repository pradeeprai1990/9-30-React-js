import React from 'react'
import { Link } from 'react-router'

export default function Login() {
    return (
        <div className='h-screen bg-[#0b0909cc] flex justify-center items-center'>
            <div className='w-[350px] mx-auto border-[1px] bg-white border-[#fff] '>
                <h2 className='text-center font-bold text-[22px] py-3 border-b-[5px] border-[blue]'>LOGIN</h2>

                <form action="" className='p-4'>
                    <div className='mt-[15px]'>
                        <label htmlFor="" className='mb-2 block'>Username</label>
                        <input type="text" className='w-[100%] h-[40px] border' />
                    </div>
                    <div className='mt-[15px]'>
                        <label htmlFor="" className='mb-2 block'>Password</label>
                        <input type="text" className='w-[100%] h-[40px] border' />
                    </div>
                    <button type='submit' className='w-[100%] h-[40px] bg-blue-500 text-white mt-5'>Login</button>
                </form>
            </div>
        </div>
    )
}
