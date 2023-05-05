import Image from 'next/image'
import React, { useState } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { H1 } from '../typography/H1'
import { H2 } from '../typography/H2'
import { H3 } from '../typography/H3'
import { Paragraph } from '../typography/Paragraph'
import { CaretDown, CaretUp } from 'phosphor-react'

function WhySingle({ title, description }: {
    title: string,
    description: string
}) {

    const [opened, setOpened] = useState(false)

    return (
        <div onClick={() => setOpened(!opened)} className="">
            <div className="flex justify-between">
                <H3>{title}</H3>
                <div className="md:hidden">
                    {opened ? <CaretUp size={24} /> : <CaretDown size={24} />}
                </div>
            </div>
            {opened &&
            <Paragraph className='md:hidden'>{description}</Paragraph>
            }

            <Paragraph className='hidden md:block'>{description}</Paragraph>
        </div>
    )
}

interface Props {
    image?: string
}

function WhyChooseUs(props: Props) {
    const { image } = props

    return (
        <section className="w-full py-2 md:py-24 relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 right-0 pointer-events-none">
                <div className="w-2/5 h-full rounded-r-3xl overflow-hidden relative">
                    <Image src={image ? `/images/${image}` : "/images/vacuum.jpg"} fill className='object-cover' alt="Žena s vysavačem, úklidová firma" />
                </div>
            </div>
            <MaxWidthWrapper>
                <div className="grid md:grid-cols-2">
                    <div className="md:hidden w-full relative h-48 rounded-lg overflow-hidden mb-8">
                        <Image src={image ? `/images/${image}` : "/images/vacuum.jpg"} fill className="object-cover" alt="Žena s vysavačem, úklidová firma" />
                    </div>
                    <div className="hidden md:block"></div>
                    <div className="">
                        <H2>Proč si vybrat nás</H2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <WhySingle title="Máme zkušenosti" description='Pro naše klienty pracujeme od roku 1996. Za tu dobu jsme se stali skutečnými odborníky.' />
                            <WhySingle title="Rychlá a jasná domluva" description='Se zákazníkem se dokážeme flexibilně domluvit na termínu i technologii. Jasně a včas.' />
                            <WhySingle title="Nebojíme se výzev" description='Disponujeme širokou škálou strojového vybavení, používáme nejmodernější technologické postupy.' />
                            <WhySingle title="Pracujeme i o víkendu" description='Pokud to provoz vašeho podnikání vyžaduje, jsme po dohodě schopni provést čištění nebo úklidové práce i o víkendu.' />
                        </div>
                    </div>

                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default WhyChooseUs
