import * as React from 'react'

import { Footer } from '@/components/Layout/Footer'
import { NavigationBar as Navbar } from '@/components/Layout/Navbar'

import { useNotification } from '@/utilities/hooks'

export default function Layout({
  children,
  Seo,
}: React.PropsWithChildren<{
  Seo: React.ReactElement
}>) {
  const { active, message, setNotification, toggleNotification } =
    useNotification()
  React.useEffect(() => {
    setNotification(' 🍕🍕 Join us on one of a kind techies experience');
    return ()=>localStorage.removeItem('notificationMsg')
  }, [])
  return (
    <>
      {Seo}
      <Navbar
        active={active}
        message={message}
        toggleNotification={toggleNotification}
      />
      {children}
      <Footer />
    </>
  )
}
