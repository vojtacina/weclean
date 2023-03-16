import { SetStateAction, useContext, useState } from "react";
import { CarpetsCalculator, NoFormMessage } from "./sections/CalculatorSection";
import { CalcFormContext } from "./contexts/CalcFormContext";
import Button from "./UI/Button";
import RadioGroup from "./UI/RadioGroup";
import { Cross1Icon } from '@radix-ui/react-icons'
import useCalculatedPrices from "./hooks/useCalculatedPrices";
import TextField from "./UI/TextField";
import { ArchiveTray, At, Envelope, EnvelopeSimple, HourglassMedium, PaperPlaneTilt, Phone, PhoneIncoming, User, X } from "phosphor-react"
import { price } from "./helpers/price";
import Switch from "./UI/Switch";
import { SwitchDataType } from "./types/SwitchTypes";
import TextArea from "./UI/TextArea";
import axios from "axios";

export default function CalcMobileProgress({ close }: { close: () => void }) {

    const { preferences, setPreferences, forms } = useContext(CalcFormContext)
    const { priceFrom, priceTo } = useCalculatedPrices(preferences.type, forms)

    const [step, setStep] = useState(window.innerWidth > 784 ? 3 : 1)
    const [processing, setProcessing] = useState(false)

    function setSwitchData(data: { selected: string, options: Array<{ label: string, value: string }> }) {
        setPreferences({ ...preferences, type: data.selected as "carpets" | "cleaning" | "floors" })
    }

    function setContactSwitch(data: { selected: string, options: Array<{ label: string, value: string }> }) {
        setPreferences({ ...preferences, contactType: data.selected as "phone" | "email" })
    }

    function humanTextFromType(type: "carpets" | "cleaning" | "floors") {
        switch (type) {
            case "carpets": return "čištění koberců"
            case "cleaning": return "úklidové služby"
            case "floors": return "služby související s podlahami nebo broušením schodů"
        }
    }

    function humanTextDetails() {
        let details = ""
        if(preferences.note) {
            details += preferences.note
        }
        if(preferences.type == "carpets") {
           
            details += ((preferences.note ? ", " : "") + forms.carpets.area+ " m²")
            if(forms.carpets.isDirty) {
                details += ", silné znečištění"
            }
            if(forms.carpets.isSmall) {
                details += ", malé nebo málo přístupné místnosti"
            }
            details += ", vypočteno na " + priceFrom + " - " + priceTo
        }

        if(details != "") {
            return "("+details+")"
        }
        else {
            return null
        }
    }

    async function send() {
        setProcessing(true)
        if(!processing) {
            try {
                const res = await axios.post("/api/notify", {
                    fullname: preferences.name,
                    contact: preferences.contactType == "phone" ? preferences.phone : preferences.email,
                    service: humanTextFromType(preferences.type),
                    details: humanTextDetails()
                })
        
                if(res) {
                    setProcessing(false)
                    setPreferences({ ...preferences, modalSent: true, modalOpened: false })
                }
            }
            catch(err) {
                alert("Nepodařilo se odeslat poptávku. Kontaktujte nás se svou poptávkou prosím telefonicky nebo e-mailem než chybu opravíme. Děkujeme a omlouváme se za komplikace.")
            }
            
        }
        
    }

    return (
        <div className="">
            {(step == 1) &&
                <>
                    <div className="text-lg font-semibold mb-2 flex items-center justify-between">
                        <div className="">Mám zájem o...</div>
                        <div className="cursor-pointer" onClick={() => setPreferences({ ...preferences, modalOpened: false })}><X size={24} /></div>
                    </div>
                    <div className="mt-4">
                        <RadioGroup data={{
                            selected: preferences.type,
                            options:
                                [
                                    { label: "Čištění koberců", value: "carpets", description: "Profesionální čištění koberců mechanickou a extrakční metodou." },
                                    { label: "Úklidové služby", value: "cleaning", description: "Pravidelný nebo jednorázový úklid kanceláří a komerčních prostor." },
                                    { label: "Žulové schody/podlahy", value: "floors", description: "Broušení žulových schodů, údržba podlah." }
                                ]
                        }} setData={setSwitchData} />
                    </div>
                    <div className="mt-4">
                        <Button primary onClick={() => setStep(preferences.type != "carpets" ? 3 : 2)}>Další krok</Button>
                    </div>
                </>
            }
            {(step == 2) &&
                ((preferences.type == "carpets") ?
                    <div className="flex flex-col" >
                        <div className="text-lg font-semibold mb-2 flex items-center justify-between">
                            <div className="">Čištění koberců</div>
                            <div className="cursor-pointer" onClick={() => setPreferences({ ...preferences, modalOpened: false })}><X size={24} /></div>
                        </div>
                        <div className="mt-4 pb-4 flex-grow flex-shrink overflow-y-auto ">
                            <CarpetsCalculator />
                        </div>

                        <div className="pt-4 flex-grow-0 flex-shrink-0 flex justify-between">
                            <div className="pr-2">
                                <div className="text-xl"><span className="text-black font-medium">od {price(priceFrom)}</span></div>
                                <div className="text-gray-500 text-xs font-light">(max. {price(priceTo)})</div>
                            </div>
                            <Button primary onClick={() => setStep(3)}>Další krok</Button>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold mb-2 flex items-center justify-between">
                            <div className="">Úklidové služby</div>
                            <div className="cursor-pointer" onClick={() => setPreferences({ ...preferences, modalOpened: false })}><X size={24} /></div>
                        </div>
                        <div className="mt-4 pb-4 flex-grow flex-shrink overflow-y-auto ">
                            <NoFormMessage subtitle={"as"} buttonAction={() => setStep(3)} />
                        </div>
                    </div>
                )
            }
            {(step == 3) &&
                <div className="md:max-w-xs">
                    <div className="text-lg md:hidden font-semibold mb-2 flex items-center justify-between">
                        <div className="">Ještě poslední krok...</div>
                        <div className="cursor-pointer" onClick={() => setPreferences({ ...preferences, modalOpened: false })}><X size={24} /></div>
                    </div>
                    <Switch data={{
                        selected: preferences.contactType, options: [
                            { value: "phone", label: "Zavolejte mi" },
                            { value: "email", label: "Napište mi e-mail" }
                        ]
                    }} setData={setContactSwitch} />
                    <div className="mt-4 grid gap-y-2">
                        <TextField name="fullname" icon={<User size={24} />} value={preferences.name} label="Jméno a příjmení" setValue={(to) => setPreferences({ ...preferences, name: to })} />
                        {(preferences?.contactType == "phone") &&
                            <TextField name="phone" icon={<Phone size={24} />} type="tel" value={preferences.phone} label="Telefonní číslo" setValue={(to) => setPreferences({ ...preferences, phone: to })} />
                        }
                        {(preferences?.contactType == "email") &&
                            <>
                                <TextField name="email" icon={<EnvelopeSimple size={24} />} type="email" value={preferences.email} label="E-mailová adresa" setValue={(to) => setPreferences({ ...preferences, email: to })} />
                                <TextArea value={preferences.note} rows={3} label="Zde můžete blíže specifikovat poptávku" setValue={(to) => setPreferences({ ...preferences, note: to })} />
                            </>
                        }

                    </div>
                    <div className="mt-2">
                        <div className="flex justify-center mb-2">
                            <div className="block mt-0 text-sm text-gray-700 max-w-sm text-center">
                                Ozveme se Vám do 24 hodin a domluvíme se s Vámi na termínu a dalších podrobnostech
                            </div>
                        </div>
                        <div className="block">
                            <Button className={processing ? " bg-slate-300 hover:bg-slate-300 text-slate-800" : ""} primary onClick={() => send()}>
                                <div className="flex items-center gap-x-1">
                                    {(processing) ? <HourglassMedium /> :(preferences?.contactType == "phone") ? <PhoneIncoming size={24} /> : <PaperPlaneTilt size={24} />}
                                    <div className="text-lg">{processing ? "Ověřování..." : "Potvrdit"}</div>
                                </div>
                            </Button>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}