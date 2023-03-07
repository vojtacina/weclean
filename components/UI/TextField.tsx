
interface TextFieldProps {
    value: string,
    setValue: (to:string) => void,
    label?: string,
    type?: string
}


export default function TextField(props:TextFieldProps) {



    return (
        <div className="">
            <input className="w-full py-3 px-2 border-gray-300 hover:border-gray-400 focus:border-gray-700 focus:ring-gray-700 focus:ring-opacity-20 focus:ring-3 focus:outline-none border rounded-md placeholder:text-gray-600" type={props?.type ?? "text"} placeholder={props.label} value={props.value} onChange={(e) => props.setValue(e.target.value)} />
        </div>
    )
}