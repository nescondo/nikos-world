import './App.css'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Link } from '@radix-ui/react-navigation-menu'
<div className="flex h-screen justify-center items-center"></div>
function App() {

  return (
    <>
      <div className="flex justify-center">
        <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/about-me">About Me</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </div>

        <div className="flex h-screen justify-center items-center">
          <div className="flex-col justify-items-center">
            <h1>Hi, I'm Niko!</h1>
            <p>I love playing video games, working out, and coding.</p>
          </div>
        </div>
    </>
  )
}

export default App
