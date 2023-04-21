import React from 'react'
import supportImg from '../assets/support.jpg'

// icons
// <i class="bi bi-cpu-fill"></i>
// <i class="bi bi-telephone"></i>
// <i class="bi bi-patch-question"></i>
// <i class="bi bi-arrow-right-short"></i>

const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
           <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center' >Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates adipisci tenetur ab eius, hic et assumenda nam, quasi fuga, necessitatibus sunt debitis iste corporis? Non commodi nihil illo perferendis.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <div className='mt-[-3rem]'>
                        <i className="bi bi-telephone w-16 p-4 bg-indigo-600 text-white rounded-lg font-bold"></i>
                        </div>
                        
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum voluptas aut dignissimos, officia voluptates vel reprehenderit aliquid blanditiis deleniti nihil.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <i class="bi bi-arrow-right-short w-5 ml-2"></i></p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <div className='mt-[-3rem]'>
                        <i className="bi bi-patch-question w-16 p-4 bg-indigo-600 text-white rounded-lg font-bold"></i>
                        </div>
                        
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum voluptas aut dignissimos, officia voluptates vel reprehenderit aliquid blanditiis deleniti nihil.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <i class="bi bi-arrow-right-short w-5 ml-2"></i></p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <div className='mt-[-3rem]'>
                        <i className="bi bi-cpu-fill w-16 p-4 bg-indigo-600 text-white rounded-lg font-bold"></i>
                        </div>
                        
                        <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum voluptas aut dignissimos, officia voluptates vel reprehenderit aliquid blanditiis deleniti nihil.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <i class="bi bi-arrow-right-short w-5 ml-2"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support