import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GoogleLogo, Pencil, Star } from 'phosphor-react'
import React, { useState } from 'react'
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
        { name: "Palackého Univerzita Olomouc", logo: "clients/upol.png", url: "https://www.upol.cz", description: "Čištění koberců a čalouněného nábytku, čištění podlah a voskování" },
        { name: "Footshop", logo: "clients/footshop.png", url: "https://www.footshop.cz/cs/", description: "Čištění koberců rozlehlých kanceláří v centru Prahy" },
        { name: "Potrefená husa", logo: "clients/husa.png", url: "https://www.potrefena-husa.eu", description: "Lorem ipsum" },
        { name: "Partners", logo: "clients/partners.png", url: "https://www.partners.cz", description: "Hloubkové čištění koberců klientského oddělení" },
        { name: "ESO9 International", logo: "clients/eso9.png", url: "https://www.eso9.cz/cs-cz/", description: "Čištění koberců a čalouněného nábytku" },
        { name: "EGT logistics Solution a.s", logo: "clients/egt.svg", url: "https://www.egtexpress.com/cs/", description: "Čištění koberců a čalouněného nábytku" },
        { name: "Ackee", logo: "clients/ackee.png", url: "https://www.ackee.cz", description: "Zajištění pravidelného  úklidu kanceláří" },
        { name: "SingnageOS", logo: "clients/signageos.webp", url: "https://www.signageos.io", description: "Zajištění pravidelného  úklidu kanceláří, čištění koberců a čalouněného nábytku" },
        { name: "3Pillar Global", logo: "clients/3pillar.png", url: "https://www.3pillarglobal.com", description: "Čištění koberců a čalouněného nábytku, čištění podlah a voskování" },
        { name: "BRIGHT HR", logo: "clients/bright.jpg", url: "https://brighthr.cz", description: "Čištění koberců a čalouněného nábytku, zajištění pravidelného  úklidu kanceláří" },
        { name: "Blue Style", logo: "clients/bluestyle.png", url: "https://www.blue-style.cz", description: "Úklid kanceláří, čištění podlah a nanesení  vosků na podlahy" },
        { name: "Jazyková škola Glossa", logo: "clients/glosa.jpg", url: "https://www.glossa.cz", description: "Kompletní úklid kanceláří jazykové školy" },
    ]

    return (
        <div className={"font-archivo bg-gray-100"}>
            <Head>
                <title>O nás - Focus Cleaning</title>
                <meta name="description" content="Jsme firma s dlouholetou tradicí sahající až do roku 1996, kdy byla firma založena. Za tu dobu již máme spoustu referencí a dobrých hodnocení. 50+ klientů." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://focuscleaning.cz/o-nas" />
                <meta property="og:title" content="O nás - Focus Cleaning" />
                <meta property="og:description" content="Jsme firma s dlouholetou tradicí sahající až do roku 1996, kdy byla firma založena. Za tu dobu již máme spoustu referencí a dobrých hodnocení. 50+ klientů." />
                <meta property="og:image" content="https://focuscleaning.cz/images/index-bg.jpg"></meta>
            </Head>

            <Header invert />
            <div className="h-16 bg-white absolute top-0 left-0 right-0"></div>

            <main className={"bg-white "}>
                <div className="pt-32 pb-8">
                    <MaxWidthWrapper>

                        <div className="md:px-32">
                            <H1 className='md:text-5xl font-bold text-center'>O firmě Focus Cleaning</H1>
                            <div className="mt-8">
                                <Paragraph className=' text-justify'>Činnost společnosti zahájil v roce 1996 Viktor Cina, který je dodnes jejím jednatelem. Na počátku působil jako fyzická osoba a zaměstnával svou rodinu a přátele. Za téměř tři desítky let existence prošla firma řadou formálních i faktických změn, které postupně vedly ke zjednodušení postupů, nastavení přímé komunikace se zákazníkem a četným přizpůsobením vůči vývoji na trhu. Výsledkem je společnost, která nabízí komplexní servis a minimalizuje čas, který zákazník stráví organizací úklidové služby podle svých představ.</Paragraph>
                                <Paragraph className=' text-justify'>Ve firmě rozvíjíme to, co se nám v práci dlouhodobě osvědčilo. Výsledkem našeho úsilí je příjemné a čisté prostředí jako nezbytný předpoklad nejen pro osobnostní růst každého jednotlivce, ale také pro úspěšné vykonávání každé další činnosti. Kvalitním úklidem zbavujeme interiéry nežádoucích nečistot, ale zároveň odpovídajícím způsobem ošetřujeme majetek našich klientů, chráníme ho a prodlužujeme jeho životnost.</Paragraph>
                                <Paragraph className=' text-justify'>Mnoho zákazníků nám dlouhodobě zachovává věrnost. Velice si toho vážíme a vnímáme to jako závazek do budoucnosti</Paragraph>
                            </div>
                            <div className="flex justify-end mt-8">
                                <VisitCard />
                            </div>
                        </div>
                        <div id="klienti" className="mt-12 pt-12">
                            <H2 className='text-center'>Naši spokojení klienti</H2>
                            <Paragraph className='text-center md:px-64'>Více než 25 let poskytujeme služby firmám a jednotlivcům. Za tu dobu jde například o tyto firmy:</Paragraph>
                            <div className="grid mt-8 grid-cols-2 md:grid-cols-4 gap-6">
                                {clients.map(client => (
                                    <div key={`client_${client.name}`} className="">
                                        <Client name={client.name} logo={client.logo ?? ""} description={client.description} url={client.url} />
                                    </div>
                                ))}
                            </div>
                            <Link target="_blank" className='mt-8 flex flex-col items-center w-full' title='Recenze a profil na Google' href="https://goo.gl/maps/hyjezDy8efRgtTsD8">
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
            <Footer />
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
        <Link title={`Webové stránky ${name}`} className="flex h-full items-start group justify-center gap-x-4 relative p-4 border duration-200 hover:border-gray-400 rounded" href={url} target="_blank">
            <div className="absolute group-hover:opacity-100 opacity-0 duration-200 top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-2 p-4">
                <H3 className='text-center'>{name}</H3>
                <Paragraph className='text-center'>{description}</Paragraph>
            </div>

            <div className={`w-32 h-32 group-hover:opacity-0 opacity-100 duration-300 flex-shrink-0 rounded overflow-hidden relative bg-white pl-2`}>
                <div className="relative w-full h-full">
                    <Image src={`/images/${logo}`} fill alt={`Logo společnosti ${name}`} className="object-contain" />
                </div>
            </div>
        </Link>
    )
}

function ClientOld({ name, logo, description, url }: {
    name: string,
    description?: string,
    logo: string,
    url: string
}) {

    return (
        <Link className="flex h-full items-start justify-between gap-x-4 p-4 border duration-200 hover:border-gray-400 rounded" href={url} target="_blank">
            <div className="">
                <H3>{name}</H3>
                <Paragraph>{description}</Paragraph>
            </div>

            <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden relative bg-white pl-2">
                <div className="relative w-full h-full">
                    <Image src={`/images/${logo}`} fill alt={`Logo společnosti ${name}`} className="object-contain" />
                </div>
            </div>
        </Link>
    )
}

export default Onas
