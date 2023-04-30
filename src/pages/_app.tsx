import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={` font-sans`}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </div>
  )
}
