import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Author from './_author/author'

export default function Section3() {
  return (
    <section className='container mx-auto md:px-20 py-2'>
        <h1 className='font-bold text-4xl py-12 text-center'>Most Popular</h1>

        <div className=''>
            <Swiper
                slidesPerView={2}
            >
                <SwiperSlide> { Post() } </SwiperSlide>
                <SwiperSlide> { Post() } </SwiperSlide>
                <SwiperSlide> { Post() } </SwiperSlide>
                <SwiperSlide> { Post() } </SwiperSlide>
                <SwiperSlide> { Post() } </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

function Post(){
    return(
        <div className="grid shadow-sm px-4">
            <div className="images">
                <Link href={"/"}>
                    <Image src={"/images/7.jpg"} className="rounded" width={600} height={400}/> 
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800 px-2">Agro Category | </Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-600"> Published: 01-12-2022</Link>
                </div>
                <div className="title px-2">
                    <Link href={"/"} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"> Why do we use it? </Link>
                </div>
                <p className="text-gray-900 text-bold py-2 px-2">
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p> 
                <Author/>
            </div>
        </div>
    )
}

