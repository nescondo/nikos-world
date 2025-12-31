import AboutMeCards from "@/components/ui/about-me/about-me-cards"
import AboutMeWindow from "@/components/ui/about-me/about-me-window"

function AboutMe() {

  return (
    <>
        <div className="flex">
          <div className="p-25 pl-30 pr-30">
            <p>~/nikos-world<span className="text-terminal-blue">/about_me</span></p>

            <div className="mt-5">
              <h1 className="text-4xl bg-gradient-to-r text-transparent bg-clip-text from-terminal-green to-emerald-400">About Me</h1>
            </div>

            <div className="mt-2">
              <p className="text-lg text-current/50">// Developer, student, veteran</p>
            </div>

            <div className="flex mt-10">
              <AboutMeCards></AboutMeCards>
            </div>

            <div className="flex justify-center mt-20">
              <AboutMeWindow></AboutMeWindow>
            </div>

          </div>
        </div>
        <hr className="flex w-full"></hr>
    </>
  )
}

export default AboutMe
