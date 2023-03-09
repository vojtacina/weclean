import Image from 'next/image'
import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { H1 } from '../typography/H1'
import { H2 } from '../typography/H2'
import { H3 } from '../typography/H3'
import { Paragraph } from '../typography/Paragraph'

function WhySingle({ title, description }: {
    title: string,
    description: string
}) {

    return (
        <div className="">
            <H3>{title}</H3>
            <Paragraph>{description}</Paragraph>
        </div>
    )
}

interface Props { }

function WhyChooseUs(props: Props) {
    const { } = props

    return (
        <div className="w-full py-2 md:py-24 relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 right-0 pointer-events-none">
                <div className="w-2/5 h-full rounded-r-3xl overflow-hidden relative">
                    <Image src={"/images/vacuum.jpg"} layout="fill" objectFit='cover' alt="Žena s vysavačem, úklidová firma" />
                </div>
            </div>
            <MaxWidthWrapper>
                <div className="grid md:grid-cols-2">
                    <div className="md:hidden w-full relative h-48 rounded-lg overflow-hidden mb-8">
                        <Image src={"/images/vacuum.jpg"} layout="fill" objectFit='cover' alt="Žena s vysavačem, úklidová firma" />
                    </div>
                    <div className="hidden md:block"></div>
                    <div className="">
                        <H2>Proč si vybrat nás</H2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <WhySingle title="Zkušenosti" description='Pro naše klienty pracujeme od roku 1996. Za tu dobu jsme se stali skutečnými odborníky.' />
                            <WhySingle title="Zkušenosti" description='Pro naše klienty pracujeme od roku 1996. Za tu dobu jsme se stali skutečnými odborníky.' />
                            <WhySingle title="Zkušenosti" description='Pro naše klienty pracujeme od roku 1996. Za tu dobu jsme se stali skutečnými odborníky.' />
                            <WhySingle title="Zkušenosti" description='Pro naše klienty pracujeme od roku 1996. Za tu dobu jsme se stali skutečnými odborníky.' />
                        </div>
                    </div>

                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default WhyChooseUs
