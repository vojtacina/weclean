import { Check, CheckCircle } from "phosphor-react";
import Image from "next/image"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../UI/Button";
import VisitCard from "../fragments/VisitCard";
import Link from "next/link";

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
        <section id="kontakt" className="mt-2 pt-8 pb-8 md:pt-16">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <div className="">
                        <p className="text-xl font-medium">Působíme převážně na území Moravy</p>
                        <p className="text-gray-600">
                            Neváhejte se nám ale ozvat, ať jste odkudkoliv. Rádi navrhneme řešení, které vám bude vyhovovat.
                        </p>
                        <div className="my-10">
                            <CheckLabel>Čištění koberců unikátní metodou „tří kartáčů“, extrakční metodou</CheckLabel>
                            <CheckLabel>Kompletní úklidy kanceláří a jiných komerčních prostor</CheckLabel>
                            <CheckLabel>Kompletní péče o podlahy – čištění a aplikace ochranných polymerních vosků</CheckLabel>
                            <CheckLabel>Široká dostupnost našich služeb</CheckLabel>
                            <CheckLabel>Rychlé jednání</CheckLabel>
                            <CheckLabel>Máme zkušenosti od roku 1996</CheckLabel>
                            <CheckLabel>Věrnostní slevová karta zákazníka</CheckLabel>
                            <CheckLabel>50+ spokojených klientů</CheckLabel>
                            <CheckLabel>Úklid, který se umí přizpůsobit různým situacím a prostorům</CheckLabel>
                            <CheckLabel>V rámci našich úklidových služeb nabízíme nejen pravidelný, ale i jednorázový úklid</CheckLabel>
                        </div>
                        {/* <p className="mt-0 italic">
                            „Věřím, že pro vás bude příjemným zážitkem zjištění, jak mnoho nám záleží na vašem pocitu dobré volby, na vytvoření skutečného partnerství a výsledného uspokojení z dobře odvedené práce.“
                        </p> */}
                        <div className="mt-4">
                            <VisitCard />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="relative w-full h-96 rounded-lg overflow-hidden">
                            <Image src="/images/map.png" fill className="object-cover" alt={"Oblast působení - Morava"} />
                        </div>
                        <p className="font-medium mt-4">Obslužná oblast: Brno, Olomouc a okolí</p>
                        <p className="text-gray-600">Působíme na celé Moravě a rádi za vámi dojedeme. </p>
                        <div className="flex items-center gap-1 mt-2">
                            <p className="">Můžete nás sledovat také na</p>
                            <Link className="text-blue-primary" href={"https://www.facebook.com/profile.php?id=100090482157323"} title="Naše facebooková stránka">Facebooku</Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

function CheckLabel({ children }: { children: string }) {


    return (
        <div className="flex text-blue-dark mt-1">
            <div className="">
                <Check size={24} weight="fill" />
            </div>
            <p className="ml-1">{children}</p>
        </div>
    )
}
