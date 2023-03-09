import { ReactElement } from "react"
import { motion } from "framer-motion"

export interface ButtonProps {
    primary?: boolean,
    link?: boolean
    children: string | ReactElement,
    onClick?: () => void,
    className?: string
}

export default function Button(props: ButtonProps) {


    return (
        <motion.div
            whileTap={{ scale: 0.95 }}
            onClick={props?.onClick} className={`${props.primary ? "bg-blue-primary text-white hover:bg-blue-bright" : props?.link ? "bg-transparent text-black border " : "bg-white text-blue-primary hover:text-opacity-75"} px-8 lg:px-6 h-12 md:h-12 rounded-md flex text-lg items-center duration-150 justify-center cursor-pointer ${props?.className} `}>
            {props.children}
        </motion.div>
    )
}