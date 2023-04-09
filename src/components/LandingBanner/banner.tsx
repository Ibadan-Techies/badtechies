import { ArrowDecLeft, ArrowDecRight } from '@/assets/svg'
import * as React from 'react'
import Button from '../Button/button'
import { datax } from './datax'

const Banner = () => {
  return (
    <div className="xer23_1212 bg-ibtc-blue flex items-center justify-center">
      <div className="wrapper h-4/5 flex items-end">
        <ArrowDecRight className="relative basis-[fit-content] bottom-[10%] flex-shrink-0" />
        <Main />
        <ArrowDecLeft className="relative basis-[fit-content] bottom-[10%] flex-shrink-0" />
      </div>
    </div>
  )
}

function Main() {
  return (
    <div className="flex-shrink-1 h-full font-medium self-center text-center flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <p className="text-white">
          <span className="py-2.5 px-4 bg-ibtc-blue-dark">
            Black Talents in Africa do not have an equal ground in tech
          </span>
        </p>
        <p className="spexXtext leading-[3.75rem] text-white">
          We believe Black Tech Talents should be amplified especially the works
          they are doing. Do You?
        </p>
        <p className="text-ibtc-offwhite">
          Since 2022, People who believe in giving Blacks an equal chance and
          ground in tech have joined us
        </p>
      </div>
      <div className="flex self-center gap-10 mt-14">
        {datax.map((data, index) => (
          <Button
            key={index}
            style={{
              color: 'text-ibtc-black',
              background: 'bg-[#F3D6A5]',
              hoverBg: 'hover:bg-[#EAB862]',
              hoverColor: 'hover:text-white',
            }}
          >
            {data}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Banner
