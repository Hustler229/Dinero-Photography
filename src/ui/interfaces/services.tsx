'use client'
import Services from "@/ui/components/services/services"
import TitleComponent from "../design/title"
import Text from "../design/typography"

 const Work = ()=>{

    return (
        <>
            <div id="services">
                <TitleComponent>
                   Nos Services
                </TitleComponent>
            </div>
            <div className="flex flex-col gap-10 justify-center items-center">
                <div>
                    <Text variant="lead-lg" className="text-center max-w-[562px]">
                        Grâce à nos offres très alléchant, immortalisez vos moments les plus fou pour en faire des souvenirs inoubliable
                    </Text>
                </div>
                <div>
                    <Services/>
                </div>
            </div>
        </>
    )
}

export default Work