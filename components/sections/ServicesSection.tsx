import { CaretDown } from "phosphor-react";
import { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import RenderButton from "../RenderButton";
import { H1 } from "../typography/H1";
import { H2 } from "../typography/H2";
import { Paragraph } from "../typography/Paragraph";


export default function ServicesSection({ data }: { data: Array<{ title: string, description: string, button?: [string, string] }> }) {


    return (
        <div className="mt-2 py-8 md:py-12 xl:py-24">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {data?.map((service, i) => (
                        <div key={`service_${i}`}>
                            <Service title={service.title} subtitle={service.description} button={service.button} />
                        </div>
                    ))}
                </div>

            </MaxWidthWrapper>
        </div>
    )
}

interface ServiceType {
    title: string,
    subtitle: string,
    button?: [string, string | (() => void)]
}

function Service({ title, subtitle, button }: ServiceType) {

    const [opened, setOpened] = useState(false)

    return (
        <>
            <div onClick={() => setOpened(!opened)} className="text-black w-full bg-gray-100 p-6 rounded-xl md:p-0 md:bg-transparent ">
                <H2>{title}</H2>
                <Paragraph className="opacity-75">{subtitle}</Paragraph>
                {button &&
                    <div className="inline-flex md:mt-4 ">
                        <RenderButton button={button} link primary />
                    </div>
                }


            </div>
        </>
    )
}