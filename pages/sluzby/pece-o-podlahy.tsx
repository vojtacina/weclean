import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useState } from 'react'
import { CalcFormContext } from '../../components/contexts/CalcFormContext';
import FixedButton from '../../components/fragments/FixedButton';
import CalculatorSection from '../../components/sections/CalculatorSection';
import CarpetsBanner from '../../components/sections/CarpetsBanner';
import ContactBlock from '../../components/sections/ContactBlock';
import FeaturedPngSection from '../../components/sections/FeaturedPngSection';
import Footer from '../../components/sections/Footer';
import Header from '../../components/sections/Header';
import MainJumbotron from '../../components/sections/MainJumbotron';
import ServicesSection from '../../components/sections/ServicesSection';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import Button from '../../components/UI/Button';


const Home: NextPage = () => {

    const [calcOpened, setCalcOpened] = useState(false);
    const { preferences, setPreferences } = useContext(CalcFormContext)

    return (
        <div className={"font-archivo bg-gray-100"}>
            <Head>
                <title>Péče o podlahy a žulové schody Brno — Focus Cleaning</title>
                <meta name="description" content="Obnova žulových schodišť, broušení podlah a aplikace polymerních vosků. Prodlužujeme životnost vašeho majetku. Více než 25 let zkušeností. Jsme tu od roku 1996." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://focuscleaning.cz/sluzby/pece-o-podlahy" />
                <meta property="og:title" content="Péče o podlahy a žulové schody Brno — Focus Cleaning" />
                <meta property="og:description" content="Obnova žulových schodišť, broušení podlah a aplikace polymerních vosků. Prodlužujeme životnost vašeho majetku. Více než 25 let zkušeností. Jsme tu od roku 1996." />
                <meta property="og:image" content="https://focuscleaning.cz/images/floors-bg.jpg"></meta>
            </Head>

            <Header />

            <main className={"bg-white "}>
                <MainJumbotron data={{
                    image: "floors-bg.jpg", title: "Péče o podlahy a kámen Brno", subtitle: "Máme zkušenosti od roku 1996. Jsme precizní a profesionální.", buttons: [
                        ["Přejít k objednávce", () => setPreferences({ ...preferences, modalOpened: true })]
                    ]
                }} />
                <ServicesSection data={[
                    { title: "Strojové čištění podlah", description: "Strojové čištění podlah provádíme ve školách, komerčních zónách i v hotelech. Vyčištěná podlaha je jako nová a ihned suchá. Čištění provádíme tříkartáčovým podlahovým strojem Cimex, který využívá vstřikování chemického přípravku na rotující kartáče." },
                    { title: "Voskování podlah", description: "Voskování chrání povrch podlahy před nadměrným opotřebením. Ošetřená podlaha se méně špiní, je odolnější a snadněji se udržuje. Má také velmi dobré protiskluzové vlastnosti. Voskování se hodí do hotelů, škol, firem i dalších prostorů." },
                ]} />
                <WhyChooseUs image="hands.jpg" />
                <FeaturedPngSection data={{
                    logosImage: "brands.png",
                    title: 'Používáme špičkovou techniku',
                    description: 'Čištění provádíme tříkartáčovým podlahovým strojem Cimex, který využívá vstřikování chemického přípravku na rotující kartáče a po důkladném vyčištění odsaje znečištěnou vodu. Při práci postupujeme s maximální ohleduplností, aby nedošlo k poškození majetku našich zákazníků. Pokud budete s naší službou spokojeni a objednáte si ji znovu, můžete získat věrnostní slevu zákazníka.',
                    button: ["Více o nás", "/o-nas"],
                    image: 'cimex.png'
                }} />
                <CalculatorSection select="floors" />
                <CarpetsBanner data={{ image: "duo-floor.jpg", title: "Získejte věrnostní slevu!", description: "Pokud budete s naší službou spokojeni a objednáte si ji znovu, můžete získat věrnostní slevu zákazníka.", button: ["Více o nás", "/o-nas"] }} />
                <ContactBlock />
            </main>
            <FixedButton>Nezávazně poptat</FixedButton>
            <Footer />
        </div>
    )
}

export default Home
