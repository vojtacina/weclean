import { ReactElement } from "react"
import {motion} from "framer-motion"

interface ButtonProps {
    primary?: boolean,
    children: string | ReactElement,
    onClick?: () => void
}

export default function Button(props:ButtonProps) {


    return (
        <motion.div
        whileTap={{scale: 0.95}}
        onClick={props?.onClick} className={`${props.primary ? "bg-blue-primary text-white hover:bg-blue-500" : "bg-white text-blue-primary hover:text-opacity-75"} px-8 lg:px-16 h-12 md:h-14 rounded-md flex text-lg items-center duration-150 justify-center cursor-pointer shadow-sm ` }>
            {props.children}
        </motion.div>
    )
}