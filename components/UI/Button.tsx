import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler, ReactElement, ReactNode } from "react"
import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion"

export interface ButtonProps {
    primary?: boolean,
    link?: boolean
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string,
    type?: "button" | "submit" | "reset" | undefined
}

export default function Button(props: ButtonProps) {

    return (
        <motion.button
            type={props?.type}
            whileTap={{ scale: 0.95 }}
            onClick={props?.onClick} className={`${props.primary ? "bg-blue-primary text-white hover:bg-blue-bright" : props?.link ? "bg-transparent text-black border hover:border-zinc-400 " : "bg-white text-blue-primary hover:text-opacity-75"} px-8 h-12 md:h-12 rounded whitespace-nowrap flex text-lg items-center duration-150 justify-center w-full cursor-pointer ${props?.className} `}>
            {props.children}
        </motion.button>
    )
}