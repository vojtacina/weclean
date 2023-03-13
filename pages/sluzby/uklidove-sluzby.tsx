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
          { title: "Pravidelné úklidy", description: "Zajistíme komplexní pravidelný i jednorázový úklid vašich kanceláří či administrativních budov. Zaručujeme vám profesionální a individuální přístup." },
          { title: "Úklid před prodejem", description: "Ozvěte se nám, pokud potřebujete pomoct s kompletním úklidem před prodejem nebo dalším pronájmem komerční nemovitosti."},
          { title: "Mytí oken", description: "Součástí našich služeb je také mytí vnitřních částí oken, skleněných dvěří, příček a dalšího skla - a to do vysokého lesku. " }
        ]} />
        <WhyChooseUs image="hands.jpg" />
        <WeDoNine data={[
          {name: "Luxování", description: "Rychlé a účinné vysávání jako součást běžného uklidu."},
          {name: "Vytírání", description: "Jednoduché vytírání mopem nebo speciálním tříkotoučovým strojem."},
          {name: "Mytí oken", description: "Umývání a leštění skel, oken, skleněných dvěří a příček."},
          {name: "Vynášení košů", description: "Zajistíme vynešení všech košů a vložíme čisté sáčky."},
          {name: "Úklid WC", description: "Sociální zařízení jsou první na řadě, pokud jde o úklid."},
          {name: "Úklid kuchyněk", description: "Nepořádek v kuchyňkách i neumyté nádobí jednoduše zpacifikujeme."},
          {name: "Zalévání květin", description: "Víme, jak je jednoduché zapomenout zalít rostliny. Uděláme to za vás."},
          {name: "Papírové utěrky", description: "Zajistíme dodávky a výměnu papírových utěrek, toaleťáků a dalšího."},
          {name: "... a ještě mnohem více", description: "Dokážeme vyhovět širokému spektru potřeb našich klientů."},
        ]} />
        <CalculatorSection select="cleaning" />
        <CarpetsBanner data={{ image: "clean-hands.jpg", title: "Více než 25 let pečujeme o naše klienty", description: "Výsledkem našeho úsilí je příjemné a čisté prostředí jako nezbytný předpoklad nejen pro osobnostní růst každého jednotlivce, ale také pro úspěšné vykonávání každé další činnosti.", button: ["Více o nás", "/o-nas"] }} />
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
