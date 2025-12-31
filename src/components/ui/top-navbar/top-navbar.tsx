import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

function TopNavBar() {
    return (
        <>
            <div className="flex p-8 bg-[#0d1117]/90 items-center">
                <div className="text-2xl flex flex-1 justify-center">
                    <h2>&lt;<span className="text-terminal-blue">niko's world</span>/&gt;<span className="animate-cursor text-terminal-blue">|</span></h2>
                </div>

                <div className="flex flex-1 justify-center">
                    <NavigationMenu>
                        <NavigationMenuList className="flex items-center gap-8">
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#" className="hover:bg-[#1f2938] hover:text-foreground text-lg">
                                    <span>&lt;<span className="text-terminal-green">Home</span>/&gt;</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#about-me" className="hover:bg-[#1f2938] hover:text-foreground text-lg">
                                    <span>&lt;<span className="text-terminal-green">About</span>/&gt;</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#projects" className="hover:bg-[#1f2938] hover:text-foreground text-lg">
                                    <span>&lt;<span className="text-terminal-green">Projects</span>/&gt;</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#contact" className="hover:bg-[#1f2938] hover:text-foreground text-lg">
                                    <span>&lt;<span className="text-terminal-green">Contact</span>/&gt;</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#admin" className="hover:bg-[#1f2938] hover:text-foreground text-lg">
                                    <span>&lt;<span className="text-terminal-green">Admin</span>/&gt;</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex flex-1 justify-center">
                    <NavigationMenu className="gap-8">
                        <NavigationMenuLink href="https://github.com/nescondo" className="hover:bg-[#1f2938] scale-200">
                            <BsGithub color="#00D9FF"/>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="https://www.linkedin.com/in/nikolai-escondo/" className="hover:bg-[#1f2938] scale-200">
                            <BsLinkedin color="#00D9FF" />
                        </NavigationMenuLink>
                        <NavigationMenuLink href="https://www.youtube.com/@niko.dev.playground" className="hover:bg-[#1f2938] scale-200">
                            <BsYoutube color="#00D9FF" />
                        </NavigationMenuLink>
                    </NavigationMenu>
                </div>
            </div>
        </>
    )
}

export default TopNavBar