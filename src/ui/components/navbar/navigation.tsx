import DesktopNavigation from "./desktop_navigation"
import MobileNavigation from "./mobile_navigation"

const Navigation = () => {

    let navigation = null

    return (
        <>
            <div className="hidden xl:flex">
                <DesktopNavigation/>
            </div>
            <div className=" xl:hidden">
                <MobileNavigation/>
            </div>
        </>
    )

}

export default Navigation