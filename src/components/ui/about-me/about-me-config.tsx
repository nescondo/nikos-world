import { CiSettings } from "react-icons/ci";
import { FaReact } from "react-icons/fa";

function AboutMeConfig({ onTabClick }: any) {
    return (
        <>
            <div className="flex-col">
                <div className="flex border-1 border-b-0 border-white/20 rounded-t-lg bg-[#1f2938]">
                    <div className="flex border-1 border-t-0 border-b-0 border-l-0 border-white/20 rounded-tl-lg">
                        <button type="button" onClick={() => onTabClick('bio')} className="flex w-full h-full pt-3 pb-3 pl-3 pr-5 transition duration-300 ease-in-out hover:bg-current/10 cursor-pointer focus:outline-none">
                            <div className="flex pl-3 gap-2">
                                <FaReact className="self-center text-lg" color="#00D9FF"/>
                                <p className="self-center text-xs mt-0.5">bio.ts</p>
                            </div>
                        </button>

                        <button type="button" onClick={() => onTabClick('timeline')} className="flex w-full h-full pt-3 pb-3 pl-3 pr-5 border-b-2 border-b-terminal-blue border-l-1 border-r-white/20 bg-current/2 cursor-pointer focus:outline-none">
                            <div className="flex pl-3 gap-2">
                                <CiSettings className="self-center text-xl" color="#00D9FF"/>
                                <p className="self-center text-xs mt-0.5">config.json</p>
                            </div>
                        </button>

                    </div>
                </div>
                <div className="flex-col rounded-b-lg bg-[#161d28] border-1 border-white/20">
                    <div className="p-7">
                        <p className="pb-1">1&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-current/50">// my timeline</span> </p>
                        <p className="pb-1">2&nbsp;&nbsp;&nbsp;&nbsp; &#123;</p>
                        <p className="pb-1">3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-terminal-blue">timeline</span>: &#91;</p>
                        <p className="pb-1">4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#123; </p>
                        <p className="pb-1">5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"period"</span>: <span className="text-terminal-green">"Present"</span></span> </p>
                        <p className="pb-1">6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"role"</span>: <span className="text-terminal-green">"3rd year CS student"</span></span> </p>
                        <p className="pb-1">7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"activities"</span>: &#91;<span className="text-terminal-green">
                            "Delta Dental SWE intern"</span>, <span className="text-terminal-green">"undergrad. researcher"</span>, <span className="text-terminal-green">"student mentor"</span>&#93;</span> </p>
                        <p className="pb-1">8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#125;,</p>
                        <p className="pb-1">9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#123; </p>
                        <p className="pb-1">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"period"</span>: <span className="text-terminal-green">"2023-2025"</span></span> </p>
                        <p className="pb-1">11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"role"</span>: <span className="text-terminal-green">"Full-time CS student at 
                            </span><span className="text-[#0032A0]"> Grand Valley State University</span><span className="text-terminal-green">"</span></span> </p>
                        <p className="pb-1">12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"fun-facts"</span>: &#91;<span className="text-terminal-green">
                            "Officially retired from the Army :D"</span>&#93;</span> </p>
                        <p className="pb-1">13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;, </p>
                        <p className="pb-1">14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"period"</span>: <span className="text-terminal-green">"2020-2023"</span></span> </p>
                        <p className="pb-1">15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"role"</span>: <span className="text-terminal-green">"Full-time Medical Laboratory Technician/Army 68k"
                            </span></span> </p>
                        <p className="pb-1">16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"fun-facts"</span>: &#91;<span className="text-terminal-green">
                            "Lived in Fairbanks, Alaska"</span>,<span className="text-terminal-green"> started coding in 2022 w/ Python"</span>&#93;</span> </p>
                        <p className="pb-1">17&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</p>
                        <p className="pb-1">18&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; </p>
                        <p className="pb-1">19&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"period"</span>: <span className="text-terminal-green">"2018-2020"</span></span> </p>
                        <p className="pb-1">20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"role"</span>: <span className="text-terminal-green">"Army Soldier/MLT in training"
                            </span></span> </p>
                        <p className="pb-1">21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><span className="text-orange-400">"fun-facts"</span>: &#91;<span className="text-terminal-green">
                            "Lived in Missouri, Texas, and Hawaii"</span>,<span className="text-terminal-green"> graduated HS in 2018"</span>&#93;</span> </p>
                        <p className="pb-1">22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
                        <p className="pb-1">23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#93;</p>
                        <p className="pb-1">24&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
                    </div>

                    <hr className="m-auto w-11/12 opacity-25"></hr>

                    <div className="flex w-5xl p-7">
                        <p className="text-center">Feeling unfulfilled with my career in 2022, I decided to look into other industries.
                            I came across <a href="https://online.umich.edu/courses/programming-for-everybody-getting-started-with-python/" className="text-terminal-blue">a Python programming course on EdX </a>
                            and from there, I was hooked. After experiencing what it's like to truly have that programming 'itch', I couldn't wait
                            to begin my career in Computer Science.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutMeConfig