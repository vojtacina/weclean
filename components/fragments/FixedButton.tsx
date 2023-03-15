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
        <div className={`fixed bottom-4 left-0 right-0 flex justify-center z-40 ${!preferences.modalSent && "md:hidden" } px-4`}>
            <Button className={`shadow-lg ${preferences.modalSent && "bg-slate-800 hover:bg-slate-800 cursor-not-allowed"}`} primary onClick={() => setPreferences({ ...preferences, modalOpened: preferences?.modalSent ? false : true })}>{preferences?.modalSent ? "Brzy se Vám ozveme 🙂" : props.children}</Button>
        </div>
    )
}

export default FixedButton
