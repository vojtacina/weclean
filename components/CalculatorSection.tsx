import { useContext, useState } from "react";
import { CalcFormContext } from "./contexts/CalcFormContext";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Switch from "./UI/Switch";
import Image from "next/image"
import Slider from "./UI/Slider";
import NumberInput from "./UI/NumberInput";
import Checkbox from "./UI/Checkbox";
import Button from "./UI/Button";
import useCalculatedPrices from "./hooks/useCalculatedPrices";
import { price } from "./helpers/price";

export default function CalculatorSection() {

    const { preferences, setPreferences, forms } = useContext(CalcFormContext)
    const { priceFrom, priceTo } = useCalculatedPrices(preferences.type, forms)

    function setSwitchData(data: { selected: string, options: Array<{ label: string, value: string }> }) {
        setPreferences({ ...preferences, type: data.selected })
    }

    return (
        <div id="kalkulacka" className="mt-2 py-8 md:py-16 border-t">
            <div className="w-full hidden md:flex justify-center">
                <h2 className="text-2xl md:text-4xl text-blue-dark">Kalkulace předběžné ceny</h2>
            </div>
            <div className="w-full hidden md:flex justify-center mt-6">
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
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-4 md:pt-12 gap-x-12">
                    <div className="hidden md:block col-span-3">
                        {preferences.type == "carpets" &&
                            <CarpetsCalculator />
                        }
                        <div className="mt-8">
                            <div className="flex justify-between">
                                <div className="">
                                    <div className="text-2xl">Celková cena <span className="text-blue-dark font-bold">od {price(priceFrom)}</span></div>
                                    <div className="text-gray-500">(maximálně však {price(priceTo)})</div>
                                </div>
                                <div className="">
                                    <Button primary onClick={() => setPreferences({...preferences, modalOpened: true})}>Objednat</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="font-normal text-center md:text-left text-gray-600">

                        <div className="w-full h-36 relative">
                            <Image src={"/images/garance.png"} layout="fill" objectFit="contain" objectPosition={"center"} />
                        </div>
                        <div className="mt-6">
                            Pokud nebudete spokojeni a nebo se nám nepodaří vyčistit to, co jsme slíbili, účtovat nic nebudeme.
                        </div>
                        <div className=" my-4 text-blue-dark text-lg font-semibold">
                            Nic tedy neriskujete!
                        </div>
                        <div>
                            Máme bohaté zkušenosti s čištěním koberců pro známé firmy, které byly s čištěním spokojené.
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export function CarpetsCalculator() {

    const { forms, setForms } = useContext(CalcFormContext)


    return (
        <div className="text-sm md:text-base">
            <div className="">
                <div className="flex justify-between">
                    <div className="">Plocha koberců</div>
                    <div className="text-xl text-blue-dark font-semibold">{forms.carpets.area} m²</div>
                </div>
                <div className="mt-4">
                    <Slider value={forms.carpets.area} setValue={(to) => setForms({ ...forms, carpets: { ...forms.carpets, area: to } })} max={1000} />
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-between">
                    <div className="">Počet místností</div>
                    <div className="">
                        <NumberInput value={forms.carpets.rooms} setValue={(to) => setForms({ ...forms, carpets: { ...forms.carpets, rooms: to } })} />
                    </div>
                </div>
                <div className="mt-4">
                    <Slider value={forms.carpets.rooms} setValue={(to) => setForms({ ...forms, carpets: { ...forms.carpets, rooms: to } })} max={30} />
                </div>
            </div>
            <div className="mt-8">
                <div className="">
                    <Checkbox label="Koberce jsou silně znečištěné" checked={forms.carpets.isDirty} setChecked={(to) => setForms({ ...forms, carpets: { ...forms.carpets, isDirty: to } })} />
                </div>
                <div className="mt-2">
                    <Checkbox label="Místnosti jsou členité a obashují nábytek, židle apod." checked={forms.carpets.isSmall} setChecked={(to) => setForms({ ...forms, carpets: { ...forms.carpets, isSmall: to } })} />
                </div>
            </div>
            <div className="mt-8">
                <div className="w-full bg-gray-100 rounded-md p-4">
                    Po odeslání poptávky vám zavoláme a domluvíme se na termínu a možnostech dokončení zakázky.
                </div>
            </div>

        </div>
    )
}