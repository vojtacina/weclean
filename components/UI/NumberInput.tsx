

interface NumberInputProps {
    value: number,
    setValue: (to:number) => void,
    min?: number,
    max?: number,
    id?:string
}

export default function NumberInput({value, setValue, min, max, id}:NumberInputProps) {


    return (
        <div className="flex ">
            <input id={id} min={min} max={max} type={"number"} value={value} onChange={(e) => setValue(Number(e.target.value))} className="text-xl font-semibold w-16 text-right" />
        </div>
    )
}