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
                <div className="flex-col rounded-b-lg bg-[#161d28] border-1 border-white/20">
                    <div className="p-7">
                        <p className="pb-1">1&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-current/50">// who i am</span> </p>
                        <p className="pb-1">2&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-purple-500">const</span> <span className="text-terminal-blue">developer</span> = &#123;</span></p>
                        <p className="pb-1">3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">name</span>: <span className="text-terminal-green">"Nikolai Escondo"</span>,</span> </p>
                        <p className="pb-1">4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">location</span>: <span className="text-terminal-green">"Grand Rapids, MI"</span>,</span> </p>
                        <p className="pb-1">5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">role</span>: &#91;</span> </p>
                        <p className="pb-1">6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-terminal-green">"Student"</span>,</span> </p>
                        <p className="pb-1">7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-terminal-green">"Intern"</span></span> </p>
                        <p className="pb-1">8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#93;,</span> </p>
                        <p className="pb-1">9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">passion</span>: <span className="text-terminal-green">"Building fun and creative software"</span>,</span> </p>
                        <p className="pb-1">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><span className="text-orange-400">domains</span>: &#91;</span> </p>
                        <p className="pb-1">11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-terminal-green">"Web Development"</span>,</span> </p>
                        <p className="pb-1">12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-terminal-green">"Mobile Development"</span>,</span> </p>
                        <p className="pb-1">13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-terminal-green">"Game Development"</span></span> </p>
                        <p className="pb-1">14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#93;</span> </p>
                        <p className="pb-1">15&nbsp;&nbsp;&nbsp;&nbsp;<span>&#125;;</span> </p>
                    </div>

                    <hr className="m-auto w-11/12 opacity-25"></hr>

                    <div className="flex w-5xl p-7 text-balance">
                        <p className="text-center">A developer who's excited, hungry, and ready to learn as much as possible. I love coding and can lose myself for hours developing
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