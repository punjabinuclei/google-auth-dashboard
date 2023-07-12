import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat-font'
})


export default function App({ Component, pageProps }: AppProps) {
  return(
  <main className={montserrat.className}>
    <Component {...pageProps} />
  </main>
);}
