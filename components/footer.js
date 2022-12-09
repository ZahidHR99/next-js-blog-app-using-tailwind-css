import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube} from "react-icons/bs";
import NewsLatter from "./_author/newslatter";

export default function Footer() {

  return (
    <footer className="bg-gray-50">
      <NewsLatter/>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}><BsFacebook color="#888888"/></Link>
            <Link href={"/"}><BsTwitter color="#888888"/></Link>
            <Link href={"/"}><BsYoutube color="#888888"/></Link>
          </div>
          <p className="py-5 text-gray-400">Copyright 2022 All right reserved | Developed by Zahid HR</p>
          <p className="text-gray-400 text-center">Term & Condition</p>
        </div>
      </div>
    </footer>
  )
}
