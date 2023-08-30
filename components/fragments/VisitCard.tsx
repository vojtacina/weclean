import Image from 'next/image'
import React from 'react'
import { Paragraph } from '../typography/Paragraph'

interface Props {}

function VisitCard(props: Props) {
    const {} = props

    return (
        <div className="border inline-flex items-center max-w-xs rounded-md border-gray-200 px-4 py-3">
            <div className="w-10 h-10 md:w-20 md:h-20 flex-shrink-0 rounded-full relative overflow-hidden">
                <Image src={"/images/white-face.png"} blurDataURL={"/images/white-face.png"} alt="Fotka obličeje Viktora Ciny" fill className='object-cover w-full h-full'/>
            </div>
            <div className="flex flex-col items-start pl-4 text-left">
                <div className="font-medium">Viktor Cina</div>
                <Paragraph>jednatel společnosti</Paragraph>
            </div>
        </div>
    )
}

export default VisitCard
