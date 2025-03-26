import React from 'react'

export default function CategoryItems({cData}) {
  
    let {title, image} = cData
    return (
        <div className='relative overflow-hidden group'>
            <img className='group-hover:scale-125 duration-150' src={image} alt="" />
            <div className='absolute w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] top-0 flex justify-center items-center'>
                <h2 className='text-white text-2xl font-bold'>
                   {title}                        </h2>
            </div>
        </div>
    )
}
