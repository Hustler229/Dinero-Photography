import { CgFacebook } from "react-icons/cg"
import { FaFacebookF, FaFacebookMessenger, FaFacebookSquare, FaWhatsapp } from "react-icons/fa"
import { PiFacebookLogoBold, PiFacebookLogoThin } from "react-icons/pi"

interface Props {
    variant: 'facebook' | 'whatsapp'
}

const Icon = ({ variant }: Props) => {
    let icon = null,
    href = ''
    switch (variant) {
        case 'facebook':
            icon = <PiFacebookLogoBold />
            href = 'https://www.facebook.com/profile.php?id=100076569251213'
            break;
        case 'whatsapp':
            icon = <FaWhatsapp />
            href="https://wa.me/+22951837263"
            break;

    }
    return (
        <>
            <a href={href} className="text-secondary text-3xl  drop-shadow-md">
                <button>
                    {icon}
                </button>
            </a>
        </>
    )
}

export default Icon