import * as React from 'react'
import { Logo } from '../../Logo'
import { list } from './datax'
import Button from '../../Button/button'
import { Container } from '../Container'

const NavigationBar = () => {
  return (
    <nav className="h-[5.6rem] flex items-center bg-ibtc-blue">
      <Container treatAs={'nav'}>
        <div className="_wrapper flex items-center justify-between">
          <Logo width="w-[70px]" height="h-[69.22px]" />
          <div className="flex items-center text text-white gap-20 max-lg:hidden">
            <ul className="flex gap-2 items-center">
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
        </div>
      </Container>
    </nav>
  )
}

export default NavigationBar
