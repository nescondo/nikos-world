import { CgLogIn } from 'react-icons/cg'
import { Button } from "@/components/ui/button"
import { BsGithub } from "react-icons/bs";
import { FaAngular, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri"
import { TbBrandVite, TbFileTypeSql } from "react-icons/tb"
import { SiPostman } from "react-icons/si"

function Projects() {

  return (
    <>
      <div className="flex">
        <div className="p-25 pl-30 pr-30">
          <p>~/nikos-world<span className="text-terminal-blue">/projects</span></p>

          <div className="mt-5">
            <h1 className="text-4xl bg-gradient-to-r text-transparent bg-clip-text from-terminal-green to-emerald-400">Projects</h1>
          </div>

          <div className="mt-2">
            <p className="text-lg text-current/50">// Personal, work, and research projects</p>
          </div>

          <div className="flex-col">
            <div className="flex mt-20 gap-60 ">
              <div className="flex-none w-150 h-80 rounded-lg border border-white/20 transition-transform duration-300 ease-in-out hover:scale-105 hover:ring hover:ring-white">
                <img className="w-full h-full object-fit rounded-lg" src="/images/mh1.png" alt="Maritza's House personal project" />
              </div>
              <div>
                <h3 className="text-3xl">Maritza's House</h3>

                <Button asChild className="mt-5 hover:bg-[#1f2938] mr-5" variant="outline" size="icon-lg">
                  <a href="https://maritzashouse.com/"><CgLogIn color="#00D9FF" /></a>
                </Button>

                <Button asChild className="hover:bg-[#1f2938]" variant="outline" size="icon-lg">
                  <a href="https://github.com/nescondo/maritzas-house-reimagined"><BsGithub color="#00D9FF" /></a>
                </Button>

                <div className="flex w-4/5">
                  <p className="mt-5 text-balance">A simple, easy-to-navigate website for the purpose of bringing awareness to an 
                    Adult Foster Care home within Grand Rapids, MI. Compatible with mobile devices.
                  </p>
                </div>

                <div className="flex mt-5 gap-2">
                  <FaAngular className="text-3xl transition-all duration-300 ease-in-out hover:scale-105" color="#c3002f" />
                  <FaHtml5 className="text-3xl transition-all duration-300 ease-in-out hover:scale-105" color="#E34C26"/>
                  <FaCss3Alt className="text-3xl transition-all duration-300 ease-in-out hover:scale-105" color="#663399"/>
                </div>

              </div>
            </div>

            <div className="flex mt-20 gap-60 ">
              <div className="flex-none w-150 h-80 rounded-lg border border-white/20 transition-transform duration-300 ease-in-out hover:scale-105 hover:ring hover:ring-white">
                <img className="w-full h-full object-fit rounded-lg" src="/images/nw1.png" alt="Niko's World personal project" />
              </div>
              <div>
                <h3 className="text-3xl">Niko's World</h3>

                <Button asChild className="mt-5 hover:bg-[#1f2938] mr-5" variant="outline" size="icon-lg">
                  <a href="https://nikos-world.vercel.app/"><CgLogIn color="#00D9FF" /></a>
                </Button>

                <Button asChild className="hover:bg-[#1f2938]" variant="outline" size="icon-lg">
                  <a href="https://github.com/nescondo/nikos-world"><BsGithub color="#00D9FF" /></a>
                </Button>

                <div className="flex w-4/5">
                  <p className="mt-5 text-balance">The source of this website. A place to showcase what I've built and learned!
                    Still a work in progress — hoping to flesh it out for mobile devices as well.
                  </p>
                </div>

                <div className="flex mt-5 gap-2">
                  <FaReact className="text-3xl transition-all duration-300 ease-in-out hover:scale-105" color="#00D9FF"/>
                  <RiTailwindCssFill className="text-3xl transition-all duration-300 ease-in-out hover:scale-105" color="#3b82f6"/>
                  <RiFirebaseFill className="text-3xl transition-all duration-300 ease-in-out hover:scale-105" color="#FFA611"/>
                </div>
              </div>
            </div>

            <div className="flex mt-20 gap-60 ">
              <div className="flex-none w-150 h-80 rounded-lg border border-white/20 transition-transform duration-300 ease-in-out hover:scale-105 hover:ring hover:ring-white">
                <img className="w-full h-full object-fit rounded-lg" src="/images/sorrynophoto.png" alt="Platform Tools work project" />
              </div>
              <div>
                <h3 className="text-3xl">Platform Tools</h3>

                <Button disabled className="mt-5 hover:bg-[#1f2938] mr-5" variant="outline" size="icon-lg">
                  <span><CgLogIn color="#00D9FF" /></span>
                </Button>

                <Button disabled className="hover:bg-[#1f2938]" variant="outline" size="icon-lg">
                  <span><BsGithub color="#00D9FF" /></span>
                </Button>

                <div className="w-4/5">
                  <p className="mt-5 text-balance">An in-house web application to assist project owners, project managers, and
                    business analysts to configure consumer-facing web-interfaces without needing technical knowledge to modify the back-end.
                    Note that this is a work-related project with a private repository and is not accessible to the public :&#40;
                  </p>
                </div>

                <div className="flex mt-5 gap-2">
                  <FaAngular className="text-3xl transition-all duration-300 ease-in-out hover:scale-105" color="#c3002f" />
                  <TbFileTypeSql className="text-3xl transition-all duration-300 ease-in-out hover:scale-105" color="#F29111"/>
                  <SiPostman className="text-3xl transition-all duration-300 ease-in-out hover:scale-105" color="#EF5B25"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="flex w-full"></hr>
    </>
  )
}

export default Projects
