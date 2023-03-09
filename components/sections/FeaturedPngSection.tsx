import Image from 'next/image'
import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import RenderButton from '../RenderButton'
import { H2 } from '../typography/H2'
import { Paragraph } from '../typography/Paragraph'
import Button from '../UI/Button'

interface Props {
    data: {
        logosImage?: string,
        title: string,
        description: string,
        button: [string, string | (() => void)],
        image: string
    }
}

function FeaturedPngSection(props: Props) {
    const { data } = props

    return (
        <div className="w-full py-8 md:py-24 overflow-hidden">
            <MaxWidthWrapper>
                <div className="w-full grid md:grid-cols-5">
                    <div className="md:col-span-3 md:pr-24 order-2 md:order-1 mt-8 md:mt-0">
                        {data?.logosImage &&
                            <Image src={`/images/${data.logosImage}`} alt="Loga společností, kterých čisticí stroje používáme." width={244} height={51} />
                        }
                        <H2 className='mt-4'>{data.title}</H2>
                        <Paragraph>{data.description}</Paragraph>
                        <div className="md:inline-flex mt-4">
                            <RenderButton button={data.button} primary />
                        </div>

                    </div>
                    <div className="md:col-span-2 order-1 md:order-2 relative h-24 md:h-auto">
                        <div className="w-full h-full rounded-3xl bg-blue-bg"></div>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            <div className="w-full h-full relative scale-150 pointer-events-none">
                                <Image src={`/images/${data.image}`} alt="Čistící stroj Cimex" layout='fill' objectFit='contain' />
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default FeaturedPngSection
