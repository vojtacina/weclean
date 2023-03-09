import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CalcFormContextProvider } from '../components/contexts/CalcFormContext'
import Head from 'next/head'
import ModalsWrapper from '../components/ModalsWrapper'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <CalcFormContextProvider>
      <ModalsWrapper>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="theme-color" content="#212121" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Component {...pageProps} />
      </ModalsWrapper>
    </CalcFormContextProvider>
  )
}

export default MyApp
