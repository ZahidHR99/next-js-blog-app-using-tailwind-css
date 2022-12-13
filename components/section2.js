import Image from "next/image"
import Link from "next/link"
import Author from "./_author/author"
import fetcher from "../lib/fetcher"
import Spinner from "./_author/spinner"
import Error from "./_author/error"

export default function Section2() {
   
    const {data, isLoading, isError} = fetcher()

    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error>Error</Error>

  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
           {
            data.map((value,index)=>{
                <Post data={value} key={index}></Post>
            })
           }
        </div>
    </section>
  )
}

function Post({data}){
    const {id, title, category, img, description, published, author} = data;
    return(
        <div className="item shadow-sm" key={id}>
            <div className="images">
                <Link href={"/"}>
                    <Image src={img || "/"} className="rounded" width={500} height={350}/> 
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800 px-2">{category || "Unknown"} | </Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-600"> Published: {published || "Unknown" }</Link>
                </div>
                <div className="title px-2">
                    <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600"> {title || "Unknown" } </Link>
                </div>
                <p className="text-gray-900 text-bold py-2 px-2">
                    {description || "Unknown"}
                </p> 
                {
                    author ?<Author></Author> : <></>
                }
              
            </div>
        </div>
    )
}
