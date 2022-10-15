import { useContext, useState } from "react";
import { CalcFormContext } from "./contexts/CalcFormContext";
import Switch from "./UI/Switch";


export default function CalculatorSection() {

    const { preferences, setPreferences } = useContext(CalcFormContext)

    function setSwitchData(data: { selected: string, options: Array<{ label: string, value: string }> }) {
        setPreferences({ ...preferences, type: data.selected })
    }

    return (
        <div className="mt-2 py-8 md:py-16">
            <div className="w-full flex justify-center">
                <h2 className="text-2xl md:text-4xl text-blue-dark">Kalkulace předběžné ceny</h2>
            </div>
            <div className="w-full flex justify-center mt-6">
                <div className="w-full md:w-auto md:inline-flex">
                    <Switch data={{
                        selected: preferences.type,
                        options:
                            [
                                { label: "Čištění koberců", value: "carpets" },
                                { label: "Úklidové služby", value: "cleaning" }
                            ]
                    }} setData={setSwitchData} />
                </div>
            </div>
        </div>
    )
}