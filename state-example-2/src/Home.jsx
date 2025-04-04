import React, { useState } from 'react'
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { questions } from './Data/faqQuestion';

export default function Home() {
    let [modalstatus, setModalstatus] = useState(false)

    let [currentQuestionId,setCurrentQuestionId]=useState(0)
    return (


        <div>
            <button onClick={() => setModalstatus(true)}>Enquire Now</button>
            <div className={`fixed duration-500 l lg:w-[400px] w-[100%] shadow-xl left-[50%] translate-x-[-50%] translate-y-[-50%]  ${modalstatus ? 'top-[50%]' : 'top-[-1000px]'}  border-1`}
            >
                <h2 className='font-bold text-center py-3 border-b-1 relative'>
                    Enquiry Now
                    <span onClick={() => setModalstatus(false)} className='absolute right-2 text-3xl top-0 cursor-pointer'>&times;</span>
                </h2>
                <form action="" className='p-3'>
                    <p>Feel free to contact us if you need any assistance, any help or another question.</p>

                    <div className='mt-3'>
                        <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div className='mt-3'>
                        <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" placeholder="" />
                    </div>
                    <div className='mt-3'>
                        <span class="uppercase text-sm text-gray-600 font-bold">Phone</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div className='mt-3'>
                        <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea class="w-full bg-gray-300 text-gray-900 h-[80px] mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div className='mt-3'>
                        <button className='bg-red-800 py-2 text-white w-[100%]'>Enquire Now</button>
                    </div>
                </form>
            </div>


            <div className='max-w-[1320px] mx-auto py-5'>
                {currentQuestionId}
                <h2 className='text-center font-bold text-3xl mb-4'>FAQ</h2>
                {
                questions.map((items) => {
            
                    return (
                        
                        <div className='border-1 mb-3'>
                            <h2
                             onClick={()=>setCurrentQuestionId(currentQuestionId ? 0 : items.id)}
                             
                             
                             className='cursor-pointer relative bg-amber-700 font-bold text-[20px] text-white p-3'>
                                
                                
                                 {items.question} 
                                 
                                 { currentQuestionId==items.id ?

                                    <FiMinusCircle className='absolute top-[15px] right-[15px] text-3xl' />
                                    :
                                    <FiPlusCircle className='absolute top-[15px] right-[15px] text-3xl' />
                                
                                }
                                  
                                  
                                  
                         </h2>
                            <p className={`p-3 text-[18px] 

                                ${currentQuestionId==items.id ? '' : 'hidden'}

                                
                                `}>
                                {items.answer}
                            </p>
                        </div>
                    )
                })
                }



            </div>


        </div>
    )
}
