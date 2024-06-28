import Logo from "@/ui/design/logo"
import NavLink from "./link"

const DesktopNavigation = () => {


    return (
        <>
            <div className="flex flex-row justify-center gap-[100px] items-center">
                <div>
                    <Logo size="large"/>
                </div>
                <div className="flex flex-row justify-between gap-5 items-center">
                    <NavLink id="home">Acceuil</NavLink>
                    <NavLink id="about">A Propos</NavLink>
                    <NavLink id="services">Services</NavLink>
                    <NavLink id="portfolio">Galerie</NavLink>
                    <NavLink id="clients">Témoignages</NavLink>
                </div>
            </div>
        </>
    )
}

export default DesktopNavigation