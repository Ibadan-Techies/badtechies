import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'

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
      <div className={` font-sans`}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
