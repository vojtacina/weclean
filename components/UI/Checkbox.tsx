import { CheckIcon } from '@radix-ui/react-icons'

interface CheckboxType {
    label: string,
    checked: boolean,
    setChecked: (to:boolean) => void
}

export default function Checkbox({label, checked, setChecked}:CheckboxType) {


    return (
        <div className="flex items-center gap-x-3 group cursor-pointer" onClick={() => setChecked(!checked)}>
            <div className={`w-4 h-4 rounded-md flex items-center justify-center  ${checked ? " bg-blue-primary border-none " : " border border-gray-300 group-hover:border-gray-400 "}`}>
                <CheckIcon color='white' width={16} height={16} />
            </div>
            <div className="">
                {label}
            </div>
        </div>
    )
}