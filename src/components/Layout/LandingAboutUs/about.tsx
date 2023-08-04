import * as React from 'react'
import Button from '../../Button/button'
import { OceanOrnament } from '@/assets/svg'
import { Container } from '../Container'

// parts
import Frame from './frame'
import clsx from 'clsx'

const MainContent = (
  <div className="flex lg:gap-16 gap-4 max-lg:flex-col">
    <p className="_header text-ibtc-black">
      Behind the next people to shape tech from Africa you will find our
      efforts.
    </p>
    <div className="lg:gap-[2.3rem] gap-7 flex flex-col text-[#4F4F4F]">
      <p>
        From first timers writing their first line of code, to experts across
        all facets of tech, we provide equal opportunity, experience and
        privileges.
      </p>

      <p>
        <b className="opacity-80 text-[#2f3549]">
          Our mission is to be the platform that truly supports Africa's talents
          to co-learn, share knowledge, research and collaborate on projects
          that have the potential to make a significant impact in our community
          and beyond.
        </b>
        We believe that technology has the power to solve some of the world's
        most pressing challenges, and we are committed to leveraging our skills
        and expertise to create positive change.
      </p>
      <span className="lg:w-fit">
        <Button
          href="/about"
          style={{
            background: 'bg-ibtc-blue',
            color: 'text-white',
            hoverBg: 'hover:bg-ibtc-blue-darker',
            hoverColor: 'hover:text-ibtc-grey',
          }}
        >
          Deep Dive about Us
        </Button>
      </span>
    </div>
  </div>
)

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
          {MainContent}
        </div>
      </Container>
      <OceanOrnament className="text-2xl absolute left-0 bottom-0 mt-10 hidden lg:block _stroke-grey" />
      <Frame />
    </div>
  )
}

export default AboutUs
