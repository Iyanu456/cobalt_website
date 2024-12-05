import Image from "next/image"
import GradientBorderButton from "./GradientBorderButton"
import Link from "next/link"


export default function Header() {
    return (
        <div className="w-[90%] px-[2em] relative grid mx-auto place-items-center">
            <div className="  rounded-full flex items-center justify-center">
                <div className="absolute w-[80vw] right-auto left-auto h-[50em] top-[-50vh] inset-0 radial-gradient blur-3xl opacity-50"></div>
            </div>

            <div className="flex w-full justify-between py-5 absolute top-4 bottom-auto">
            
                <Image src='/icon.svg' className="my-auto" height={90} width={90} alt="logo" />
                <nav>
                    <ul className="md:flex gap-10 hidden">
                        <li className="my-auto font-semibold hover-btn"><Link href="/" >Blog</Link></li>
                        <li><GradientBorderButton label="Joint the waitlist" className="hover-btn" /></li>
                    </ul>
                </nav>
            </div>
        </div>
        
    )
}