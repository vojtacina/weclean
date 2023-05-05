import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react"

interface TextFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string,
    setValue: (to: string) => void,
    label?: string,
    type?: string,
    icon?: ReactNode,
    name?: string
}


export default function TextField(props: TextFieldProps) {



    return (
        <div className="relative">
            <div className="text-gray-600 z-0 absolute top-0 left-0 bottom-0 flex items-center justify-center w-12 h-full">
                {props?.icon}
            </div>

            <input required={props?.required} name={props?.name} className={`w-full py-3 ${props.icon ? "pl-10" : "pl-2"} pr-2 border-gray-200 hover:border-gray-400 focus:border-gray-700 focus:ring-gray-700 focus:ring-opacity-20 focus:ring-3 focus:outline-none border rounded-md placeholder:text-gray-600`} type={props?.type ?? "text"} placeholder={props.label} value={props.value} onChange={(e) => props.setValue(e.target.value)} />
        </div>
    )
}