import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GoogleLogo, Pencil, Star } from 'phosphor-react'
import React from 'react'
import VisitCard from '../components/fragments/VisitCard'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Footer from '../components/sections/Footer'
import Header from '../components/sections/Header'
import { H1 } from '../components/typography/H1'
import { H2 } from '../components/typography/H2'
import { H3 } from '../components/typography/H3'
import { Paragraph } from '../components/typography/Paragraph'
import Button from '../components/UI/Button'

interface Props { }

function Onas(props: Props) {
    const { } = props

    const clients = [
        { name: "Fio banka", logo: "clients/fio.png", url: "https://www.fio.cz", description: "Lorem ipsum" },
        { name: "Footshop", logo: "clients/footshop.png", url: "https://www.footshop.cz/cs/", description: "Čištění koberců rozlehlých kanceláří v centru Prahy" },
        { name: "Jazyková škola Glossa", logo: "clients/glosa.jpg", url: "https://www.glossa.cz", description: "Kompletní úklid kanceláří jazykové školy" },
        { name: "Potrefená husa", logo: "clients/husa.png", url: "https://www.potrefena-husa.eu", description: "Lorem ipsum" },
        { name: "Partners", logo: "clients/partners.png", url: "https://www.partners.cz", description: "Hloubkové čištění koberců klientského oddělení" }
    ]

    return (
        <div className={"font-archivo bg-gray-100"}>
            <Head>
                <title>Profesionální úklid a čištění koberců Brno a okolí — FocusCleaning</title>
                <meta name="description" content="Nabízíme úklidové služby a čištění koberců pro firmy a průmysl. On-line kalkulace ceny zdarma a hned. Garantujeme 100% spokojenost." />
            </Head>
            <nav>
                <Header invert />
                <div className="h-16 bg-white absolute top-0 left-0 right-0"></div>
            </nav>
            <main className={"bg-white "}>
                <div className="pt-32 pb-8">
                    <MaxWidthWrapper>

                        <div className="md:px-32">
                            <H1 className='md:text-5xl font-bold text-center mb-16'>O firmě Focus Cleaning</H1>
                            <div className="">
                                <Paragraph>Činnost společnosti zahájil v roce 1996 Viktor Cina, který je dodnes jejím jednatelem. Na počátku působil jako fyzická osoba a zaměstnával svou rodinu a přátele. Za téměř tři desítky let existence prošla firma řadou formálních i faktických změn, které postupně vedly ke zjednodušení postupů, nastavení přímé komunikace se zákazníkem a četným přizpůsobením vůči vývoji na trhu. Výsledkem je společnost, která nabízí komplexní servis a minimalizuje čas, který zákazník stráví organizací úklidové služby podle svých představ.</Paragraph>
                                <Paragraph>Ve firmě rozvíjíme to, co se nám v práci dlouhodobě osvědčilo. Výsledkem našeho úsilí je příjemné a čisté prostředí jako nezbytný předpoklad nejen pro osobnostní růst každého jednotlivce, ale také pro úspěšné vykonávání každé další činnosti. Kvalitním úklidem zbavujeme interiéry nežádoucích nečistot, ale zároveň odpovídajícím způsobem ošetřujeme majetek našich klientů, chráníme ho a prodlužujeme jeho životnost.</Paragraph>
                                <Paragraph>Mnoho zákazníků nám dlouhodobě zachovává věrnost. Velice si toho vážíme a vnímáme to jako závazek do budoucnosti</Paragraph>
                            </div>
                            <div className="flex justify-end mt-8">
                                <VisitCard />
                            </div>
                        </div>
                        <div id="klienti" className="mt-12">
                            <H2 className='text-center'>Naši spokojení klienti</H2>
                            <Paragraph className='text-center md:px-64'>Více než 25 let poskytujeme služby firmám a jednotlivcům. Za tu dobu jde například o tyto firmy:</Paragraph>
                            <div className="grid mt-8 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {clients.map(client => (
                                    <div key={`client_${client.name}`} className="">
                                        <Client name={client.name} logo={client.logo} description={client.description} url={client.url} />
                                    </div>
                                ))}
                            </div>
                            <Link target="_blank" className='mt-8 flex flex-col items-center w-full' href="https://goo.gl/maps/hyjezDy8efRgtTsD8">
                                <div className="inline-flex">
                                    <Button primary className=''>
                                        <div className="flex items-center gap-x-2">
                                            <Star size={24} />
                                            <div className="">Zobrazit recenze</div>
                                        </div>
                                    </Button>
                                </div>
                                <div className="mt-2 text-center text-sm">
                                    <Paragraph>Budeme moc rádi když nás i vy ohodnotíte.</Paragraph>
                                </div>
                            </Link>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </main >
            <footer className={""}>
                <Footer />
            </footer>
        </div >
    )
}

function Client({ name, logo, description, url }: {
    name: string,
    description?: string,
    logo: string,
    url: string
}) {

    return (
        <Link className="flex h-full items-start justify-between gap-x-4 p-4 border duration-200 hover:border-gray-400 rounded-md" href={url} target="_blank">
            <div className="">
                <H3>{name}</H3>
                <Paragraph>{description}</Paragraph>
            </div>

            <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden relative bg-white pl-2">
                <div className="relative w-full h-full">
                    <Image src={`/images/${logo}`} fill alt={`Logo společnosti ${name}`} className="object-contain" />
                </div>
            </div>
        </Link>
    )
}

export default Onas
