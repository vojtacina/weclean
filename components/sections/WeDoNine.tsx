import React, { useContext } from 'react'
import { CalcFormContext } from '../contexts/CalcFormContext'
import MaxWidthWrapper from '../MaxWidthWrapper'
import RenderButton from '../RenderButton'
import { H2 } from '../typography/H2'
import { H3 } from '../typography/H3'
import { Paragraph } from '../typography/Paragraph'
import Button from '../UI/Button'

interface Props {
    data: Array<{ name: string, description: string }>
}

function WeDoNine(props: Props) {
    const { data } = props

    const {preferences, setPreferences} = useContext(CalcFormContext)

    return (
        <section className="py-8 md:py-24">
            <MaxWidthWrapper>
                <H2 className='mb-10 text-2xl md:text-4xl'>Zajistíme</H2>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.map((single, i) => (
                        <div key={`delame_${single.name}`} className="">
                            <WeDo name={single.name} description={single.description} />
                        </div>
                    ))}
                </div>
                <div className="w-full mt-8 flex justify-center">
                    <div className="inline-flex">
                        <Button primary onClick={() => setPreferences({...preferences, modalOpened: true})}>Mám zájem o tyto služby</Button>
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
        <div className="h-full p-4 border duration-200 rounded">
            <div className="">
                <H3>{name}</H3>
                <Paragraph>{description}</Paragraph>
            </div>
        </div>
    )
}