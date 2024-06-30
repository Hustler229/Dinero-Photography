import Logo from "@/ui/design/logo"
import NavLink from "./link"
import { BsMenuApp } from "react-icons/bs"
import { RiMenu3Fill, RiMenu4Fill } from "react-icons/ri"
import { useState } from "react"
import clsx from "clsx"
import { CgClose } from "react-icons/cg"

const MobileNavigation = () => {

    const [visibility, setVisibility] = useState(false)
    const toggleVisibility = () => {
        setVisibility(!visibility)
    }
    return (
        <div className="my-7">
            <div className="flex w-full fixed flex-row justify-between gap-[80px] items-center  px-5 py-3 bg-white shadow-md overflow-hidden">
                <div>
                    <Logo />
                </div>
                <div>
                    <button onClick={toggleVisibility}><RiMenu3Fill className="text-2xl" /></button>

                </div>
            </div>
            <div className={clsx(" fixed inset-0 overflow-y-auto backdrop-blur-md flex flex-row justify-between items-start px-5 py-7", visibility ? '' : 'hidden')}>
                <div className="h-[100px]  w-full mt-[100px]">
                    <div className="flex gap-10 flex-col justify-between items-center">
                        <NavLink id="home" action={toggleVisibility}>Acceuil</NavLink>
                        <NavLink id="about" action={toggleVisibility}>A Propos</NavLink>
                        <NavLink id="services" action={toggleVisibility}>Services</NavLink>
                        <NavLink id="portfolio" action={toggleVisibility}>Galerie</NavLink>
                        <NavLink id="clients" action={toggleVisibility}>Témoignages</NavLink>
                    </div>
                </div>
                <div>
                    <button onClick={toggleVisibility}> <CgClose className="text-2xl" /> </button>
                </div>
            </div>
        </div>
    )
}

export default MobileNavigation