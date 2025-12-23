import TopNavBar from "../../components/ui/top-navbar.tsx"
function AboutMe() {

  return (
    <>
      <TopNavBar />

        <div className="flex h-screen justify-center items-center">
          <div className="flex-col justify-items-center">
            <h1>Hi, I'm Niko!</h1>
            <p>testing about-me page</p>
          </div>
        </div>
    </>
  )
}

export default AboutMe
