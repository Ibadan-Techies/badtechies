import { Footer } from '@/components/Layout/Footer'
import { NavigationBar as Navbar } from '@/components/Layout/Navbar'
import * as React from 'react'

export default function Layout({
  children,
  Nav,
  Seo,
  Foot,
}: React.PropsWithChildren<{
  Seo?: React.ReactElement
  Nav?: React.ReactNode
  Foot?: React.ReactNode
}>) {
  return (
    <>
      {Seo}
      {Nav || <Navbar />}
      {children}
      {Foot || <Footer />}
    </>
  )
}
