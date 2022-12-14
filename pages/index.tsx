import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useState } from 'react'
import CalcMobileProgress from '../components/CalcMobileProgress'
import CalculatorSection from '../components/CalculatorSection'
import CarpetsBanner from '../components/CarpetsBanner'
import { CalcFormContext } from '../components/contexts/CalcFormContext'
import MainJumbotron from '../components/MainJumbotron'
import ServicesSection from '../components/ServicesSection'
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal'
import { AnimatePresence, motion } from 'framer-motion'
import ContactBlock from '../components/ContactBlock'

const Home: NextPage = () => {

  const [calcOpened, setCalcOpened] = useState(false);
  const { preferences, setPreferences } = useContext(CalcFormContext)

  return (
    <div className={"font-ubuntu bg-gray-100"}>
      <Head>
        <title>Profesionální úklid a čištění koberců Šumperk a okolí — WeClean</title>
        <meta name="description" content="Nabízíme úklidové služby a čištění koberců pro firmy, průmysl a domácnosti. On-line kalkulace ceny zdarma a hned. Garantujeme 100% spokojenost." />
        <meta name="theme-color" content="rgb(243 244 246)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"bg-white p-1.5 md:p-3 rounded-t-xl shadow-sm"}>
        <MainJumbotron />
        <ServicesSection />
        <CalculatorSection />
        <CarpetsBanner />
        <ContactBlock />
      </main>
      <div className="fixed bottom-2 left-0 right-0 flex justify-center z-40 md:hidden px-2">
        <Button primary onClick={() => setPreferences({ ...preferences, modalOpened: true })}>Spočítat cenu</Button>
      </div>
      <AnimatePresence>
        {preferences?.modalOpened &&
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{duration: 0.5}}
              className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black backdrop-blur-md bg-opacity-50">
            </motion.div>
            <Modal close={() => setPreferences({ ...preferences, modalOpened: false })}>
              <CalcMobileProgress close={() => setPreferences({ ...preferences, modalOpened: false })} />
            </Modal>
          </>
        }
      </AnimatePresence>
      <footer className={"h-16 md:h-0"}>

      </footer>
    </div>
  )
}

export default Home
