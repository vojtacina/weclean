import React, { useContext } from 'react'
import { CalcFormContext } from '../contexts/CalcFormContext'
import MaxWidthWrapper from '../MaxWidthWrapper'
import RenderButton from '../RenderButton'
import { H2 } from '../typography/H2'
import { H3 } from '../typography/H3'
import { Paragraph } from '../typography/Paragraph'
import Button from '../UI/Button'
import { useIsMobile } from '../hooks/useIsMobile'

interface Props {
    data: Array<{ name: string, description: string }>
}

function WeDoNine(props: Props) {
    const { data } = props

    const { preferences, setPreferences } = useContext(CalcFormContext)

    return (
        <section className="py-8 md:py-24">
            <MaxWidthWrapper noPadding>
                <H2 className='mb-8 md:mb-10 text-2xl md:text-4xl px-4'>Zajistíme</H2>
                <div className="w-full overflow-x-auto pl-4 md:pr-4">
                    <div className="w-full md:grid flex md:grid-cols-3 gap-4">
                        {data.map((single, i) => (
                            <div key={`delame_${single.name}`} className="">
                                <WeDo name={single.name} description={single.description} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full mt-8 md:mt-8 md:flex justify-center px-4">
                    <div className="md:inline-flex">
                        <Button primary={useIsMobile("sm") ? false : true} onClick={() => setPreferences({ ...preferences, modalOpened: true })}>Mám zájem o tyto služby</Button>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default WeDoNine

function WeDo({ name, description }: {
    name: string,
    description?: string
}) {

    return (
        <div className="h-full p-4 border duration-200 rounded" style={{minWidth: 200}}>
            <div className="">
                <H3>{name}</H3>
                <Paragraph>{description}</Paragraph>
            </div>
        </div>
    )
}