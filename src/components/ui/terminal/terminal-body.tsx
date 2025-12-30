import TerminalCursor from './terminal-cursor'
import SkillNodes from './terminal-skill-nodes'
import { Button } from "@/components/ui/button"

function TerminalBody() {
    return (
        <>
            <div className="flex-wrap bg-[#161d28] rounded-b-lg">
                <div className="p-10">
                    <p><span className="text-terminal-green">%</span> <span className="text-terminal-blue">whoami</span></p>

                    <div className="mt-10">
                        <p className="text-4xl bg-gradient-to-r text-transparent bg-clip-text from-terminal-green to-emerald-400">Hi, I'm Niko!</p>
                    </div>

                    <div className="mt-10">
                        <p className="text-lg text-current/50">// Aspiring software developer with a passion for building creative projects and solutions</p>
                        <p className="mt-2 text-lg">As a 3rd year <span className="text-purple-500">Computer Science</span> student at  
                            <span className="text-[#0032A0]"> Grand Valley State University</span>, I'm excited to showcase
                            my skills as a <span className="text-purple-500">full-stack developer</span>. Having created web and mobile applications, I hope to share
                            unique and creative experiences throughout the world. Currently, I'm exploring <span className="text-purple-500">game</span> and 
                            <span className="text-purple-500"> software</span> development with <span className="text-purple-500">C++</span>.
                        </p>
                    </div>

                    <div className="mt-10">
                        <p><span className="text-terminal-green">%</span><span className="text-terminal-blue"> cat skills.js</span></p>
                    </div>

                    <div className="mt-10">
                        <p><span className="text-purple-500 ">import</span> &#123; </p>
                        <SkillNodes></SkillNodes>
                        <p>&#125; <span className="text-terminal-blue">from</span> <span className="text-purple-500">'./my-toolbox'</span></p>
                    </div>

                    <div className="flex mt-10 gap-5">
                        <Button asChild variant="secondary" className="bg-terminal-green hover:bg-terminal-green/70">
                            <a href="#projects">View My Work</a>
                        </Button>
                        <Button variant="outline" className="text-terminal-blue border-terminal-blue bg-[#161d28] hover:bg-terminal-blue/70">Contact Me</Button>
                    </div>

                    <div className="flex mt-10 mb-5">
                        <p>nikos-world@MacBook-Pro <span className="text-terminal-green">%</span></p>
                        <span className="ml-3"><TerminalCursor></TerminalCursor></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TerminalBody