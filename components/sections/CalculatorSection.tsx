import { useContext, useEffect, useState } from "react";
import Image from "next/image"
import useCalculatedPrices from "../hooks/useCalculatedPrices";
import { CalcFormContext } from "../contexts/CalcFormContext";
import Switch from "../UI/Switch";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../UI/Button";
import { price } from "../helpers/price";
import Slider from "../UI/Slider";
import NumberInput from "../UI/NumberInput";
import Checkbox from "../UI/Checkbox";
import { H2 } from "../typography/H2";
import { Paragraph } from "../typography/Paragraph";
import VisitCard from "../fragments/VisitCard";
import { ShieldCheck } from "phosphor-react";
import Link from "next/link";


export default function CalculatorSection({ select }: { select?: "carpets" | "cleaning" | "floors" }) {

    const { preferences, setPreferences, forms } = useContext(CalcFormContext)
    const { priceFrom, priceTo } = useCalculatedPrices(preferences.type, forms)

    function setSwitchData(data: { selected: string, options: Array<{ label: string, value: string }> }) {
        setPreferences({ ...preferences, type: data.selected as "carpets" | "cleaning" | "floors" })
    }

    useEffect(() => {
        if (preferences && setPreferences && select) {
            setPreferences({ ...preferences, type: select })
        }
    }, []);

    return (
        <div id="kalkulacka" className="mt-2 py-8 md:py-16">
            <div className="w-full hidden md:flex justify-center">
                <h2 className="text-2xl md:text-4xl">Kalkulace předběžné ceny</h2>
            </div>
            <div className="w-full hidden md:flex justify-center mt-6">
                <div className="w-full md:w-auto md:inline-flex">
                    <Switch data={{
                        selected: preferences.type,
                        options:
                            [
                                { label: "Čištění koberců", value: "carpets" },
                                { label: "Úklidové služby", value: "cleaning" },
                                { label: "Péče o podlahy", value: "floors" }
                            ]
                    }} setData={setSwitchData} />
                </div>
            </div>
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-9 md:pt-12 gap-x-12">
                    <div className="hidden md:block col-span-6">
                        {preferences.type == "carpets" &&
                            <div className="flex flex-col justify-center h-full">
                                <CarpetsCalculator />
                                <div className="mt-8">
                                    <div className="flex justify-between">
                                        <div className="">
                                            <div className="text-2xl">Celková cena <span className="text-blue-dark font-medium">od {price(priceFrom)}</span></div>
                                            <div className="text-gray-500">(maximálně však {price(priceTo)})</div>
                                        </div>
                                        <div className="">
                                            <Button primary onClick={() => setPreferences({ ...preferences, modalOpened: true })}>Nezávazně poptat</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {preferences.type != "carpets" &&
                            <NoFormMessage subtitle={`Určit cenu za ${preferences.type == "cleaning" ? "úklid kanceláří" : "obnovu povrchů, broušení schodišť a další služby"} je velmi individuální. Rádi vám předběžnou cenu ale sdělíme po předání bližších informací o vaší zakázce.`} />
                        }
                    </div>
                    <div className="md:col-span-3 font-normal text-center md:text-left text-gray-600 bg-blue-bg p-6 rounded">

                        <div className="w-full flex justify-center text-blue-primary">
                            <ShieldCheck size={100} weight="fill" />
                        </div>
                        <div className="mt-6">
                            Snažíme se odvádět poctivou, pečlivou a kvalitní práci. Přesně takovou, za jakou chcete platit.
                        </div>
                        <div className=" my-4 text-lg font-medium text-black">
                            Určitě budete spokojeni i vy!
                        </div>
                        <div>
                            Spokojenost potvrzují i známé firmy, které s námi spolupracují.
                        </div>
                        <div className="w-full h-12 relative my-4">
                            <Image src="/images/references.png" alt="Loga firem našich klientů" className=" md:object-left" layout="fill" objectFit="contain" />
                            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-blue-bg"></div>
                        </div>
                        <Link href={"/o-nas#klienti"}>
                            <Button>Zobrazit další reference</Button>
                        </Link>

                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export function NoFormMessage({ subtitle, buttonAction }: { subtitle: string, buttonAction?: () => void }) {

    const { preferences, setPreferences } = useContext(CalcFormContext)

    return (
        <div className="w-full md:h-full bg-gray-100 rounded flex items-center py-4 md:py-8 px-4 md:px-16">
            <div className="flex-col justify-center items-center text-center">
                <H2 className="mb-4">Pro cenový odhad nás prosím kontaktujte</H2>
                <Paragraph className="mb-4">{subtitle}</Paragraph>
                <Paragraph className="mb-6">Sami vám zavoláme, když nám necháte číslo nebo nám můžete zavolat rovnou.</Paragraph>
                <div className="inline-flex mb-6">
                    <Button primary onClick={buttonAction ?? (() => setPreferences({ ...preferences, modalOpened: true }))}><>Nechte nám <span className="hidden sm:block">&nbsp;svůj&nbsp;</span> telefon</></Button>
                </div>
                <Paragraph>nebo nám můžete</Paragraph>
                <div className="flex justify-center items-baseline gap-2">
                    <Paragraph>zavolat na:</Paragraph>
                    <a href="tel:777772054" className="font-medium text-2xl">77777 20 54</a>
                </div>
                {/* <div className="mt-4">
                    <VisitCard />
                </div> */}
            </div>
        </div>
    )
}

export function CarpetsCalculator() {

    const { forms, setForms } = useContext(CalcFormContext)


    return (
        <div className="">
            <div className="">
                <div className="flex items-center justify-between">
                    <label htmlFor="area">Plocha koberců</label>

                    {forms.carpets.area == 0 ?
                        <div className="text-lg font-semibold">Zatím nevím</div>
                        :
                        <div className="flex gap-2">
                            <NumberInput id="area" min={0} max={999} value={forms.carpets.area} setValue={(to) => setForms({ ...forms, carpets: { ...forms.carpets, area: to }, changed: true })} />
                            <div className="text-xl font-medium">m²</div>
                        </div>
                    }

                </div>
                <div className="mt-4">
                    <Slider aria-label="Plocha koberců" value={forms.carpets.area} setValue={(to) => setForms({ ...forms, carpets: { ...forms.carpets, area: to }, changed: true })} max={999} />
                </div>
                {forms.carpets.area != 0 &&
                    <div className="">
                        <div onClick={() => setForms({ ...forms, carpets: { ...forms.carpets, area: 0 }, changed: true })} className="text-blue-primary hover:opacity-80 cursor-pointer">Zatím nevíte?</div>
                    </div>
                }
            </div>
            <div className="mt-8">
                <div className="">
                    <Checkbox label="Koberce jsou silně znečištěné" checked={forms.carpets.isDirty} setChecked={(to) => setForms({ ...forms, carpets: { ...forms.carpets, isDirty: to } })} />
                </div>
                <div className="mt-2">
                    <Checkbox label="Místnosti jsou členité a obashují nábytek, židle apod." checked={forms.carpets.isSmall} setChecked={(to) => setForms({ ...forms, carpets: { ...forms.carpets, isSmall: to } })} />
                </div>
            </div>
            <div className="mt-8 hidden md:block">
                <div className="w-full bg-gray-100 rounded p-4">
                    Po odeslání poptávky vám zavoláme a domluvíme se na termínu a možnostech dokončení zakázky.
                </div>
            </div>

        </div>
    )
}