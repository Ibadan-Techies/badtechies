import { ArrowDecLeft, ArrowDecRight, LoveAnimation } from '@/assets/svg'
import * as React from 'react'
import { Container } from '../Layout/Container'
import { ButtonGroup } from './parts'

const Banner = () => {
  return (
    <>
      <Container bg="bg-ibtc-blue" treatAs={'banner'}>
        <div className="h-full flex items-end">
          <ArrowDecRight className="relative basis-[fit-content] bottom-[1.2rem] flex-shrink-0 hidden lg:block" />
          <Main />
          <ArrowDecLeft className="relative basis-[fit-content] bottom-[1.2rem] flex-shrink-0 hidden lg:block" />
        </div>
      </Container>
      <div className="w-full bg-ibtc-blue">
        <LoveAnimation />
      </div>
    </>
  )
}

function Main() {
  return (
    <div className="flex-shrink-1 font-medium self-center text-center flex flex-col gap-[25px] lg:gap-[3.685rem]">
      <div className="flex flex-col gap-[22px] lg:gap-6 text-lg leading-[1.125rem]">
        <p className="text-white">
          <span className="py-2.5 px-4 bg-ibtc-blue-dark max-lg:text-xs max-lg:leading-3 lg:w-fit max-sm:block">
            Black Talents in Africa do not have an equal ground in tech
          </span>
        </p>
        <p className="_spexXtext max-md:text-3xl max-md:leading-8 text-white">
          We believe Black Tech Talents should be amplified, especially the
          works they are doing. Do You?
        </p>
        <p className="text-ibtc-offwhite max-lg:text-base max-lg:leading-[22.4px]">
          Since 2022, People who believe in giving Blacks an equal chance and
          ground in tech have joined us
        </p>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default Banner
