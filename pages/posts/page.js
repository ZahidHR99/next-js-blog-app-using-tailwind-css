import Image from "next/image";
import Author from "../../components/_author/author";
import Related from "../../components/_author/related";
import Formate from "../../layout/formate";

export default function page() {
  return (
    <Formate>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                <Author></Author>
            </div>
            <div className="post py-10">
                <h1 className="font-bold text-4xl text-center">Why do we use it? Why do we use it? Why do we use it?</h1>
                <p className="text-gray-600 py-5 text-center">
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p> 
                <div className="py-10">
                    <Image src={"/images/01.jpg"} width={900} height={600}/>
                </div>
                <div className="content text-gray-600 text-lg flex flex-col gap-4">
                    <p>content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <p>content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <p>content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
            <Related></Related>
        </section>
    </Formate>
  )
}
