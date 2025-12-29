import TerminalCursor from './terminal-cursor'
import SkillNodes from './terminal-skill-nodes'
import { Button } from "@/components/ui/button"

function TerminalBody() {
    return (
        <>
            <div className="flex-wrap bg-[#161d28] rounded-b-lg">
                <div className="p-10">
                    <p><a className="text-terminal-green">%</a> <a className="text-terminal-blue">whoami</a></p>

                    <div className="mt-10">
                        <p className="text-4xl bg-gradient-to-r text-transparent bg-clip-text from-terminal-green to-emerald-400">Hi, I'm Niko!</p>
                    </div>

                    <div className="mt-10">
                        <p className="text-lg text-current/50">// Aspiring software developer with a passion for building creative projects and solutions</p>
                        <p className="mt-2 text-lg">As a 3rd year <a className="text-purple-500">Computer Science</a> student at  
                            <a className="text-[#0032A0]"> Grand Valley State University</a>, I'm excited to showcase
                            my skills as a <a className="text-purple-500">full-stack developer</a>. Having created web and mobile applications, I hope to share
                            unique and creative experiences throughout the world. Currently, I'm exploring <a className="text-purple-500">game</a> and 
                            <a className="text-purple-500"> software</a> development with <a className="text-purple-500">C++</a>.
                        </p>
                    </div>

                    <div className="mt-10">
                        <p><a className="text-terminal-green">%</a><a className="text-terminal-blue"> cat skills.js</a></p>
                    </div>

                    <div className="mt-10">
                        <p><a className="text-purple-500 ">import</a> &#123; </p>
                        <SkillNodes></SkillNodes>
                        <p>&#125; <a className="text-terminal-blue">from</a> <a className="text-purple-500">'./my-toolbox'</a></p>
                    </div>

                    <div className="flex mt-10 gap-5">
                        <Button variant="secondary" className="bg-terminal-green hover:bg-terminal-green/70">View My Work</Button>
                        <Button variant="outline" className="text-terminal-blue border-terminal-blue bg-[#161d28] hover:bg-terminal-blue/70">Contact Me</Button>
                    </div>

                    <div className="flex mt-10 mb-5">
                        <p>nikos-world@MacBook-Pro <a className="text-terminal-green">%</a></p>
                        <a className="ml-3"><TerminalCursor></TerminalCursor></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TerminalBody