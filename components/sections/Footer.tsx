import { Phone } from 'phosphor-react'
import React, { useContext } from 'react'
import { CalcFormContext } from '../contexts/CalcFormContext'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { H2 } from '../typography/H2'
import { H3 } from '../typography/H3'
import { Paragraph } from '../typography/Paragraph'
import Button from '../UI/Button'

interface Props { }

function Footer(props: Props) {
    const { } = props
    const {preferences, setPreferences} = useContext(CalcFormContext)

    return (
        <div id="zapati" className="w-full py-12 bg-gray-100">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="">
                        FocusCleaning<br />
                        IČO: 7267264724<br />
                        Jindřišská 23<br />
                        Praha 100 00
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className='font-medium text-lg'>Telefonický kontakt</h2>
                        <div className="text-2xl text-blue-primary">77777 20 54</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className='font-medium text-lg'>E-mailový kontakt</h2>
                        <div className="text-2xl text-blue-primary">info@focuscleaning.cz</div>
                    </div>
                    <div className="flex flex-col justify-center items-end md:col-span-2 pb-8 md:pb-0">
                        <div className="hidden md:inline-flex">
                        <Button onClick={() => setPreferences({...preferences, modalOpened: true })} primary>
                            <div className="flex items-center gap-1">
                                <Phone size={24} />
                                <div className="">Zavolejte mi</div>
                            </div>
                            
                        </Button>
                        </div>
                      
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default Footer