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
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import Button from '../../components/UI/Button';


const Home: NextPage = () => {

  const [calcOpened, setCalcOpened] = useState(false);
  const { preferences, setPreferences } = useContext(CalcFormContext)

  return (
    <div className={"font-archivo bg-gray-100"}>
      <Head>
        <title>Čištění koberců Brno a okolí — FocusCleaning</title>
        <meta name="description" content="Profi čištění koberců pro firmy a průmysl. Jsme zavedená firma od roku 1996. On-line kalkulace ceny zdarma a hned. Garantujeme 100% spokojenost." />
      </Head>
      <nav>
        <Header />
      </nav>
      <main className={"bg-white "}>
        <MainJumbotron data={{
          image: "carpets-bg.jpg", title: "Profesionální čištění koberců Brno a okolí", subtitle: "Zkušenosti od roku 1996", buttons: [
            ["Spočítat cenu", "#kalkulacka"],
            ["Přejít k objednávce", () => setPreferences({ ...preferences, modalOpened: true })]
          ]
        }} />
        <ServicesSection data={[
          { title: "Kancelářské prostory", description: "Běžně čistíme koberce klientům v kancelářských prostorách a to i těch, jejichž rozloha se blíží 1000 m²." },
          { title: "Židle, křesla, pohovky", description: "Dokážeme precizně vyčistit extrakční metodou čalounění židlí, křesel, matrací a pohovek."},
          { title: "Kusové koberce", description: "Pokud se ve vašich prostorách nacházejí i menší kusové koberce, vyčistíme je také obdobným způsobem, jako ty velké." }
        ]} />
        <WhyChooseUs />
        <FeaturedPngSection data={{
          logosImage: "brands.png",
          title: 'Používáme špičkovou techniku',
          description: 'Čištění koberců v soukromé i průmyslové sféře zajišťujeme již více než 25 let. Používáme osvědčenou čisticí techniku od švýcarské firmy Cleanfix a britského Cimexu. Stroje CIMEX CYCLONE umožňují unikátní dvoufázové čištění koberců systémem tří rotujících kartáčů, kterým lze dosáhnout výjimečně dobrého výsledku čištění. Vedle koberců zvládneme vyčistit také veškerý čalouněný nábytek.',
          button: ["Více o nás", "/o-nas"],
          image: 'cimex.png'
        }} />
        <CalculatorSection select="carpets" />
        <CarpetsBanner data={{ image: "bannerbg.jpg", title: "Více než 25 let pečujeme o naše klienty", description: "Výsledkem našeho úsilí je příjemné a čisté prostředí jako nezbytný předpoklad nejen pro osobnostní růst každého jednotlivce, ale také pro úspěšné vykonávání každé další činnosti.", button: ["Více o nás", "/o-nas"] }} />
        <ContactBlock />
      </main>
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-40 md:hidden px-4">
        <Button primary onClick={() => setPreferences({ ...preferences, modalOpened: true })}>Spočítat cenu</Button>
      </div>
      <footer className={""}>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
