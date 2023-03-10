import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useState } from 'react'
import { CalcFormContext } from '../../components/contexts/CalcFormContext';
import CalculatorSection from '../../components/sections/CalculatorSection';
import CarpetsBanner from '../../components/sections/CarpetsBanner';
import ContactBlock from '../../components/sections/ContactBlock';
import FeaturedPngSection from '../../components/sections/FeaturedPngSection';
import Footer from '../../components/sections/Footer';
import Header from '../../components/sections/Header';
import MainJumbotron from '../../components/sections/MainJumbotron';
import ServicesSection from '../../components/sections/ServicesSection';
import WeDoNine from '../../components/sections/WeDoNine';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import Button from '../../components/UI/Button';


const Home: NextPage = () => {

  const [calcOpened, setCalcOpened] = useState(false);
  const { preferences, setPreferences } = useContext(CalcFormContext)

  return (
    <div className={"font-archivo bg-gray-100"}>
      <Head>
        <title>Profesionální úklid a čištění koberců Brno a okolí — FocusCleaning</title>
        <meta name="description" content="Nabízíme úklidové služby a čištění koberců pro firmy a průmysl. On-line kalkulace ceny zdarma a hned. Garantujeme 100% spokojenost." />
      </Head>
      <nav>
        <Header />
      </nav>
      <main className={"bg-white "}>
        <MainJumbotron data={{
          image: "cleaning-bg.jpg", title: "Detailní úklid kanceláří Brno", subtitle: "Máme zkušenosti od roku 1996. Jsme precizní a profesionální.", buttons: [
            ["Přejít k objednávce", () => setPreferences({ ...preferences, modalOpened: true })]
          ]
        }} />
        <ServicesSection data={[
          { title: "Pravidelné úklidy", description: "Profesionální čištění koberců extrakční metodou i u vás doma. Používáme kvalitní techniku a chemii firmy Karcher." },
          { title: "Úklid před prodejem", description: "Profesionální čištění koberců extrakční metodou i u vás doma. Používáme kvalitní techniku a chemii firmy Karcher."},
          { title: "Mytí oken", description: "Profesionální čištění koberců extrakční metodou i u vás doma. Používáme kvalitní techniku a chemii firmy Karcher." }
        ]} />
        <WhyChooseUs image="hands.jpg" />
        <WeDoNine data={[
          {name: "Luxování", description: "Profesionální čištění koberců extrakční metodou i u vás doma."},
          {name: "Luxování", description: "Profesionální čištění koberců extrakční metodou i u vás doma."},
          {name: "Luxování", description: "Profesionální čištění koberců extrakční metodou i u vás doma."},
          {name: "Luxování", description: "Profesionální čištění koberců extrakční metodou i u vás doma."},
          {name: "Luxování", description: "Profesionální čištění koberců extrakční metodou i u vás doma."},
          {name: "Luxování", description: "Profesionální čištění koberců extrakční metodou i u vás doma."},
          {name: "Luxování", description: "Profesionální čištění koberců extrakční metodou i u vás doma."},
          {name: "Luxování", description: "Profesionální čištění koberců extrakční metodou i u vás doma."},
          {name: "... a ještě mnohem více", description: "Profesionální čištění koberců extrakční metodou i u vás doma."},
        ]} />
        <CalculatorSection select="cleaning" />
        <CarpetsBanner data={{ image: "clean-hands.jpg", title: "Více než 25 let pečujeme o naše klienty", description: "Používáme profesionální čistící stroje značky Kärcher a účinnou chemii, která zbaví koberec všech viditelných i neviditelných nečistot.", button: ["Více o nás", "/o-nas"] }} />
        <ContactBlock />
      </main>
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-40 md:hidden px-4">
        <Button primary onClick={() => setPreferences({ ...preferences, modalOpened: true })}>Nezávazně poptat</Button>
      </div>
      <footer className={""}>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
