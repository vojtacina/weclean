

export interface FormsType {
    carpets: {
        area: number,
        rooms: number,
        isDirty: boolean,
        isSmall: boolean
    },
    cleaning: {
        area: number,
        rooms: number,
        wc: boolean,
        bins: boolean,
        vacuuming: boolean,
        wiping: boolean,
        windows: boolean,
        kitchenette: boolean,
        reconstruction_cleaning: boolean
    }
}