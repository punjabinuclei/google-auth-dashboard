import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Providers from '@/components/SignUpPage/Providers'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat-font'
})


export default function App({ Component, pageProps }: AppProps) {
  return (

    <main className={montserrat.className}>
      <Providers >
        <Component {...pageProps} />
      </Providers>

    </main>

  );
}
