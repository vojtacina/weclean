import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CalculatorSection from '../components/CalculatorSection'
import MainJumbotron from '../components/MainJumbotron'
import ServicesSection from '../components/ServicesSection'

const Home: NextPage = () => {
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
      </main>

      <footer className={""}>

      </footer>
    </div>
  )
}

export default Home
