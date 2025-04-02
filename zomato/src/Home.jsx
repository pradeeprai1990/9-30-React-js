import React from 'react'

export default function Home() {
    return (
        <section className='h-screen w-[100%] relative overflow-hidden'>
            <video className='w-[100%] h-[100%] object-cover' src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4" muted loop autoPlay></video>

            <div className='absolute w-[100%] h-[100%] top-0 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-end'>

                <div className='text-center pb-[40px] flex flex-col gap-5'>
                    <img src="/images/logo.avif" className='w-[250px] mx-auto' alt="" />
                    <h1 className='text-3xl text-white font-bold'>


                        India’s #1 <br />
                        food delivery app
                    </h1>

                    <p className='text-white text-xl'>Experience fast & easy online ordering <br />
                        on the Zomato app</p>

                    <div className='flex justify-center gap-5'>
                        <img className='w-[120px]' src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png" alt="" />
                        <img className='w-[120px]' src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png" alt="" />
                    </div> 

                    <p className='text-white animate-bounce'>
                       <a href='#overview'>  Scroll down </a></p>   
                </div>
            </div>
        </section>
    )
}
