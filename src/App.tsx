import TopNavBar from './components/ui/top-navbar/top-navbar'
import AboutMe from './pages/about-me/about-me'
import Projects from './pages/projects/projects'
import Home from './pages/home/home'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import Admin from './pages/admin/admin'
import AdminLogin from './pages/admin-login/admin-login'
import Contact from './pages/contact/contact';
  
function App() {
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAdmin(true);
      }
      else {
        setAdmin(false);
      }
    });
  }, []);

  function onSubmit() {
    signOut(auth).then(() => {
      setAdmin(false);
      console.log("sign out successful");
    }).catch((error) => {
      console.log("error signing out", error);
    });
  }

  return (
    <>
      <div>
        {admin ? (
          <div>
            <p>youre an admin!!!</p>
            <Button type="submit" onClick={() => onSubmit()}>
              Sign out  
            </Button>
            <Admin></Admin>
          </div>
        ) : (
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
              <AdminLogin></AdminLogin>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
