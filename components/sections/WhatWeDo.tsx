import { ArrowRight } from 'phosphor-react'
import React, { ReactNode } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { H2 } from '../typography/H2'
import { H3 } from '../typography/H3'

interface Props {}

function WhatWeDo(props: Props) {
    const {} = props

    return (
        <section className="">
            <MaxWidthWrapper>
                <div className="pt-8 md:pt-24 grid md:grid-cols-3 gap-4 md:gap-8">
                    <div className="">
                        <H2>Jaké úklidy provádíme?</H2>
                    </div>
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                            <What>Úklid kanceláří</What>
                            <What>Úklid ordinací</What>
                            <What>Úklid hal a skladů</What>
                            <What>Úklid obchodů</What>
                            <What>Úklid hotelů</What>
                            <What>Strojní čištění ploch</What>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

function What({children}:{children: ReactNode}) {

    return(
        <div className="flex gap-2 items-center">
            <div className="rounded-md bg-blue-bg text-blue-primary p-2">
                <ArrowRight size={24} />
            </div>
            <div className="">
                <div>{children}</div>
            </div>
        </div>
    )
}

export default WhatWeDo