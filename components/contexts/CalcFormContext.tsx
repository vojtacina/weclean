import { useState, createContext, useEffect, ReactElement } from "react";

const preferencesDefault = {
    type: "carpets",
    phone: "",
    email: ""
} as {
    type: "carpets" | "cleaning",
    phone: string,
    email: string
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
        rooms: 0
    }
} as {
    carpets: {
        area: number,
        rooms: number,
        isDirty: boolean,
        isSmall: boolean
    },
    cleaning: {
        area: number,
        rooms: number
    }
}



export const CalcFormContext = createContext({ 
    preferences: preferencesDefault, 
    setPreferences: {} as any,
    forms: formsDefault,
    setForms: {} as any
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