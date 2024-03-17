import * as React from 'react'

import { Footer } from '@/components/Layout/Footer'
import dynamic from 'next/dynamic';

const NavigationBar = dynamic(() => import('@/components/Layout/Navbar').then(module => module.NavigationBar), {
  ssr: false
});
export default function Layout({
  children,
  Seo,
}: React.PropsWithChildren<{
  Seo: React.ReactElement
}>) {
  return (
    <>
      {Seo}
      <NavigationBar/>
      {children}
      <Footer />
    </>
  )
}
