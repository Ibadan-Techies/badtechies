import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'

import { Manrope, Oswald } from 'next/font/google'

// example
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
      <Script
        src={
          'https://www.googletagmanager.com/gtag/js?id=' +
          process.env.NEXT_PUBLIC_ANALYTICS_ID
        }
        strategy="afterInteractive"
      />
      <Script
        strategy="afterInteractive"
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');`,
        }}
      />
      <div className={`${manrope.variable} ${oswald.variable}`}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
