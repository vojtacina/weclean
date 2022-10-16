

export interface SwitchDataType {
    selected: string,
    options: Array<SwitchOptionType>
}

export interface SwitchOptionType {
    label: string,
    value: string,
    description?: string
}