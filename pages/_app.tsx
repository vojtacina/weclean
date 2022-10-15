import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CalcFormContextProvider } from '../components/contexts/CalcFormContext'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <CalcFormContextProvider>
      <Component {...pageProps} />
    </CalcFormContextProvider>
  )
}

export default MyApp
