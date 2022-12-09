import Image from "next/image"
import Link from "next/link"
import Author from "./_author/author"

export default function Section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            { Post() }
            { Post() }
            { Post() }
            { Post() }
            { Post() }
            { Post() }
        </div>
    </section>

  )
}

function Post(){
    return(
        <div className="item shadow-sm">
            <div className="images">
                <Link href={"/"}>
                    <Image src={"/images/04.jpg"} className="rounded" width={500} height={350}/> 
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800 px-2">Agro Category | </Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-600"> Published: 01-12-2022</Link>
                </div>
                <div className="title px-2">
                    <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600"> Why do we use it? </Link>
                </div>
                <p className="text-gray-900 text-bold py-2 px-2">
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p> 
                <Author/>
            </div>
        </div>
    )
}
