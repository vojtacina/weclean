import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import RenderButton from "../RenderButton";
import { H1 } from "../typography/H1";
import { H2 } from "../typography/H2";
import { Paragraph } from "../typography/Paragraph";
import Image from "next/image";
import Link from "next/link";


export default function ServicesSpecialSection({ data }: { data: Array<{ title: string, description: string, button?: [string, string], image: string }> }) {


    return (
        <section className="mt-2 py-8 md:py-12 xl:py-24">
            <MaxWidthWrapper>
                <div className={`grid grid-cols-1 ${data?.length == 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-4 md:gap-8`}>
                    {data?.map((service, i) => (
                        <div key={`service_${i}`}>
                            <Service title={service.title} subtitle={service.description} button={service.button} image={service.image} />
                        </div>
                    ))}
                </div>

            </MaxWidthWrapper>
        </section>
    )
}

interface ServiceType {
    title: string,
    subtitle: string,
    image: string,
    button?: [string, string | (() => void)]
}

function Service({ title, subtitle, button, image }: ServiceType) {

    const img = require(`../../public/images/${image}`)

    return (
        <>
            <Link href={button?.[1] as string ?? "/"} className="w-full h-full p-8 flex relative group cursor-pointer border border-transparent rounded-lg hover:border-gray-200">
                <div className="z-10 w-full h-full">
                    <div className="flex justify-between text-black">
                        <H2>{title}</H2>
                    </div>
                    <Paragraph className="text-black">{subtitle}</Paragraph>
                </div>
                
            </Link>
        </>
    )
}