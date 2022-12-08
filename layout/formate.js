import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Formate({children}) {
  return (
    <div>
        <Head>
            <title>Blog Page</title>
        </Head>
        <Header/>
            <main>
            {children}
            </main>
        <Footer/>
    </div>
  )
}
