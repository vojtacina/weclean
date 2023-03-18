import { Dispatch, SetStateAction, useState } from "react"
import { SwitchDataType } from "../types/SwitchTypes"
import { CheckIcon } from '@radix-ui/react-icons'


export default function RadioGroup(props: {
    data: SwitchDataType,
    setData: Dispatch<SetStateAction<SwitchDataType>> | ((data: { selected: string, options: Array<{ label: string, value: string, description?: string }> }) => void)
}) {

    const { data, setData } = props

    const [exampleData, setExampleData] = useState({
        selected: "choice1",
        options:
            [
                { label: "Volba 1", value: "choice1" },
                { label: "Volba 2", value: "choice2" }
            ]
    })

    return (
        <div className={"w-full grid grid-cols-1 gap-2 font-muli "}>
            {data?.options?.map((item, i) => (
                <Item key={item.value} data={data} current={item.value} setActive={() => setData({
                    ...data,
                    selected: item.value
                })} />
            ))}
        </div>
    )
}

function Item({ data, current, setActive, key }: {
    data: SwitchDataType,
    current: string,
    setActive: () => void,
    key: string
}) {

    const isActive = current == data.selected ? true : false

    return (
        <div key={key} onClick={() => setActive()}  className={`${isActive ? " " : "border border-transparent"}`}>
            <div className={`p-5 cursor-pointer rounded group flex gap-x-4 items-center ${isActive ? " border-2 border-blue-primary " : "border border-gray-300 hover:border-gray-200"}`}>
                <div className="">
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full   ${isActive ? "bg-blue-primary" : "border border-gray-300 group-hover:border-gray-200"}`}>
                        <CheckIcon color='white' width={18} height={18} />
                    </div>
                </div>
                <div className="">
                    <div className="">{data.options.filter(item => item.value == current)[0].label}</div>
                    <div className=" text-xs text-gray-500">{data.options.filter(item => item.value == current)[0].description}</div>
                </div>
            </div>
        </div>
    )
}