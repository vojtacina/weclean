

interface NumberInputProps {
    value: number,
    setValue: (to:number) => void
}

export default function NumberInput({value, setValue}:NumberInputProps) {


    return (
        <div className="flex ">
            <input type={"number"} value={value} onChange={(e) => setValue(Number(e.target.value))} className="text-xl font-semibold w-12" />
        </div>
    )
}