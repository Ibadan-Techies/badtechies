import * as React from 'react'
import Button from '../Button/button'
import { OceanOrnament } from '@/assets/svg'

// parts
import MainContent from './main'
import Frame from './frame'

const AboutUs = () => {
  return (
    <div className="pt-[4rem]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col  wrapper gap-5">
          <span className="">
            <Button
              style={{
                color: 'text-ibtc-blue',
                background: 'bg-ibtc-blue-light',
              }}
            >
              ABOUT US
            </Button>
          </span>
          <MainContent />
        </div>
      </div>
      <div className="flex 2xl:justify-around gap-80 items-baseline">
        <OceanOrnament className="text-2xl" />
        <Frame />
      </div>
    </div>
  )
}

export default AboutUs
