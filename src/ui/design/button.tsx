import clsx from "clsx"
import { FiLoader } from "react-icons/fi"

interface Props {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' |'default'
    type?:'submit'|'button'
    className?:string
    href?:string
    isLoading?:boolean
}

 const Button = ({ children, variant = 'primary',type='button' ,className,href='',isLoading = false}: Props) => {

    let btnVariant = ''

    switch (variant) {
        case 'primary':
            btnVariant = 'bg-blue text-body-sm px-[30px] py-[10px] rounded-[5px] text-white '
            break;
        case 'secondary':
            btnVariant = 'bg-secondary text-body-sm border border-white px-[30px] py-[10px] rounded-[5px] text-white'
            break;
        case 'default':
            btnVariant = 'bg-gray text-body-sm   px-[30px] py-[10px] rounded-[5px] text-black '
            break;
    }
    const loader = <div className="w-5 h-5 rounded-full border  border-l-0 border-b-0 animate-spin"></div>

    return(
        <>
            <a href={href}>
                <button className={clsx(btnVariant,'quicksand flex gap-3 justify-center items-center')} type={type}>
                    {isLoading ? loader : ''}
                    {children}
                </button>
            </a>
        </>
    )
}

export default Button