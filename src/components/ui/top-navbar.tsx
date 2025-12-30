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
            <div className="flex p-8 bg-[#0d1117]/90 items-center">
                <div className="text-2xl flex flex-1 justify-center">
                    <h2>&lt;<a className="text-terminal-blue">Nikolai Escondo</a>/&gt;<a className="animate-cursor text-terminal-blue">|</a></h2>
                </div>

                <div className="flex flex-1 justify-center">
                    <NavigationMenu>
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
                </div>

                <div className="flex flex-1 justify-center scale-200">
                    <NavigationMenu className="">
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
            </div>
        </>
    )
}

export default TopNavBar