import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function TopNavBar() {
    return (
        <>
            <div className="grid grid-cols-5 p-8">
                <h2 className="col-start-1 m-auto text-2xl">NE</h2>
                <NavigationMenu className="col-start-3 m-auto">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <a href="#" className="text-xl">Home</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <a href="#about-me" className="text-xl">About Me</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <a href="#projects" className="text-xl">Projects</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    )
}

export default TopNavBar