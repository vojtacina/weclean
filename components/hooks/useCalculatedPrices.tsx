import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FormsType } from "../types/FormsType"

export default function useCalculatedPrices(type: string, forms: FormsType) {

    const [prices, setPrices] = useState({ from: 0, to: 0 })

    useEffect(() => {
        calculatePrice(type, forms, setPrices)
    }, [type, forms]);

    return {
        priceFrom: prices.from,
        priceTo: prices.to
    }
}

function calculatePrice(type: string, forms: FormsType, setPrices: Dispatch<SetStateAction<{ from: number, to: number }>>) {
    if (type == "carpets") {

        // Minimální cena
        const minPrice = 1750

        // Cena za m2 [min, max]
        const perMeter = [30, 50]

        // Příplatek za m2 znečištěných koberců
        const dirtyTax = [15, 20]

        // Malá nebo nepřístupná místnost
        const smallTax = [15, 20]

        const fromPrice = minPrice + (forms[type].area * (perMeter[0] + (forms[type].isDirty ? dirtyTax[0] : 0) + (forms[type].isSmall ? smallTax[0] : 0))) 
        const toPrice = minPrice + (forms[type].area * (perMeter[1] + (forms[type].isDirty ? dirtyTax[1] : 0) + (forms[type].isSmall ? smallTax[1] : 0)))

        setPrices({
            from: fromPrice,
            to: toPrice
        })
    }

    else if (type == "cleaning") {

        setPrices({
            from: 0,
            to: 0
        })
    }
}