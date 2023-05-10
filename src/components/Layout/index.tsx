import { Footer } from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import * as React from 'react'

export default function Layout({
  children,
  Seo,
}: React.PropsWithChildren<{
  Seo: React.ReactElement
}>) {
  return (
    <>
      {Seo}
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
