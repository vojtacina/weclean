import { useState, createContext, useEffect, ReactElement, SetStateAction, Dispatch } from "react";
import { FormsType } from "../types/FormsType";
import { PreferencesType } from "../types/PreferencesType";

const preferencesDefault = {
    type: "carpets",
    contactType: "phone",
    name: "",
    phone: "",
    email: "",
    note: "",
    modalOpened: false,
    modalSent: false
} as PreferencesType

const formsDefault = {
    carpets: {
        area: 200,
        isDirty: false,
        isSmall: false
    },
} as FormsType



export const CalcFormContext = createContext({
    preferences: preferencesDefault,
    setPreferences: {} as Dispatch<SetStateAction<PreferencesType>>,
    forms: formsDefault,
    setForms: {} as Dispatch<SetStateAction<FormsType>>
});

export function CalcFormContextProvider(props: { children: ReactElement | ReactElement[] }) {

    const [preferences, setPreferences] = useState(preferencesDefault)
    const [forms, setForms] = useState(formsDefault)

console.log(preferences)

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