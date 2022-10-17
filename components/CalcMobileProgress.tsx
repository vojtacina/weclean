import { useContext, useState } from "react";
import { CarpetsCalculator } from "./CalculatorSection";
import { CalcFormContext } from "./contexts/CalcFormContext";
import Button from "./UI/Button";
import RadioGroup from "./UI/RadioGroup";
import { Cross1Icon } from '@radix-ui/react-icons'

export default function CalcMobileProgress({close}:{close: () => void}) {

    const { preferences, setPreferences } = useContext(CalcFormContext)

    function setSwitchData(data: { selected: string, options: Array<{ label: string, value: string }> }) {
        setPreferences({ ...preferences, type: data.selected })
    }

    const [step, setStep] = useState(1);

    return (
        <div className="">
            {(step == 1) &&
                <>
                    <div className="text-lg font-semibold">
                        Mám zájem o...
                    </div>
                    <div className="mt-4">
                        <RadioGroup data={{
                            selected: preferences.type,
                            options:
                                [
                                    { label: "Čištění koberců", value: "carpets", description: "Profesionální čištění kusových i velkých koberců extrakční metodou." },
                                    { label: "Úklidové služby", value: "cleaning", description: "Pravidelný nebo jednorázový úklid kanceláří a domácností." }
                                ]
                        }} setData={setSwitchData} />
                    </div>
                    <div className="mt-4">
                        <Button primary onClick={() => setStep(2)}>Další krok</Button>
                    </div>
                </>
            }
            {(step == 2) &&
                (preferences.type == "carpets") ?
                <div className="flex flex-col" style={{ height: "80vh" }}>
                    <div className="text-lg flex-grow-0 flex-shrink-0 font-semibold flex justify-between items-center">
                        <div className="">
                            Čištění koberců
                        </div>
                        <div onClick={() => close()} className="">
                            <Cross1Icon />
                        </div>
                    </div>
                    <div className="mt-4 pb-4 flex-grow flex-shrink overflow-y-auto ">

                        <CarpetsCalculator />

                    </div>

                    <div className="pt-4 border-t  flex-grow-0 flex-shrink-0 flex justify-between">
                        <div className="pr-2">
                            <div className="text-xl"><span className="text-blue-dark font-bold">od 2000 Kč</span></div>
                            <div className="text-gray-500 text-xs font-normal">(maximálně 4500 Kč)</div>
                        </div>
                        <Button primary>Další krok</Button>
                    </div>
                </div>
                : <></>
            }
        </div>
    )
}