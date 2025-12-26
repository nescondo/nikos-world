import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "@radix-ui/react-navigation-menu"
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

function TopNavBar() {
    return (
        <>
            <div className="grid grid-cols-3 p-8">
                <div className="col-start-1 m-auto text-2xl">
                    <h2 className="">&lt;Nikolai Escondo/&gt;<a className="animate-cursor">|</a></h2>
                </div>
                <NavigationMenu className="col-start-2 m-auto">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <a href="#" className="text-lg">&lt;Home/&gt;</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <a href="#about-me" className="text-lg">&lt;About Me/&gt;</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <a href="#projects" className="text-lg">&lt;Projects/&gt;</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu className="col-start-3 m-auto scale-200">
                    <NavigationMenuLink>
                        <Link href="https://github.com/nescondo">
                            <BsGithub />
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Link href="https://www.linkedin.com/in/nikolai-escondo/">
                            <BsLinkedin />
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Link href="https://www.youtube.com/@niko.dev.playground">
                            <BsYoutube />
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenu>
            </div>
        </>
    )
}

export default TopNavBar