import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useState } from 'react'
import CalculatorSection from '../../components/sections/CalculatorSection'
import CarpetsBanner from '../../components/sections/CarpetsBanner'
import { CalcFormContext } from '../../components/contexts/CalcFormContext'
import MainJumbotron from '../../components/sections/MainJumbotron'
import ServicesSection from '../../components/sections/ServicesSection'
import Button from '../../components/UI/Button'
import ContactBlock from '../../components/sections/ContactBlock'

const Home: NextPage = () => {

  const [calcOpened, setCalcOpened] = useState(false);
  const { preferences, setPreferences } = useContext(CalcFormContext)

  return (
    <div className={"font-archivo bg-gray-100"}>
      <Head>
        <title>Profesionální čištění koberců Brno a okolí — FocusCleaning</title>
        <meta name="description" content="Nabízíme čištění koberců pro firmy a průmysl. On-line kalkulace ceny zdarma a hned. Garantujeme 100% spokojenost." />
      </Head>

      <main className={"bg-white "}>
        <MainJumbotron data={{
          image: "bg.jpg",
          title: "Profesionální čištění koberců Brno", subtitle: "Zkušenosti od roku 1996", buttons: [
            ["Spočítat cenu", "#kalkulacka"],
            ["Přejít k objednávce", () => setPreferences({ ...preferences, modalOpened: true })]
          ]
        }} />
        <ServicesSection data={[
          { title: "Čištění koberců", description: "Tohle je description", button: ["Spočítat", "#kalkulacka"] },
          { title: "Úklid kanceláří", description: "Tohle je description", button: ["Spočítat", "#kalkulacka"] },
          { title: "Broušení povrchů", description: "Tohle je description", button: ["Spočítat", "#kalkulacka"] }
        ]} />
        <CalculatorSection />
        <CarpetsBanner data={{image: "bg.jpg" , title: "Vaše koberce budou zářit čistotou", description: "Používáme profesionální čistící stroje značky Kärcher a účinnou chemii, která zbaví koberec všech viditelných i neviditelných nečistot.", button: ["Přejít k objednávce", () => setPreferences({ ...preferences, modalOpened: true })]}} />
        <ContactBlock />
      </main>
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-40 md:hidden px-2">
        <Button primary onClick={() => setPreferences({ ...preferences, modalOpened: true })}>Spočítat cenu</Button>
      </div>
      <footer className={"h-16 md:h-0"}>

      </footer>
    </div>
  )
}

export default Home
