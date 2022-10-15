import { Dispatch, SetStateAction, useState } from "react"
import { SwitchDataType } from "../types/SwitchTypes"

export default function Switch(props: {
    data: SwitchDataType,
    setData: Dispatch<SetStateAction<SwitchDataType>> | ((data: { selected: string, options: Array<{ label: string, value: string }> }) => void)
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
        <div className={"bg-gray-100 w-full h-14 p-1.5 rounded-sm grid font-muli "} style={{ gridTemplateColumns: "repeat(" + (data?.options.length).toString() + ", minmax(0, 1fr))" }}>
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
    return (
        <div key={key} className="p-3px w-full h-full">
            <div onClick={() => setActive()} className={"text-brown800 cursor-pointer w-full h-full flex items-center justify-center px-8 " + (current == data.selected ? " bg-white rounded-sm shadow-lg font-semibold text-blue-dark " : " hover:opacity-75")}>{data.options.filter(item => item.value == current)[0].label}</div>
        </div>
    )
}