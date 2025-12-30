import TopNavBar from './components/ui/top-navbar'
import AboutMe from './pages/about-me/about-me'
import Projects from './pages/projects/projects'
import Home from './pages/home/home'
  
function App() {
  return (
    <>
      <div className="sticky top-0 z-1">
        <TopNavBar />
      </div>

      <div id="#" className="scroll-smooth">
        <Home></Home>
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
