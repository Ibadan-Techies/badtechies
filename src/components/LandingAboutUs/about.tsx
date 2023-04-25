import * as React from 'react'
import Button from '../Button/button'
import { OceanOrnament } from '@/assets/svg'
import { Container } from '../Layout/Container'

// parts
import MainContent from './main'
import Frame from './frame'
import clsx from 'clsx'

const AboutUs = () => {
  return (
    <div
      className={clsx({
        // desktop
        [' relative flex flex-col min-h-[43rem] overflow-hidden']: true,
        // mobile
        ['gap-10']: true,
      })}
      id="about-us"
    >
      <Container>
        <div className="flex flex-col gap-5">
          <span className="w-fit">
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
      </Container>
      <OceanOrnament className="text-2xl absolute left-0 bottom-0 mt-10 hidden lg:block" />
      <Frame />
    </div>
  )
}

export default AboutUs
