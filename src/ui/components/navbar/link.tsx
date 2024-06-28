'use client'
import Text from "@/ui/design/typography"
import clsx from "clsx"
import Link from "next/link"
interface Props {
    children: React.ReactNode
    id?: string
    link?:boolean
    className?: string
    action?:any
}

 const NavLink = ({ children, className, id ,link=false,action=()=>null }: Props) => {
    let href:string = ''
    if (link) {
        href = '/'+ id
        
    }else{
        href = "/#" + id
    }
    return (
        <>
            <Link href={href} className={clsx( className)} onClick={action}>
                <Text variant="body-sm" color="secondary" className=" hover:text-blue transition-all focus:text-blue">
                    {children}
                </Text>
            </Link>

        </>
    )
}

export default NavLink