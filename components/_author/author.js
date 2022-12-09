import Image from "next/image";
import Link from "next/link";

export default function Author() {
  return (
    <div className="author flex py-5">
        <Image src={"/images/me.png"} width={50} height={50} className="rounded-full"/>
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"} className="text-md font-bold text-gray-800 text-gray-600">Zahid HR</Link>
                <span className="text-sm text-gray-500">CEO & Founder</span>
            </div>
    </div>
  )
}
