import { useEffect, useState } from "react";
import { FormsType } from "../types/FormsType"

export default function useCalculatedPrices(type: string, forms: FormsType) {

    const [prices, setPrices] = useState({ from: 0, to: 0 })

    function calculate() {
        if (type == "carpets") {

            // Minimální cena
            const minPrice = 1750

            // Cena za m2 [min, max]
            const perMeter = [30, 50]

            // Cena za místnost
            const roomTax = 250

            // Příplatek za m2 znečištěných koberců
            const dirtyTax = [20, 50]

            // Malá nebo nepřístupná místnost
            const smallTax = [20, 30]

            const fromPrice = minPrice + (forms[type].area * (perMeter[0] + (forms[type].isDirty ? dirtyTax[0] : 0) + (forms[type].isSmall ? smallTax[0] : 0))) + (roomTax * forms[type].rooms)
            const toPrice = minPrice + (forms[type].area * (perMeter[1] + (forms[type].isDirty ? dirtyTax[1] : 0) + (forms[type].isSmall ? smallTax[1] : 0))) + (roomTax * forms[type].rooms)

            setPrices({
                from: fromPrice,
                to: toPrice
            })
        }
    }

    useEffect(() => {
        calculate()
    }, [type, forms]);

    return {
        priceFrom: prices.from,
        priceTo: prices.to
    }
}