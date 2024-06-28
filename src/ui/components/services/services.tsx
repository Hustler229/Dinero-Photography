'use client'
import ServiceList from "@/data/servicesList";
import Text from "@/ui/design/typography";
import clsx from "clsx";
import Image from "next/image";
const list = ServiceList

 const Services = () => {
    const Data = list.map((data)=>(
        <>
            <div className="flex flex-col justify-center text-center items-center gap-5 border border-secondary bg-secondary rounded-[10px] p-3 transition-all shadow-md ">
                    <div className=" w-[15px] h-[15px] bg-white rounded-full shadow-inner"></div>
                    <div>
                        <Image src={data.image} alt="image" width={70} height={70}/>
                    </div>
                    <div>
                        <Text variant="lead-sm" color="white">
                            {data.name}
                        </Text>
                    </div>
                    <div>
                        <Text tag="p" variant="body-sm" color="gray">
                            {data.description}
                        </Text>
                    </div>
                </div>  
        </>
    ))
    return (
        <>
            <div className={clsx('4xl:grid 4xl:grid-cols-5 4xl:gap-10 flex flex-col gap-10 items-center justify-center')}>
                {Data}
            </div>
        </>
    )
}

export default Services