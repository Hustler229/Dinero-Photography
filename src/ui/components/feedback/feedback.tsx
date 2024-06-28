'use client'

import { ClientFeedback } from "@/data/clientFeedback";
import Text from "@/ui/design/typography";
import clsx from "clsx";



const ClientSaying = ClientFeedback

const FeedBack = () => {
    const feeds = ClientSaying.map((data) => (
        <>
            <div className="bg-gray p-5 max-w-[400px] flex flex-col gap-5 rounded-[10px] shadow-md">
                <Text variant="body-lg" tag="p" color="secondary">
                    {data.advice}
                </Text>
                <Text variant="body" tag="p" color="dark" className="text-end">
                    {data.name}
                </Text>
            </div>
        </>
    ))
    return (
        <>
            <div className={clsx('lg:grid lg:grid-cols-3 lg:gap-5 flex flex-col gap-10 justify-between items-center')}>
                {feeds}
            </div>
        </>
    );
}

export default FeedBack
