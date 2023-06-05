import { Footer } from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import Head from 'next/head'
import * as React from 'react'

export default function Layout({
  children,
  Seo,
}: React.PropsWithChildren<{
  Seo: React.ReactElement
}>) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={''}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {Seo}
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
