import { Check, CheckCircle } from "phosphor-react";
import Image from "next/image"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../UI/Button";
import VisitCard from "../fragments/VisitCard";

export default function ContactBlock() {

    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false)
            }, 5000)
        }
    }, [copied]);

    return (
        <div id="kontakt" className="mt-2 pt-8 pb-8 md:pt-16">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <div className="">
                        <div className="text-xl font-semibold">Kdo jsme</div>
                        <div className="text-gray-600">
                            Focuscleaning uklízí a čistí pro známé firmy napříč odvětvími
                        </div>
                        <div className="mt-10">
                            <CheckLabel>Čištění koberců extrakční metodou</CheckLabel>
                            <CheckLabel>Kompletní úklidy kanceláří a jiných komerčních prostor</CheckLabel>
                            <CheckLabel>Dezinfekce aut, kanceláří a jiných prostorů ozónem</CheckLabel>
                            <CheckLabel>Široká dostupnost našich služeb za férovou cenu</CheckLabel>
                            <CheckLabel>Rychlé jednání</CheckLabel>
                            <CheckLabel>Máme zkušenosti od roku 1996</CheckLabel>
                            <CheckLabel>50+ spokojených klientů</CheckLabel>
                        </div>
                        <div className="mt-4 italic">
                            „Citát táty“
                        </div>
                        <div className="mt-4">
                            <VisitCard />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="">
                            <iframe src="https://www.google.com/maps/d/embed?mid=1HQzXer-GueYBBq6sKsOTk29WxdHbGH4&hl=cs&ehbc=2E312F" width="100%" height="480"></iframe>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <div className="mt-12">
                            <div className="font-semibold">Obslužná oblast: Brno a okolí</div>
                            <div className="text-gray-600">Bohunice, Bosonohy, Brněnské Ivanovice, Bystrc, Černá Pole, Černovice, Dolní Heršpice, Dvorska, Holásky, Horní Heršpice, Husovice, Chrlice, Ivanovice, Jehnice, Jundrov, Kníničky, Kohoutovice, Komárov, Komín, Královo Pole, Lesná, Líšeň, Maloměřice, Medlánky, Mokrá Hora, Nový Lískovec, Obřany, Ořešín, Pisárky, Ponava, Přízřenice, Řečkovice, Sadová, Slatina, Soběšice, Staré Brno, Starý Lískovec, Stránice, Štýřice, Trnitá, Tuřany, Útěchov u Brna, Veveří, Zábrdovice, Žabovřesky, Žebětín, Židenice, Zábřeh, Šumperk, Mohelnice, Jeseník, Olomouc, Šternberk, Bruntál, Přerov</div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

function CheckLabel({ children }: { children: string }) {


    return (
        <div className="flex text-blue-dark mt-1">
            <div className="">
                <CheckCircle size={24} weight="fill" />
            </div>
            <div className="ml-1">{children}</div>
        </div>
    )
}
