
interface TextFieldProps {
    value: string,
    setValue: (to:string) => void,
    label?: string,
    type?: string
}


export default function TextField(props:TextFieldProps) {



    return (
        <div className="">
            <input className="w-full py-3 px-2 border-gray-300 border rounded-md" type={props?.type ?? "text"} placeholder={props.label} value={props.value} onChange={(e) => props.setValue(e.target.value)} />
        </div>
    )
}