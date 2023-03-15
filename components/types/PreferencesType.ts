export interface PreferencesType {
    type: "carpets" | "cleaning" | "floors",
    contactType: "phone" | "email",
    name: string,
    phone: string,
    email: string,
    note: string,
    modalOpened: boolean,
    modalSent: boolean
}