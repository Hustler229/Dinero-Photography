import Text from "./typography"

interface Props {
    children: React.ReactNode
}

 const TitleComponent = ({ children }: Props) => {
    return (
        <div className="py-[20px]">
            <Text variant="lead-lg" tag="p" color="primary">
                {children}
            </Text>
            <div className="w-[50px] border-b-2 border-primary pt-[10px] "></div>
        </div>
    )
}
export default TitleComponent
