import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import RenderButton from "../RenderButton";
import { H1 } from "../typography/H1";
import { H2 } from "../typography/H2";
import { Paragraph } from "../typography/Paragraph";


export default function ServicesSection({ data }: { data: Array<{ title: string, description: string, button?: [string, string] }> }) {


    return (
        <section className="mt-2 py-8 md:py-12 xl:py-24">
            <MaxWidthWrapper>
                <div className={`grid grid-cols-1 ${data?.length == 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-4 md:gap-8`}>
                    {data?.map((service, i) => (
                        <div key={`service_${i}`}>
                            <Service title={service.title} subtitle={service.description} button={service.button} />
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
    button?: [string, string | (() => void)]
}

function Service({ title, subtitle, button }: ServiceType) {

    const [opened, setOpened] = useState(false)

    return (
        <>
            <div onClick={() => setOpened(!opened)} className="text-black w-full">
                <div className="flex justify-between">
                    <H2>{title}</H2>
                    <div className="md:hidden">
                        {opened ? <CaretUp size={24} /> : <CaretDown size={24} />}
                        
                    </div>
                </div>

                {opened &&
                    <>
                        <Paragraph className="opacity-75 md:hidden">{subtitle}</Paragraph>
                        {button &&
                            <div className="inline-flex md:mt-4 md:hidden">
                                <RenderButton button={button} link primary />
                            </div>
                        }</>
                }
                <Paragraph className="opacity-75 hidden md:block">{subtitle}</Paragraph>
                {button &&
                    <div className=" hidden md:inline-flex md:mt-4 ">
                        <RenderButton button={button} link primary />
                    </div>
                }


            </div>
        </>
    )
}