import Image from "next/image"
import Link from "next/link"
import Author from "./_author/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from "swiper";

// Import Swiper styles
import 'swiper/css';

export default function Section1() {
    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/bg9.jpg') no-repeat",
        backgroundPosition: "right",
        backgroundSize: '100% 100%'
    }

  return (
    <section className="py-10" style={bg}>
        <div className="container mx-auto md:px-20">
            <h2 className="font-bold text-4xl pb-12 text-center">Village Life with Zahid</h2>

            <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000
      }}
    >
      <SwiperSlide>{ Slide()}</SwiperSlide>
      <SwiperSlide>{ Slide()}</SwiperSlide>
      <SwiperSlide>{ Slide()}</SwiperSlide>
    </Swiper>

        </div>
    </section>
  )
}

function Slide(){
    return(
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}>
                    <Image src={"/images/01.jpg"} width={600} height={600}/> 
                </Link>
            </div>

            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Agro Category | </Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-600"> Published: 01-12-2022</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"> Why do we use it? </Link>
                </div>
                <p className="text-gray-900 text-bold py-5">
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p> 
                <Author/>
            </div>
        </div>
    )
}