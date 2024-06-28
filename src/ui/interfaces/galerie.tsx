'use client'
import clsx from "clsx"
import Text from "../design/typography"
import TitleComponent from "../design/title"
import ImageCarousel from "../components/carousel/carousel"
import ImagesUrl from "@/data/imagesUrl"

 const Galerie = ()=>{
    return(
        <>
            <div id="portfolio">
                <div>
                    <TitleComponent>
                        Notre Galerie
                    </TitleComponent>
                </div>
                <div className={clsx('md:flex-row md:justify-between md:gap-7 md:items-end flex flex-col gap-8 justify-between items-start')}>
                    <Text className="max-w-[436px]">Découvrez nos meilleurs collaborations en quelques clichés</Text>
                    <Text tag="span" variant="body-sm" color="gray">(Veuillez cliqué sur les images pour mieux les visualiser et défilez les images vers la gauche pour en voir plus)</Text>
                </div>
                <div className="max-w-[1300px] shadow-2xl  m-10">
                   <ImageCarousel images={ImagesUrl}/>
                </div>
            </div>
        </>
    )
}

export default Galerie