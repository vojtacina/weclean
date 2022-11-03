import { ReactElement, useEffect, useRef } from "react"
import useOnClickOutside from "../hooks/clickOutside"
import { motion } from "framer-motion"

interface ModalProps {
    children: ReactElement | Array<ReactElement>,
    close: () => void
}

export default function Modal({ children, close }: ModalProps) {

    const ref = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(ref, () => close())

    const isMobile = window.innerWidth > 768 ? false : true

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: isMobile ? 50 : 0, scale: isMobile ? 1 : 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? 50 : 0, scale: isMobile ? 1 : 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-0 left-0 right-0 md:top-0 md:flex md:items-center md:justify-center z-50">
            <div ref={ref} className="bg-white  p-4 max-h-full md:rounded-xl">
                {children}
            </div>

        </motion.div>
    )
}