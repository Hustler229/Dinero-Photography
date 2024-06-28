'use client'

import clsx from "clsx"
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"
import NavLink from "../components/navbar/link"
import Logo from "../design/logo"
import Button from "../design/button"
import Text from "../design/typography"

const FooterSection = () => {
    return (
        <>

            <div className="flex flex-col gap-10 items-center justify-center my-20">
                <div>
                    <Logo size="large" />
                </div>
                <div className={clsx('flex sm:gap-5 md:flex-row flex-col justify-between gap-10 items-center')}>
                    <NavLink id="home">Acceuil</NavLink>
                    <NavLink id="about">A Propos</NavLink>
                    <NavLink id="services">Services</NavLink>
                    <NavLink id="portfolio">Galerie</NavLink>
                    <NavLink id="clients">Clients</NavLink>
                </div>
                <div className="flex flex-col gap-5 justify-between items-center"  id="contact">
                    <Text variant="body-md" className="text-center">Laissez nous un message pour des collaboration</Text>
                    <div className="flex gap-5 justify-between items-center">
                        <Button href="https://www.facebook.com/profile.php?id=100076569251213" > <FaFacebookF /> </Button>
                    <Button href="https://wa.me/+22951837263" > <FaWhatsapp /> </Button>
                    </div>
                    
                </div>
            </div>
            <div>
                <hr className="text-secondary" />
                <p className="text-secondary text-center my-5">
                    Make by HUSTLER - DEV | Copyright June 2024
                </p>
            </div>
        </>
    )
}

export default FooterSection