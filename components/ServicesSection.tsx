import MaxWidthWrapper from "./MaxWidthWrapper";


export default function ServicesSection() {


    return (
        <div className="mt-2 py-8 md:py-16">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Service title="Čištění koberců" subtitle="Profesionální čištění koberců extrakční metodou i u vás doma. Používáme kvalitní techniku a chemii firmy Karcher." buttonText="neco" buttonAction={() => {}} />
                    <Service title="Čištění sedaček" subtitle="Profesionální čištění koberců extrakční metodou i u vás doma. Používáme kvalitní techniku a chemii firmy Karcher." buttonText="neco" buttonAction={() => {}} />
                    <Service title="Úklid kanceláří" subtitle="Profesionální čištění koberců extrakční metodou i u vás doma. Používáme kvalitní techniku a chemii firmy Karcher." buttonText="neco" buttonAction={() => {}} />
                </div>

            </MaxWidthWrapper>
        </div>
    )
}

interface ServiceType {
    title: string,
    subtitle: string,
    buttonText: string,
    buttonAction: () => void,
}

function Service({title, subtitle, buttonText, buttonAction}:ServiceType) {


    return (
        <div className="text-black ">
            <h2 className="text-xl text-blue-dark">{title}</h2>
            <p className="opacity-75">{subtitle}</p>
        </div>
    )
}