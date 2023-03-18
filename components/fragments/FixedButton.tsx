import React, { ReactNode, useContext } from 'react'
import { CalcFormContext } from '../contexts/CalcFormContext'
import Button from '../UI/Button'

interface Props {
    children: ReactNode
 }

function FixedButton(props: Props) {
    const { } = props

    const {preferences, setPreferences} = useContext(CalcFormContext)

    return (
        <div className={`fixed bottom-4 left-0 right-0 flex justify-center z-40 md:hidden px-4`}>
            <div className="inline-flex">
            <Button className={`shadow-lg ${preferences.modalSent && "  bg-green-call hover:bg-green-call cursor-not-allowed"}`} primary onClick={() => setPreferences({ ...preferences, modalOpened: preferences?.modalSent ? false : true })}>{preferences?.modalSent ? "Brzy se Vám ozveme 🙂" : props.children}</Button>
            </div>
           
        </div>
    )
}

export default FixedButton
