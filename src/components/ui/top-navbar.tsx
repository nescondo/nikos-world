import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link } from "@radix-ui/react-navigation-menu"
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

function TopNavBar() {
    return (
        <>
            <div className="grid grid-cols-3 p-8 bg-[#0d1117]/90">
                <div className="col-start-1 m-auto text-2xl">
                    <h2>&lt;<a className="text-terminal-blue">Nikolai Escondo</a>/&gt;<a className="animate-cursor text-terminal-blue">|</a></h2>
                </div>
                <NavigationMenu className="col-start-2 m-auto">
                    <NavigationMenuList className="flex items-center gap-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink className="hover:bg-[#1f2938] hover:text-foreground">
                                <Link href="#" className="text-lg">&lt;<a className="text-terminal-green">Home</a>/&gt;</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="hover:bg-[#1f2938] hover:text-foreground">
                                <Link href="#about-me" className="text-lg">&lt;<a className="text-terminal-green">About Me</a>/&gt;</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="hover:bg-[#1f2938] hover:text-foreground">
                                <Link href="#projects" className="text-lg">&lt;<a className="text-terminal-green">Projects</a>/&gt;</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu className="col-start-3 m-auto scale-200">
                    <NavigationMenuLink className="hover:bg-[#1f2938]">
                        <Link href="https://github.com/nescondo">
                            <BsGithub color="#00D9FF"/>
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="hover:bg-[#1f2938]">
                        <Link href="https://www.linkedin.com/in/nikolai-escondo/">
                            <BsLinkedin color="#00D9FF" />
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="hover:bg-[#1f2938]">
                        <Link href="https://www.youtube.com/@niko.dev.playground">
                            <BsYoutube color="#00D9FF" />
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenu>
            </div>
        </>
    )
}

export default TopNavBar