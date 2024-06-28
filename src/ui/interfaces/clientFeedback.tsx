'use client'

import FeedBack from "../components/feedback/feedback"
import TitleComponent from "../design/title"
import Text from "../design/typography"


 const FeedBackSection = ()=>{
return (
    <>
        <div id="clients">
            <TitleComponent>
                Nos Clients
            </TitleComponent>
        </div>
        <div className="flex flex-col gap-10 justify-between items-center">
            <div className="max-w-[288px] mx-10 text-center ">
                <Text>
                    Nos Clients parlent de nous
                </Text>
            </div>
            <div>
                <FeedBack/>
            </div>
        </div>
    </>
)
}

export default FeedBackSection