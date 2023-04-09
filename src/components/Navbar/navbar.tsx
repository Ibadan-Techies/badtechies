import * as React from 'react'
import { Logo } from '../Logo'
import { list } from './datax'
import Button from '../Button/button'

const NavigationBar = () => {
  return (
    <nav className="h-[5.6rem] bg-ibtc-blue _body">
      <div className="_wrapper flex items-center justify-between">
        <Logo width="w-[70px]" height="h-[69.22px]" />
        <div className="flex items-center text text-white gap-20 xl:gap-44 ">
          <ul className="flex gap-6 items-center">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex gap-2 items-center">
            <Button
              outline
              style={{
                border: 'border-transparent',
                color: 'text-white',
              }}
            >
              <span className="text">Sign Up</span>
            </Button>
            <Button
              style={{
                background: 'bg-black',
                color: 'text-white',
              }}
            >
              <span className="text">Sign In</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
