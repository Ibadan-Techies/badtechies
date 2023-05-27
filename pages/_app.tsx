import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <div className={` font-sans`}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
