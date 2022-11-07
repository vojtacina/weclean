import { useState, createContext, useEffect, ReactElement, SetStateAction, Dispatch } from "react";
import { FormsType } from "../types/FormsType";

const preferencesDefault = {
    type: "carpets",
    phone: "",
    email: "",
    modalOpened: false
} as {
    type: "carpets" | "cleaning",
    phone: string,
    email: string,
    modalOpened: boolean
}

const formsDefault = {
    carpets: {
        area: 0,
        rooms: 0,
        isDirty: false,
        isSmall: false
    },
    cleaning: {
        area: 0,
        rooms: 0,
        wc: false,
        bins: false,
        vacuuming: false,
        wiping: false,
        windows: false,
        kitchenette: false,
        reconstruction_cleaning: false
    }
} as FormsType



export const CalcFormContext = createContext({ 
    preferences: preferencesDefault, 
    setPreferences: {} as any,
    forms: formsDefault,
    setForms: {} as Dispatch<SetStateAction<FormsType>>
});

export function CalcFormContextProvider(props: { children: ReactElement | ReactElement[] }) {

    const [preferences, setPreferences] = useState(preferencesDefault)
    const [forms, setForms] = useState(formsDefault)

    return (
        <CalcFormContext.Provider
            value={{
                preferences: preferences,
                setPreferences: setPreferences,
                forms: forms,
                setForms: setForms
            }} >
            {props.children}
        </CalcFormContext.Provider>
    )
}