import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useState } from 'react'
import CalculatorSection from '../components/sections/CalculatorSection'
import CarpetsBanner from '../components/sections/CarpetsBanner'
import { CalcFormContext } from '../components/contexts/CalcFormContext'
import MainJumbotron from '../components/sections/MainJumbotron'
import ServicesSection from '../components/sections/ServicesSection'
import Button from '../components/UI/Button'
import ContactBlock from '../components/sections/ContactBlock'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import FeaturedPngSection from '../components/sections/FeaturedPngSection'
import Footer from '../components/sections/Footer'
import Header from '../components/sections/Header'

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
          image: "carpets-bg.jpg", title: "Profesionální úklid a čištění koberců Brno", subtitle: "Zkušenosti od roku 1996", buttons: [
            ["Spočítat cenu", "#kalkulacka"],
            ["Přejít k objednávce", () => setPreferences({ ...preferences, modalOpened: true })]
          ]
        }} />
        <ServicesSection data={[
          { title: "Čištění koberců", description: "Tohle je description", button: ["Spočítat", "#kalkulacka"] },
          { title: "Úklid kanceláří", description: "Tohle je description", button: ["Spočítat", "#kalkulacka"] },
          { title: "Broušení povrchů", description: "Tohle je description", button: ["Spočítat", "#kalkulacka"] }
        ]} />
        <WhyChooseUs />
        <FeaturedPngSection data={{
          logosImage: "brands.png",
          title: 'Používáme špičkovou techniku',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam eget nisl. Ut tempus purus at lorem. Donec quis nibh at felis congue commodo. Proin mattis lacinia justo. Ut tempus purus at lorem. Integer vulputate sem a nibh rutrum consequat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis condimentum augue id magna semper rutrum. Phasellus rhoncus. Nullam faucibus mi quis velit. Maecenas libero. Cras elementum.',
          button: ["Více o nás", "/o-nas"],
          image: 'cimex.png'
        }} />
        <CalculatorSection select="carpets" />
        <CarpetsBanner data={{ image: "clean-hands.jpg", title: "Více než 25 let pečujeme o naše klienty", description: "Používáme profesionální čistící stroje značky Kärcher a účinnou chemii, která zbaví koberec všech viditelných i neviditelných nečistot.", button: ["Více o nás", "/o-nas"] }} />
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
