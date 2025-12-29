import { FaLaptopCode, FaDev } from "react-icons/fa"
import { BsWindowFullscreen } from "react-icons/bs"
import { ImConfused2 } from "react-icons/im"

function AboutMeCards() {
    return (
        <>
            <div className="flex flex-wrap gap-5">

                <div className="w-100 h-60 place-items-center p-15 pl-30 pr-30 rounded-lg bg-[#1f2938] border-1 border-terminal-blue/10 transition-all duration-300 ease-in-out hover:scale-101 hover:ring hover:ring-terminal-blue">
                    <FaLaptopCode className="text-terminal-blue text-3xl"/>
                    <p className="text-3xl text-terminal-blue mt-5">3+</p>
                    <p className="mt-1">years coding</p>
                </div>

                <div className="w-100 h-60 place-items-center p-15 pl-30 pr-30 rounded-lg bg-[#1f2938] border-1 border-terminal-blue/10 transition-all duration-300 ease-in-out hover:scale-101 hover:ring hover:ring-terminal-blue">
                    <FaDev className="text-terminal-blue text-3xl"/>
                    <p className="text-3xl text-terminal-blue mt-5">~1</p>
                    <p className="mt-1 truncate">year industry experience</p>
                </div>

                <div className="w-100 h-60 place-items-center p-15 pl-30 pr-30 rounded-lg bg-[#1f2938] border-1 border-terminal-blue/10 transition-all duration-300 ease-in-out hover:scale-101 hover:ring hover:ring-terminal-blue">
                    <BsWindowFullscreen className="text-terminal-blue text-3xl"/>
                    <p className="text-4xl text-terminal-blue mt-5">&infin;</p>
                    <p className="mt-1 truncate">tabs open</p>
                </div>

                <div className="w-100 h-60 place-items-center p-15 pl-30 pr-30 rounded-lg bg-[#1f2938] border-1 border-terminal-blue/10 transition-all duration-300 ease-in-out hover:scale-101 hover:ring hover:ring-terminal-blue">
                    <ImConfused2 className="text-terminal-blue text-3xl"/>
                    <p className="text-2xl text-terminal-blue mt-7.5 truncate">too many times :&#40;</p>
                    <p className="mt-1 truncate">"it works on my machine"</p>
                </div>
            </div>
        </>
    )
}

export default AboutMeCards