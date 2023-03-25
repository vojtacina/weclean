import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useState } from 'react'
import { CalcFormContext } from '../../components/contexts/CalcFormContext';
import FixedButton from '../../components/fragments/FixedButton';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import CalculatorSection from '../../components/sections/CalculatorSection';
import CarpetsBanner from '../../components/sections/CarpetsBanner';
import ContactBlock from '../../components/sections/ContactBlock';
import FeaturedPngSection from '../../components/sections/FeaturedPngSection';
import Footer from '../../components/sections/Footer';
import Header from '../../components/sections/Header';
import MainJumbotron from '../../components/sections/MainJumbotron';
import ServicesSection from '../../components/sections/ServicesSection';
import WeDoNine from '../../components/sections/WeDoNine';
import WhatWeDo from '../../components/sections/WhatWeDo';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import { H2 } from '../../components/typography/H2';
import Button from '../../components/UI/Button';


const Home: NextPage = () => {

  const [calcOpened, setCalcOpened] = useState(false);
  const { preferences, setPreferences } = useContext(CalcFormContext)

  return (
    <div className={"font-archivo bg-gray-100"}>
      <Head>
        <title>Profesionální a precizní úklid Brno a okolí — Focus Cleaning</title>
        <meta name="description" content="Nabízíme komplexní pravidelné i jednorázové úklidové služby pro firmy a průmysl. On-line kalkulace ceny zdarma a hned. 50+ referencí. Jsme tu od roku 1996." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://focuscleaning.cz/sluzby/uklidove-sluzby" />
        <meta property="og:title" content="Profesionální a precizní úklid Brno a okolí — Focus Cleaning" />
        <meta property="og:description" content="Nabízíme komplexní pravidelné i jednorázové úklidové služby pro firmy a průmysl. On-line kalkulace ceny zdarma a hned. 50+ referencí. Jsme tu od roku 1996." />
        <meta property="og:image" content="https://focuscleaning.cz/images/cleaning-bg.jpg"></meta>
      </Head>

      <Header />
      <main className={"bg-white "}>
        <MainJumbotron data={{
          image: "cleaning-bg.jpg", title: "Detailní úklid kanceláří Brno", subtitle: "Máme zkušenosti od roku 1996. Jsme precizní a profesionální.", buttons: [
            ["Přejít k objednávce", () => setPreferences({ ...preferences, modalOpened: true })]
          ]
        }} />
        <WhatWeDo />
        <ServicesSection data={[
          { title: "Pravidelné úklidy", description: "Zajistíme komplexní pravidelný úklid vašich kanceláří, výrobních prostor, obchodů či administrativních budov. A to velmi flexibilně." },
          { title: "Jednorázový úklid", description: "Úklízíme také jednorázově - například před stěhovánín, pronájmem bytu nebo prodejem nemovitosti. Uklidíme také po večírku a jiných akcích." },
          { title: "Generální úklid", description: "Úklid po nové stavbě, rekonstrukci nebo úklid jinak silně znečištěných interiérů, které potřebujete rychle dát do pořádku." }
        ]} />

        <WhyChooseUs image="hands.jpg" />
        <WeDoNine data={[
          { name: "Luxování", description: "Rychlé a účinné vysávání jako součást běžného uklidu." },
          { name: "Vytírání", description: "Jednoduché vytírání mopem nebo speciálním tříkotoučovým strojem." },
          { name: "Mytí oken", description: "Umývání a leštění skel, oken, skleněných dvěří a příček." },
          { name: "Vynášení košů", description: "Zajistíme vynešení všech košů a vložíme čisté sáčky." },
          { name: "Úklid WC", description: "Sociální zařízení jsou první na řadě, pokud jde o úklid." },
          { name: "Úklid kuchyněk", description: "Nepořádek v kuchyňkách i neumyté nádobí jednoduše zpacifikujeme." },
          { name: "Zalévání květin", description: "Víme, jak je jednoduché zapomenout zalít rostliny. Uděláme to za vás." },
          { name: "Papírové utěrky", description: "Zajistíme dodávky a výměnu papírových utěrek, toaleťáků a dalšího." },
          { name: "... a ještě mnohem více", description: "Dokážeme vyhovět širokému spektru potřeb našich klientů." },
        ]} />
        <CalculatorSection select="cleaning" />
        <CarpetsBanner data={{ image: "clean-hands.jpg", title: "Více než 25 let pečujeme o naše klienty", description: "Výsledkem našeho úsilí je příjemné a čisté prostředí jako nezbytný předpoklad nejen pro osobnostní růst každého jednotlivce, ale také pro úspěšné vykonávání každé další činnosti.", button: ["Více o nás", "/o-nas"] }} />
        <ContactBlock />
      </main>
      <FixedButton>Nezávazně poptat</FixedButton>
      <Footer />
    </div>
  )
}

export default Home
