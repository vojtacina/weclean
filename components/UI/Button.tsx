import { ReactElement } from "react"


interface ButtonProps {
    primary?: boolean,
    children: string,
}

export default function Button(props:ButtonProps) {


    return (
        <div className={`${props.primary ? "bg-blue-primary text-white hover:bg-blue-500" : "bg-white text-blue-primary hover:text-opacity-75"} px-8 lg:px-16 h-12 md:h-14 rounded-sm flex items-center justify-center cursor-pointer shadow-md ` }>
            {props.children}
        </div>
    )
}