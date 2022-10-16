import { useContext, useState } from "react";
import { CarpetsCalculator } from "./CalculatorSection";
import { CalcFormContext } from "./contexts/CalcFormContext";
import Button from "./UI/Button";
import RadioGroup from "./UI/RadioGroup";


export default function CalcMobileProgress() {

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
                <>
                    <div className="text-lg font-semibold">
                        Čištění koberců
                    </div>
                    <div className="mt-4">
                        <CarpetsCalculator />
                    </div>
                    <div className="mt-4">
                        <Button primary>Další krok</Button>
                    </div>
                </>
                : <></>
            }
        </div>
    )
}