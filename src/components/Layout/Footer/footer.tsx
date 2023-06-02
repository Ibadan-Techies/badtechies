import * as React from 'react'
import Link from 'next/link'
import { LinkedIn, Twitter, IBTCLogo } from '@/assets/svg'
import { useWindowSize } from '@/utilities/hooks'
import clsx from 'clsx'
import { Container } from '../Container'

const Footer = () => {
  const { isMobile } = useWindowSize()

  return (
    <footer
      className={clsx(
        'bg-ibtc-black py-6 md:text text-ibtc-grey font-medium',
        'text-[0.7rem]/[0.7rem]'
      )}
    >
      <div className=" border-y">
        <Container>
          <div
            className={clsx(
              'flex flex-col gap-5 md:justify-between md:flex-row md:py-10'
            )}
          >
            <div
              className={clsx(
                'flex w-full md:w-[44%] md:justify-between',
                'gap-6'
              )}
            >
              <IBTCLogo className="lg:w-[120px] md:w-[100px] w-[49px] lg:h-[118.67px] md:h-[98.67px] h-[48.5px] fill-white" />
              <MoreList />
            </div>
            <Others isMobile={isMobile} />
          </div>
        </Container>
      </div>
      {isMobile && GetIntouch}
      <p className="text-center pt-6">
        &copy; Ibadan Tech Community is a registered non - profit backed by the
        Nigerian Law (2023)
      </p>
    </footer>
  )
}

function Others({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      className={clsx(
        'md:w-[44%] w-full',
        'max-md:text-center max-md:self-center'
      )}
    >
      <p className="md:pb-10">
        This Human development is backed by Jason Palmer, Ije, Zakk, and Mark
        Techson.
      </p>
      {!isMobile && GetIntouch}
    </div>
  )
}

function MoreList() {
  return (
    <div className="flex flex-col gap-6 max:sm:w-[75%]">
      <header
        className={clsx(
          'h-6 md:text-2xl md:leading-6 text-white font-semibold',
          'text-xl leading-5, h-5'
        )}
      >
        Learn More
      </header>
      <div
        role="list"
        className="flex md:flex-col flex-wrap gap-4 w-full max-sm:justify-between"
      >
        <div className="space-y-4">
          <Link
            href={'/about'}
            role="listitem"
            className="hover:text-ibtc-brown-light cursor-pointer space-t-4 block"
          >
            About Us
          </Link>
          <Link
            href={'#faq'}
            role="listitem"
            className="hover:text-ibtc-brown-light cursor-pointer block"
          >
            FAQ
          </Link>
          <div
            role="listitem"
            className="hover:text-ibtc-brown-light cursor-pointer space-b-4"
          >
            Transparency
          </div>
        </div>
        <div className="space-y-4">
          <div
            role="listitem"
            className="hover:text-ibtc-brown-light cursor-pointer"
          >
            Terms and Disclaimer
          </div>
          <div
            role="listitem"
            className="hover:text-ibtc-brown-light cursor-pointer"
          >
            Why this work mstters
          </div>
        </div>
      </div>
    </div>
  )
}

const GetIntouch = (
  <p
    className="flex flex-col gap-[16px] max-lg:items-center max-lg:pt-4"
    id="contact-us"
  >
    <span className="text-xl leading-5 text-white">Want to get in touch?</span>
    <span className="flex gap-2">
      <a href={'https://twitter.com/badtechys'}>
        <Twitter className="fill-white hover:fill-ibtc-blue" />
      </a>
      <a href="https://www.linkedin.com/company/the-ibadan-techies-club/">
        <LinkedIn className="fill-white hover:fill-ibtc-blue" />
      </a>
    </span>
  </p>
)

export default Footer
