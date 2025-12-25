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
            <div className="grid grid-cols-5 p-8">
                <h2 className="col-start-1 m-auto text-2xl">NE</h2>
                <NavigationMenu className="col-start-3 m-auto">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <a href="#" className="text-xl">Home</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <a href="#about-me" className="text-xl">About Me</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <a href="#projects" className="text-xl">Projects</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu className="col-start-5 m-auto scale-200">
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