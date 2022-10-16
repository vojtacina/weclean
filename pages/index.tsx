import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import CalcMobileProgress from '../components/CalcMobileProgress'
import CalculatorSection from '../components/CalculatorSection'
import CarpetsBanner from '../components/CarpetsBanner'
import MainJumbotron from '../components/MainJumbotron'
import ServicesSection from '../components/ServicesSection'
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal'

const Home: NextPage = () => {

  const [calcOpened, setCalcOpened] = useState(false);

  return (
    <div className={"font-ubuntu"}>
      <Head>
        <title>WeClean - Profesionální úklid a čištění koberců Šumperk</title>
        <meta name="description" content="Čištění koberců, úklid kanceláří a ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"bg-white p-2"}>
        <MainJumbotron />
        <ServicesSection />
        <CalculatorSection />
        <CarpetsBanner />
      </main>
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-40 md:hidden">
        <Button primary onClick={() => setCalcOpened(true)}>Spočítat cenu</Button>
      </div>
      {calcOpened &&
        <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50">
          <Modal close={() => setCalcOpened(false)}>
            <CalcMobileProgress />
          </Modal>
        </div>
      }

      <footer className={""}>

      </footer>
    </div>
  )
}

export default Home
