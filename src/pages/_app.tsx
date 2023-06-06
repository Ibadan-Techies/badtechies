import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'

import { Manrope, Oswald } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-manrope',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-oswald',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link
          rel="short icon"
          type="image/x-icon"
          href="/favic.ico"
          sizes="any"
        />
      </Head>
      <div className={`${manrope.variable} ${oswald.variable}`}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
