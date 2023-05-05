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
        <title>Čištění koberců Brno a okolí — Focus Cleaning</title>
        <meta name="description" content="Profi extrakční čištění koberců pro komerční zákazníky. Více než 25 zkušeností. On-line kalkulace ceny zdarma a hned. Jsme tu od roku 1996. " />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://focuscleaning.cz/sluzby/cisteni-kobercu" />
        <meta property="og:title" content="Čištění koberců Brno a okolí — Focus Cleaning" />
        <meta property="og:description" content="Profi extrakční čištění koberců pro komerční zákazníky. Více než 25 zkušeností. On-line kalkulace ceny zdarma a hned. Jsme tu od roku 1996." />
        <meta property="og:image" content="https://focuscleaning.cz/images/carpets-bg.jpg"></meta>
      </Head>

      <Header />

      <main className={"bg-white "}>
        <MainJumbotron data={{
          image: "carpets-bg.jpg", title: "Profesionální čištění koberců Brno a okolí", subtitle: "Se zkušeností od roku 1996", buttons: [
            ["Spočítat cenu", "#kalkulacka"],
            ["Přejít k objednávce", () => setPreferences({ ...preferences, modalOpened: true })]
          ]
        }} />
        <ServicesSection data={[
          { title: "Kancelářské prostory", description: "Běžně našim klientům čistíme koberce v kancelářských prostorách, včetně těch o rozloze nad 1000 m²." },
          { title: "Židle, křesla, pohovky", description: "Extrakční metodou dokážeme precizně vyčistit čalounění židlí, křesel, matrací či pohovek." },
          { title: "Kusové koberce", description: "Vedle běhounů ve vašich kancelářích vyčistíme také menší i větší kusové koberce, které se tam nacházejí." }
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
      <FixedButton>Spočítat cenu</FixedButton>
      <Footer />
    </div>
  )
}

export default Home
