import * as React from 'react'
import Link from 'next/link'
import { list } from './datax'
import Button from '../../Button/button'

import { Hamburger, X, IBTCLogo } from '@/assets/svg'
import { Container } from '../Container'
// @ts-ignore
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useWindowSize } from '@/utilities/hooks'

const { useState, useEffect, useRef } = React
export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isDesktop } = useWindowSize()
  const scrollParentRef = useRef<HTMLDivElement>(null)

  // if the hamburger is open disable bodyscroll
  useEffect(() => {
    if (isOpen) {
      const preferredScrollParent = scrollParentRef.current!
      disableBodyScroll(preferredScrollParent)
      return () => enableBodyScroll(preferredScrollParent)
    } else {
      return undefined
    }
  }, [isOpen])

  return (
    <nav
      className={`py-3 flex ${
        !isDesktop && isOpen && 'flex-col h-screen'
      } items-center bg-ibtc-blue`}
    >
      <Container treatAs={'nav'}>
        <div className="_wrapper flex items-center justify-between">
          <Link href="/" aria-label="home">
            <IBTCLogo className="lg:w-[90px] w-14 lg:h-[89.22px] h-14 fill-white" aria-label="Ibadan Techies Logo"> </IBTCLogo>
          </Link>

          {!isDesktop ? (
            <button
              onClick={() => setIsOpen((pre) => !pre)}
              className="lg:hidden"
            >
              {isOpen ? (
                <X className="fill-white lg:w-[50px] w-8 h-8 lg:h-[49.22px]" aria-label="close modal" />
              ) : (
                <Hamburger className="lg:w-[60px] w-10 h-10 lg:h-[59.22px]" aria-label="open modal" />
              )}
            </button>
          ) : (
            <div className="flex items-center text text-white gap-20">
              <ul className="flex gap-2 items-center">
                <li>
                  <Button
                    href={'/about'}
                    style={{
                      color: 'text-white',
                      fontSize: 'text-[16px]/[16px]',
                    }}
                  >
                    About Us
                  </Button>
                </li>
                {list.map((item, index) => (
                  <li key={index}>
                    <Button
                      href={'/#' + item.toLowerCase().replace(/ /g, '-')}
                      style={{
                        color: 'text-white',
                        fontSize: 'text-[16px]/[16px]',
                      }}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
              <div className="flex w-[14rem] gap-2 items-center ">
                {/* <Button
              outline
              style={{
                border: 'border-transparent',
                color: 'text-white',
                fontSize: 'text-[16px]/[16px]',
              }}
            >
              Sign Up
            </Button>
            <Button
              style={{
                background: 'bg-black',
                color: 'text-white',
                fontSize: 'text-[16px]/[16px]',
              }}
            >
              Sign In
            </Button> */}
              </div>
            </div>
          )}
        </div>
      </Container>
      {!isDesktop && isOpen && (
        <div className="flex flex-col w-full" ref={scrollParentRef}>
          <ul className="flex flex-col gap-2 items-center w-full">
            <li
              className="border-b w-full"
              onClick={() => setIsOpen((pre) => !pre)}
            >
              <Button
                href={'/about'}
                style={{
                  color: 'text-white',
                  fontSize: 'text-[16px]/[16px]',
                }}
              >
                About Us
              </Button>
            </li>
            {list.map((item, index) => (
              <li
                key={index}
                className="border-b w-full"
                onClick={() => setIsOpen((pre) => !pre)}
              >
                <Button
                  href={'/#' + item.toLowerCase().replace(/ /g, '-')}
                  style={{
                    color: 'text-white',
                    fontSize: 'text-[16px]/[16px]',
                  }}
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

