import TopNavBar from './components/ui/top-navbar'
import AboutMe from './pages/about-me/about-me'
import Projects from './pages/projects/projects'
import Terminal from './components/ui/terminal/terminal'
  
function App() {
  return (
    <>
      <div className="sticky top-0">
        <TopNavBar />
      </div>

        <div className="flex-col max-w-250 mt-10 mb-20 m-auto">
          <Terminal></Terminal>
        </div>

        <hr className="m-auto w-full opacity-25"></hr>

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
