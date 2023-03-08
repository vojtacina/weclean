import { Check, CheckCircle } from "phosphor-react";
import Image from "next/image"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../UI/Button";

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
        <div id="kontakt" className="mt-2 pt-8 pb-3 md:pt-16">
            <MaxWidthWrapper>
                <div className="grid md:grid-cols-2 gap-x-12">
                    <div className="">
                        <div className="text-xl font-semibold">Kdo jsme</div>
                        <div className="text-gray-600">
                            Focuscleaning uklízí a čistí pro známé firmy napříč odvětvími
                        </div>
                        <div className="mt-10">
                            <CheckLabel>Čištění koberců extrakční metodou</CheckLabel>
                            <CheckLabel>Kompletní úklidy kanceláří a jiných komerčních prostor</CheckLabel>
                            <CheckLabel>Čištění koberců a úklid pro domácnosti</CheckLabel>
                            <CheckLabel>Široká dostupnost našich služeb za férovou cenu</CheckLabel>
                            <CheckLabel>Rychlé jednání</CheckLabel>
                            <CheckLabel>Mnohaleté zkušenosti v oboru </CheckLabel>
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-12 md:mt-0 w-full grid grid-cols-2 gap-x-12">
                            <Person name={"Vojtěch Cina"} subtitle={"specialista na hloubkové čištění koberců"} image={""} />
                            <Person name={"Monika Šťastová"} subtitle={"koordinátorka úklidových služeb"} image={""} />
                        </div>
                        <div className="mt-12">
                            <div className="font-semibold">Zaměřujeme se na celý olomoucký kraj:</div>
                            <div className="text-gray-600">Zábřeh, Šumperk, Mohelnice, Jeseník, Olomouc, Šternberk, Bruntál, Přerov</div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
            <div className="md:px-0 xl:px-24">
                <div className="md:bg-gray-100 rounded-lg mt-4 mb-2 md:my-12">
                    <MaxWidthWrapper>
                        <div className="md:flex rounded-lg bg-gray-100 md:bg-transparent p-4 md:p-0 items-center w-full py-4 md:py-12 justify-between">
                            <div className="">
                                <div className="text-gray-600">
                                    Pro vaše dotazy a poptávky jsme k dispozici na emailové adrese
                                </div>
                                <div className="text-blue-dark text-3xl md:text-4xl">info@we-clean.cz</div>
                            </div>
                            <div className="mt-2 md:mt-0 hidden md:block">
                                <CopyToClipboard
                                    text={"info@we-clean.cz"}
                                    onCopy={() => setCopied(true)}
                                >
                                    {copied ?
                                        <div className="flex items-center gap-x-2 text-green-800 text-lg px-8">
                                            <Check size={24} />
                                            <div className="">Zkopírováno</div>
                                        </div> :
                                        <Button primary>Zkopírovat e-mail</Button>
                                    }
                                </CopyToClipboard>
                            </div>

                        </div>
                    </MaxWidthWrapper>
                </div>
            </div>
            {/* <MaxWidthWrapper>
                <div className="border-t pt-4 text-gray-500">WeClean</div>
            </MaxWidthWrapper> */}
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

function Person({ name, subtitle, image }: {
    name: string,
    subtitle: string,
    image: string
}) {

    return (
        <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 relative">
                <Image src={image} layout="fill" objectFit="cover" alt={name + " - " + subtitle} />
            </div>
            <div className="text-center mt-6 font-semibold md:text-lg  text-base">{name}</div>
            <div className="text-center mt-1 text-gray-600 text-sm md:text-base">{subtitle}</div>
        </div>
    )
}