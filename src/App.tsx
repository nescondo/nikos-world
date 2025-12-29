import { Card } from './components/ui/card'
import TopNavBar from './components/ui/top-navbar'
import AboutMe from './pages/about-me/about-me'
import Projects from './pages/projects/projects'
import TerminalHeader from './components/ui/terminal/terminal-header'
import TerminalBody from './components/ui/terminal/terminal-body'
  
function App() {
  return (
    <>
      <div className="sticky top-0">
        <TopNavBar />
      </div>

        <div className="flex-col max-w-250 mt-10 m-auto">
          <TerminalHeader></TerminalHeader>
          <TerminalBody></TerminalBody>
        </div>

      <div className="flex m-20">
        <Card className="m-auto">
          <div className="justify-items-center">
            <h1>Hi, I'm Niko!</h1>
            <p>I love playing video games, working out, and coding.</p>
          </div>
        </Card>
      </div>
      <div id="about-me" className="scroll-smooth">
        <AboutMe></AboutMe>
      </div>
      <div id="projects" className="scroll-smooth">
        <Projects></Projects>
      </div>
    </>
  )
}

export default App
