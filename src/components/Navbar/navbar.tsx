import * as React from 'react'
import { Logo } from '../Logo'
import { list } from './datax'
import Button from '../Button/button'

const NavigationBar = () => {
  return (
    <nav className="h-[90px] bg-[#2D65BC] flex items-center">
      <div className="px-20 flex items-center justify-between w-full">
        <Logo width="w-[70px]" height="h-[69.22px]" />
        <div className="flex items-center text text-white justify-between w-8/12">
          <ul className="flex gap-6">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Button
              outline
              style={{
                border: 'border-transparent',
                width: 'w-[99px]',
                height: 'h-[44px]',
                color: 'text-white',
              }}
            >
              <span className="text">Sign Up</span>
            </Button>
            <Button
              style={{
                background: 'bg-black',
                width: 'w-[91px]',
                height: 'h-[44px]',
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
