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
                            <div className="italic">
                                <Paragraph>Každá firma se vyvíjí, mění své strategie, inovuje systém řízení a s ním i strukturu zaměstnanců. Od svých začátků, kdy jsem zaměstnával rodinu a své přátele, jsme společně ušli dlouhou cestu. Přesto jsem si i po čtrnácti letech zachoval ideály, které jsem měl už v počátcích svého podnikání. Byly to poctivě odvedená práce a úcta k člověku. Proto dnes mohu říci, že i když naše firma doznala za oněch čtrnáct let velkých změn, v jádru zůstala stejná.</Paragraph>
                                <Paragraph>Mým přáním je usnadnit vám alespoň malou část rozhodování. Jsem připraven nabídnout vám naše kompletní služby a poskytnout vám v plné míře to, co očekáváte, totiž kvalitní a pohodlný servis.</Paragraph>
                                <Paragraph>V naší firmě neustále hledáme nové a lepší způsoby, jak zajistit pro svého klienta příjemné a čisté prostředí, které je nutnou podmínkou k jeho vlastnímu rozvoji.</Paragraph>
                                <Paragraph>Pro vás, našeho partnera, je důležité, že nezabezpečujeme pouze úklid, ale že odpovídajícím způsobem, na vysoké profesionální úrovni chráníme, ošetřujeme a prodlužujeme životnost vašeho majetku. Velice si vážím toho, že i v dnešní době je mnoho společností, které toto oceňují.</Paragraph>
                                <Paragraph>Držíte v rukou tuto prezentaci jako vizitku naší práce. Věřím, že pro vás bude příjemným zážitkem zjištění, jak mnoho nám záleží na vašem pocitu dobré volby, na vytvoření skutečného partnerství a výsledného uspokojení z dobře odvedené práce.</Paragraph>
                            </div>
                            <div className="flex justify-end mt-8">
                                <VisitCard />
                            </div>
                        </div>
                        <div className="mt-12">
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
