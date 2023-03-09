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

        // Minimální cena
        const minPrice = 1000

        // Cena za místnost
        const roomTax = 125

        // Příplatek za rekonstrukci
        const dirtyTax = [400, 800]


        const bins = [30, 50]
        const vacuuming = [50, 300]
        const kitchenette = [80, 300]
        const wc = [70, 300]
        const windows = [150, 450]
        const wiping = [50, 200]

        const fromPrice = minPrice + (( 
            (forms[type].bins ? bins[0] : 0) +
            (forms[type].vacuuming ? vacuuming[0] : 0) +
            (forms[type].kitchenette ? kitchenette[0] : 0) +
            (forms[type].wc ? wc[0] : 0) +
            (forms[type].windows ? windows[0] : 0) +
            (forms[type].wiping ? wiping[0] : 0) +
            (forms[type].reconstruction_cleaning ? dirtyTax[0] : 0)
        ) * forms[type].rooms)
        const toPrice = minPrice + (( 
            (forms[type].bins ? bins[1] : 0) +
            (forms[type].vacuuming ? vacuuming[1] : 0) +
            (forms[type].kitchenette ? kitchenette[1] : 0) +
            (forms[type].wc ? wc[1] : 0) +
            (forms[type].windows ? windows[1] : 0) +
            (forms[type].wiping ? wiping[1] : 0) +
            (forms[type].reconstruction_cleaning ? dirtyTax[1] : 0)
        ) * forms[type].rooms)

        setPrices({
            from: fromPrice,
            to: toPrice
        })
    }
}