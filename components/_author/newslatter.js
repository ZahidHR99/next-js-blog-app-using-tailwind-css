import React from 'react'

export default function NewsLatter() {
  return (
    <section className='bg-gray-50 mt-20'>
        <div className='container mx-auto md:px-20 py-16 text-center'>
            <h1 className='font-bold text-3xl'>Subscribe Newslatter</h1>

            <div className='py-4'>
                <input type="text" placeholder='Enter Your Email' className='shadow border rounded w-9/12 px-3 py-3 text-gray-700 focus:outline-none focus:shadow-outline' value=""/>
            </div>
            <button className='bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl'>
                Subscribe
            </button>
        </div>
    </section>
  )
}
