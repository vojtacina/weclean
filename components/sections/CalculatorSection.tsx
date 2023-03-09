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
        setPreferences({ ...preferences, type: data.selected })
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
                                { label: "Žulové podlahy/schody", value: "floors" }
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
                                            <div className="text-2xl">Celková cena <span className="text-blue-dark font-bold">od {price(priceFrom)}</span></div>
                                            <div className="text-gray-500">(maximálně však {price(priceTo)})</div>
                                        </div>
                                        <div className="">
                                            <Button primary onClick={() => setPreferences({ ...preferences, modalOpened: true })}>Objednat</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {preferences.type != "carpets" &&
                            <NoFormMessage subtitle="Určit cenu za úklid kanceláří je velmi individuální. Rádi vám předběžnou cenu ale sdělíme po předání bližších informací o vaší zakázce." />
                        }
                    </div>
                    <div className="md:col-span-3 font-normal text-center md:text-left text-gray-600 bg-blue-bg p-6 rounded-md">

                        <div className="w-full flex justify-center text-blue-primary">
                            <ShieldCheck size={100} weight="fill" />
                        </div>
                        <div className="mt-6">
                            Pokud nebudete spokojeni a nebo se nám nepodaří vyčistit to, co jsme slíbili, účtovat nic nebudeme.
                        </div>
                        <div className=" my-4 text-lg font-medium text-black">
                            Nic tedy neriskujete!
                        </div>
                        <div>
                            Spokojenost potvrzují i známé firmy, které s námi spolupracují.
                        </div>
                        <div className="w-full h-12 relative my-4">
                            <Image src="/images/references.png" alt="Loga firem našich klientů" className=" md:object-left" layout="fill" objectFit="contain" />
                            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-blue-bg"></div>
                        </div>
                        <Link href={"/o-nas"}>
                        <Button>Zobrazit další reference</Button>
                        </Link>

                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export function NoFormMessage({ subtitle }: { subtitle: string }) {

    const { preferences, setPreferences } = useContext(CalcFormContext)

    return (
        <div className="w-full h-full bg-gray-100 rounded-md flex items-center py-8 px-16">
            <div className="flex-col justify-center items-center text-center">
                <H2 className="mb-4">Pro cenový odhad nás prosím kontaktujte</H2>
                <Paragraph className="mb-4">{subtitle}</Paragraph>
                <Paragraph className="mb-6">Sami vám zavoláme, když nám necháte číslo nebo nám můžete zavolat rovnou.</Paragraph>
                <div className="inline-flex mb-6">
                    <Button primary onClick={() => setPreferences({ ...preferences, modalOpened: true })}>Nechte nám svůj telefon</Button>
                </div>
                <Paragraph>nebo nám můžete</Paragraph>
                <div className="flex justify-center items-baseline gap-2">
                    <Paragraph>zavolat na:</Paragraph>
                    <a href="tel:777772054" className="font-medium text-2xl">77777 20 54</a>
                </div>
                <div className="mt-4">
                    <VisitCard />
                </div>
            </div>
        </div>
    )
}

export function CleaningCalculator() {

    const { forms, setForms } = useContext(CalcFormContext)


    return (
        <div className="text-sm md:text-base">
            <div className="mt-0">
                <div className="flex justify-between">
                    <div className="">Počet místností, ve kterých se bude uklízet</div>
                    <div className="">
                        <NumberInput value={forms.cleaning.rooms} setValue={(to) => setForms({ ...forms, cleaning: { ...forms.cleaning, rooms: to } })} />
                    </div>
                </div>
                <div className="mt-4">
                    <Slider value={forms.cleaning.rooms} setValue={(to) => setForms({ ...forms, cleaning: { ...forms.cleaning, rooms: to } })} max={30} />
                </div>
            </div>
            <div className="mt-8">
                <div className="">
                    <Checkbox label="Vynesení košů" checked={forms.cleaning.bins} setChecked={(to) => setForms({ ...forms, cleaning: { ...forms.cleaning, bins: to } })} />
                </div>
                <div className="mt-2">
                    <Checkbox label="Úklid kuchyně nebo kuchyňky" checked={forms.cleaning.kitchenette} setChecked={(to) => setForms({ ...forms, cleaning: { ...forms.cleaning, kitchenette: to } })} />
                </div>
                <div className="mt-2">
                    <Checkbox label="Vysávání koberců" checked={forms.cleaning.vacuuming} setChecked={(to) => setForms({ ...forms, cleaning: { ...forms.cleaning, vacuuming: to } })} />
                </div>
                <div className="mt-2">
                    <Checkbox label="Úklid a umývání sociálních zařízení a koupelen" checked={forms.cleaning.wc} setChecked={(to) => setForms({ ...forms, cleaning: { ...forms.cleaning, wc: to } })} />
                </div>
                <div className="mt-2">
                    <Checkbox label="Umývání oken" checked={forms.cleaning.windows} setChecked={(to) => setForms({ ...forms, cleaning: { ...forms.cleaning, windows: to } })} />
                </div>
                <div className="mt-2">
                    <Checkbox label="Vytírání" checked={forms.cleaning.wiping} setChecked={(to) => setForms({ ...forms, cleaning: { ...forms.cleaning, wiping: to } })} />
                </div>
                <div className="mt-2">
                    <Checkbox label="Jde o úklid po rekonstrukci, malování nebo je prostor silně znečištěný" checked={forms.cleaning.reconstruction_cleaning} setChecked={(to) => setForms({ ...forms, cleaning: { ...forms.cleaning, reconstruction_cleaning: to } })} />
                </div>
            </div>
            <div className="mt-8">
                <div className="w-full bg-gray-100 rounded-md p-4">
                    Mějte na paměti, že výpočet ceny úklidových služeb je velmi přibližný a proto je rozmezí cen tak velké. Přesnější cenu vám rádi sdělíme po odeslání poptávky.
                </div>
            </div>

        </div>
    )
}

export function CarpetsCalculator() {

    const { forms, setForms } = useContext(CalcFormContext)


    return (
        <div className="">
            <div className="">
                <div className="flex justify-between">
                    <div className="">Plocha koberců</div>
                    <div className="flex gap-2">
                        <NumberInput min={0} max={999} value={forms.carpets.area} setValue={(to) => setForms({ ...forms, carpets: { ...forms.carpets, area: to } })} />
                        <div className="text-xl font-medium">m²</div>
                    </div>
                </div>
                <div className="mt-4">
                    <Slider value={forms.carpets.area} setValue={(to) => setForms({ ...forms, carpets: { ...forms.carpets, area: to } })} max={999} />
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