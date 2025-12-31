import TopNavBar from "@/components/ui/top-navbar/top-navbar"
import Home from "../home/home"
import AboutMe from "../about-me/about-me"
import Projects from "../projects/projects"
import Contact from "../contact/contact"
import AdminDefault from "../admin/admin-default"

function AppDefault() {
    return (
        <>
            <div>
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

                <div id="contact" className="scroll-smooth">
                    <Contact></Contact>
                </div>

                <div id="admin" className="scroll-smooth">
                    <AdminDefault></AdminDefault>
                </div>
          </div>
        </>
    )
}

export default AppDefault