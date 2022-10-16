import { ReactElement } from "react"


interface ButtonProps {
    primary?: boolean,
    children: string,
    onClick?: () => void
}

export default function Button(props:ButtonProps) {


    return (
        <div onClick={props?.onClick} className={`${props.primary ? "bg-blue-primary text-white hover:bg-blue-500" : "bg-white text-blue-primary hover:text-opacity-75"} px-8 lg:px-16 h-12 md:h-14 rounded-sm flex items-center justify-center cursor-pointer shadow-sm ` }>
            {props.children}
        </div>
    )
}