import { FaReact } from "react-icons/fa"
import { CiSettings } from "react-icons/ci"

function AboutMeBio() {
    return (
        <>  
            <div className="flex-col">
                <div className="flex border-1 border-b-0 border-white/20 rounded-t-lg bg-[#1f2938]">
                    <div className="flex border-1 border-t-0 border-b-0 border-l-0 border-white/20 rounded-tl-lg">
                        <div className="flex w-full h-full pt-3 pb-3 pl-3 pr-5 rounded-tl-lg border-b-2 border-b-terminal-blue border-r-1 border-r-white/20 bg-current/2">
                            <div className="flex pl-3 gap-2">
                                <FaReact className="self-center text-lg" color="#00D9FF"/>
                                <p className="self-center text-xs mt-0.5">bio.ts</p>
                            </div>
                        </div>

                        <div className="flex w-full h-full pt-3 pb-3 pl-3 pr-5 transition duration-300 ease-in-out hover:bg-current/10">
                            <div className="flex pl-3 gap-2">
                                <CiSettings className="self-center text-xl" color="#00D9FF"/>
                                <p className="self-center text-xs mt-0.5">config.json</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex-col rounded-b-lg bg-[#1f2938] border-1 border-white/20">
                    <div className="p-7">
                        <p className="pb-1">1&nbsp;&nbsp;&nbsp;&nbsp; <a className="text-current/50">// who i am</a> </p>
                        <p className="pb-1">2&nbsp;&nbsp;&nbsp;&nbsp; <a><a className="text-purple-500">const</a> <a className="text-terminal-blue">developer</a> = &#123;</a></p>
                        <p className="pb-1">3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a><a className="text-orange-400">name</a>: <a className="text-terminal-green">"Nikolai Escondo"</a>,</a> </p>
                        <p className="pb-1">4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a><a className="text-orange-400">location</a>: <a className="text-terminal-green">"Grand Rapids, MI"</a>,</a> </p>
                        <p className="pb-1">5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a><a className="text-orange-400">role</a>: &#91;</a> </p>
                        <p className="pb-1">6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a><a className="text-terminal-green">"Student"</a>,</a> </p>
                        <p className="pb-1">7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a><a className="text-terminal-green">"Intern"</a></a> </p>
                        <p className="pb-1">8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>&#93;,</a> </p>
                        <p className="pb-1">9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a><a className="text-orange-400">passion</a>: <a className="text-terminal-green">"Building fun and creative software"</a>,</a> </p>
                        <p className="pb-1">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a><a className="text-orange-400">domains</a>: &#91;</a> </p>
                        <p className="pb-1">11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a><a className="text-terminal-green">"Web Development"</a>,</a> </p>
                        <p className="pb-1">12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a><a className="text-terminal-green">"Mobile Development"</a>,</a> </p>
                        <p className="pb-1">13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a><a className="text-terminal-green">"Game Development"</a></a> </p>
                        <p className="pb-1">14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>&#93;</a> </p>
                        <p className="pb-1">15&nbsp;&nbsp;&nbsp;&nbsp;<a>&#125;;</a> </p>
                    </div>

                    <hr className="m-auto w-11/12 opacity-25"></hr>

                    <div className="flex w-5xl p-7 pl-10 pr-10">
                        <p>A developer who's excited, hungry, and ready to learn as much as possible. I love coding and can lose myself for hours developing
                            software. I'm always eager to learn and overall, enjoy the process of getting better at things I'm passionate about. Outside of 
                            programming, I like to play video games and workout.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutMeBio