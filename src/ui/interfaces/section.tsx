'use client'
import clsx from "clsx";
import Image from "next/image";
import Text from "../design/typography";
import TitleComponent from "../design/title";
 const Section = () => {

    return (
        <>
        <TitleComponent>Pourquoi nous ?</TitleComponent>
            <div className={clsx(" my-[100px]  bg-gray p-10 rounded-[10px] xl:grid xl:grid-cols-2 xl:gap-10 xl:mx-10 flex flex-col gap-10 justify-between items-center")}>
                <div className={clsx(" xl:flex-row xl:gap-5 xl:items-center xl:justify-between flex flex-col items-center gap-20 justify-center ")}>
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <div className=" w-[100px] h-[100px] relative overflow-hidden rounded-full p-2">
                            <Image src={'/images/happy-face.png'} alt="image" fill className=" object-scale-down" />
                        </div>
                        <Text variant="body" tag="div" className="text-center" color="secondary">
                            +100 Clients heureux
                        </Text>
                    </div>
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <div className=" w-[100px] h-[100px] relative overflow-hidden rounded-full p-2">
                            <Image src={'/images/collaboration.png'} alt="image" fill className=" object-scale-down" />
                        </div>
                        <Text variant="body" tag="div" className="text-center" color="secondary">
                            Les Meilleurs Collaborations
                        </Text>
                    </div>
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <div className=" w-[100px] h-[100px] relative overflow-hidden rounded-full p-2">
                            <Image src={'/images/quality.png'} alt="image" fill className="object-scale-down" />
                        </div>
                        <Text variant="body" tag="div" className="text-center" color="secondary">
                            Un Travail de Qualité
                        </Text>
                    </div>

                </div>
                <div>
                    <Text variant="lead-sm" tag="span" color="secondary">
                        Collaboré avec DINERO Photography :
                    </Text>
                    <Text variant="body-sm" color="secondary">
                        une opportunité artistique incontournable !
                        Notre approche artistique allie authenticité et innovation pour capturer des moments mémorables. Grâce à nos relations professionnelles et amicales, nous avons accès à un réseau diversifié de modèles, stylistes, maquilleurs et autres professionnels de l’industrie. Votre projet bénéficiera de cette richesse de talents.
                    </Text>
                </div>
            </div>
        </>
    )
}

export default Section