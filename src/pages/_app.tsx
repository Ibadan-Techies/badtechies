import { Manrope, Oswald } from '@next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${manrope.variable} ${oswald.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
