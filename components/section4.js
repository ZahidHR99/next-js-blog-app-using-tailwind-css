import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './_author/author'

export default function Section4() {
  return (
    <section className='container mx-auto md:px-20 py-2'>
        <div className='grid lg:grid-cols-2'>
            <div className='item'>
                <h1 className='font-bold text-4xl py-12 px-2'>Cattle Firm </h1>
                <div className='flex flex-col gap-6'>
                    { Post() }
                    { Post() }
                    { Post() }
                    { Post() }
                </div>
            </div>
            <div className='item'>
                <h1 className='font-bold text-4xl py-12 px-2'>Agriculture</h1>
                <div className='flex flex-col gap-6'>
                    { Post() }
                    { Post() }
                    { Post() }
                    { Post() }
                </div>
            </div>
        </div>
       
    </section>
  )
}

function Post(){
    return (
        <div className='flex gap-5 shadow-sm'>
            <div className='image flex flex-col justify-start'>
                <Link href={"/"}>
                    <Image src={"/images/bg3.jpg"} className="rounded" width={300} height={250}/> 
                </Link>
            </div> 
            <div className='info flex justify-center flex-col'>
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Agro Category | </Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-600"> Published: 01-12-2022</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600"> Why do we use it? </Link>
                </div>
              
                <Author/>
            </div>
        </div>
    )
}
