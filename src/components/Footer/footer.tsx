import * as React from 'react'
import { Logo } from '../Logo'

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-6 text-base/[16px] font-medium">
      <div className="flex justify-between px-20 py-10 border-y">
        <Logo_ />
        <MoreList />
        <Others />
      </div>
      <p className="text-center pt-6">
        &copy; Ibadan Tech Community is a registered non - profit backed by the
        Nigerian Law (2023)
      </p>
    </footer>
  )
}

function Logo_() {
  return (
    <div className="relative w-[120px] h-[118.67px]">
      <Logo />
    </div>
  )
}

function MoreList() {
  return (
    <div className="flex flex-col gap-6">
      <header className="h-[24px] text-2xl/[16px] font-semibold">
        Learn More
      </header>
      <ul className="flex flex-col gap-4">
        {[
          'About Us',
          'Why this work matters',
          'FAQs',
          'Terms and Disclaimer',
          'Transparency',
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function Others() {
  return (
    <div className="font-semibold/[16px] w-[391px]">
      <p className="pb-10">
        This Human development is backed by Jason Palmer, Ije, Zakk, and Mark
        Techson.
      </p>
      <p className="flex flex-col gap-[16px]">
        <span className="text-xl/[20px]">Want to get in touch?</span>
        <span>Message on twitter.com @badtechys</span>
      </p>
    </div>
  )
}

export default Footer
