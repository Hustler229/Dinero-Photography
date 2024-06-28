import Text from "../design/typography"

const HomeComponent = () => {


    return (
        <>
            <div className="p-10 pt-20 xl:p-20" id="home">
                <div className="flex flex-col justify-between gap-6">
                    <div className="flex flex-row gap-10 items-center">
                        <Text variant="title" tag="span">Hello</Text>
                        <span className="text-3xl"> &#128075; </span>
                    </div>
                    <div className="flex flex-col justify-end gap-10 items-start">
                        <Text>Abraham ALANKPOEDJA</Text>
                        <Text variant="body" className="text-end">PDG du studio DINERO Photographie</Text>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent