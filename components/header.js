import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube} from "react-icons/bs";

function Header() {
    return (
       <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py=3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-2">
                    <input type="text" className="input-text" name="" placeholder="Search..." value=""/>
                </div>
                <div className="shrink w-80 sm:order-2">
                    <Link href={"/"} className="font-bold uppercase text-3xl">Design</Link>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <Link href="#"><BsFacebook color="#888888"/></Link>
                        <Link href="#"><BsTwitter color="#888888"/></Link>
                        <Link href="#"><BsYoutube color="#888888"/></Link>
                    </div>
                </div>
            </div>
       </header>
    );
}

export default Header;