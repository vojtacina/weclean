import { ReactElement, useRef } from "react"
import useOnClickOutside from "../hooks/clickOutside"


interface ModalProps {
    children: ReactElement | Array<ReactElement>,
    close: () => void
}

export default function Modal({children, close}:ModalProps) {

    const ref = useRef<HTMLDivElement|null>(null)

    useOnClickOutside(ref, () => close())

    return (
        <div ref={ref} className="absolute bottom-0 left-0 right-0 bg-white p-4 max-h-full">
            {children}
        </div>
    )
}