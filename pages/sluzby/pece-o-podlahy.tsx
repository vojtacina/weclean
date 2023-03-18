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
            </Head>
            <nav>
                <Header />
            </nav>
            <main className={"bg-white "}>
                <MainJumbotron data={{
                    image: "floors-bg.jpg", title: "Péče o podlahy a žulové schody Brno", subtitle: "Máme zkušenosti od roku 1996. Jsme precizní a profesionální.", buttons: [
                        ["Přejít k objednávce", () => setPreferences({ ...preferences, modalOpened: true })]
                    ]
                }} />
                <ServicesSection data={[
                    { title: "Žulové schody", description: "Profesionální čištění koberců extrakční metodou i u vás doma. Používáme kvalitní techniku a chemii firmy Karcher." },
                    { title: "Voskování podlah", description: "Profesionální čištění koberců extrakční metodou i u vás doma. Používáme kvalitní techniku a chemii firmy Karcher." },
                    { title: "Broušení žuly", description: "Profesionální čištění koberců extrakční metodou i u vás doma. Používáme kvalitní techniku a chemii firmy Karcher." }
                ]} />
                <WhyChooseUs image="hands.jpg" />
                <CalculatorSection select="floors" />
                <CarpetsBanner data={{ image: "duo-floor.jpg", title: "Více než 25 let pečujeme o naše klienty", description: "Výsledkem našeho úsilí je příjemné a čisté prostředí jako nezbytný předpoklad nejen pro osobnostní růst každého jednotlivce, ale také pro úspěšné vykonávání každé další činnosti.", button: ["Více o nás", "/o-nas"] }} />
                <ContactBlock />
            </main>
            <FixedButton>Nezávazně poptat</FixedButton>
            <footer className={""}>
                <Footer />
            </footer>
        </div>
    )
}

export default Home
