interface Props {
    children : React.ReactNode
}

const Container = ({children}:Props)=>{
    return (
        <>
            <div className="mx-5 xl:mx-20 my-5">
                {children}
            </div>
        </>
    )
}
export default Container