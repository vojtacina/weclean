import { useContext, useState } from "react";
import { CarpetsCalculator, CleaningCalculator } from "./sections/CalculatorSection";
import { CalcFormContext } from "./contexts/CalcFormContext";
import Button from "./UI/Button";
import RadioGroup from "./UI/RadioGroup";
import { Cross1Icon } from '@radix-ui/react-icons'
import useCalculatedPrices from "./hooks/useCalculatedPrices";
import TextField from "./UI/TextField";
import { PhoneIncoming } from "phosphor-react"
import { price } from "./helpers/price";

export default function CalcMobileProgress({ close }: { close: () => void }) {

    const { preferences, setPreferences, forms } = useContext(CalcFormContext)
    const { priceFrom, priceTo } = useCalculatedPrices(preferences.type, forms)

    function setSwitchData(data: { selected: string, options: Array<{ label: string, value: string }> }) {
        setPreferences({ ...preferences, type: data.selected })
    }

    const [step, setStep] = useState(window.innerWidth > 784 ? 3 : 1)

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
                ((preferences.type == "carpets") ?
                <div className="flex flex-col" style={{ height: window.innerHeight - 100 }}>
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
                            <div className="text-xl"><span className="text-blue-dark font-bold">od {price(priceFrom)}</span></div>
                            <div className="text-gray-500 font-xs">(max. {price(priceTo)})</div>
                        </div>
                        <Button primary onClick={() => setStep(3)}>Další krok</Button>
                    </div>
                </div>
                : 
                <div className="flex flex-col" style={{ height: window.innerHeight - 100 }}>
                    <div className="text-lg flex-grow-0 flex-shrink-0 font-semibold flex justify-between items-center">
                        <div className="">
                            Úklidové služby
                        </div>
                        <div onClick={() => close()} className="">
                            <Cross1Icon />
                        </div>
                    </div>
                    <div className="mt-4 pb-4 flex-grow flex-shrink overflow-y-auto ">

                        <CleaningCalculator />

                    </div>

                    <div className="pt-4 border-t  flex-grow-0 flex-shrink-0 flex justify-between">
                        <div className="pr-2">
                            <div className="text-xl"><span className="text-blue-dark font-bold">od {price(priceFrom)}</span></div>
                            <div className="text-gray-500 text-xs font-normal">(maximálně {price(priceTo)})</div>
                        </div>
                        <Button primary onClick={() => setStep(3)}>Další krok</Button>
                    </div>
                </div>
                )
            }
            {(step == 3) &&
                <>
                    <div className="text-lg font-semibold">
                        Ještě poslední krok...
                    </div>
                    <div className="block mt-0 text-sm text-gray-700 max-w-xs">
                        Ozveme se Vám do 24 hodin a domluvíme se s Vámi na termínu a dalších podrobnostech
                    </div>
                    <div className="mt-4">
                        <TextField value={preferences.email} label="Váš e-mail" setValue={(to) => setPreferences({ ...preferences, email: to })} />
                        <div className="mt-2"></div>
                        <TextField type="tel" value={preferences.phone} label="Vaše telefonní číslo" setValue={(to) => setPreferences({ ...preferences, phone: to })} />

                    </div>
                    <div className="mt-2">
                        <Button primary onClick={() => close()}>
                            <div className="flex items-center gap-x-1">
                                <PhoneIncoming size={24} />
                                <div className="text-lg">Potvrdit</div>
                            </div>
                        </Button>
                    </div>
                    {/* <div className="md:block hidden mt-3 text-sm text-gray-600 max-w-xs">
                        Ozveme se Vám do 24 hodin a domluvíme se s Vámi na termínu a dalších podrobnostech
                    </div> */}
                </>
            }
        </div>
    )
}