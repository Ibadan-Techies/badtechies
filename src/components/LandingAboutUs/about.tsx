import * as React from 'react'
import Button from '../Button/button'
import { OceanOrnament } from '@/assets/svg'

// parts
import MainContent from './main'
import Frame from './frame'

const AboutUs = () => {
  return (
    <div className="pt-[4rem] relative flex flex-col gap-60 min-h-[43rem] overflow-hidden">
      <div className="flex-col _body">
        <div className="flex flex-col  _wrapper gap-5">
          <span className="">
            <Button
              label
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
      <OceanOrnament className="text-2xl absolute left-0 bottom-0 mt-10" />
      <Frame />
    </div>
  )
}

export default AboutUs
