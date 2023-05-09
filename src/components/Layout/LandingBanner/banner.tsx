import { ArrowDecLeft, ArrowDecRight, LoveAnimation } from '@/assets/svg'
import * as React from 'react'
import { Container } from '../Container'
import Button from '../../Button/button'
import clsx from 'clsx'

const datax = [
  ['Yes, Let me empower Black Talents', 'https://forms.gle/d6XDGm68t42o9ZjK7'],
  ['Let me in, I want to be empowered', 'https://forms.gle/YUFNtMk1b1i6iUcg9'],
]

const ButtonGroup = () => {
  return (
    <div
      className={clsx(
        'flex self-center gap-10 lg:w-[45rem]',
        'max-md:flex-col max-md:gap-6 w-full items-center'
      )}
    >
      {datax.map((data, index) => (
        <Button
          href={data[1]}
          key={index}
          style={{
            color: 'text-ibtc-black',
            background: 'bg-[#F3D6A5]',
            hoverBg: 'hover:bg-[#EAB862]',
            hoverColor: 'hover:text-white',
          }}
        >
          {data[0]}
        </Button>
      ))}
    </div>
  )
}

export const Banner = () => {
  return (
    <>
      <Container bg="bg-ibtc-blue" treatAs={'banner'}>
        <div className="h-full flex items-end">
          <ArrowDecRight className="relative basis-[fit-content] bottom-[1.2rem] flex-shrink-0 hidden lg:block _stroke_dash_300 _stroke-white animate-strok-reverse" />
          <Main />
          <ArrowDecLeft className="relative basis-[fit-content] bottom-[1.2rem] flex-shrink-0 hidden lg:block _stroke_dash_300 _stroke-white animate-strok" />
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
            Talents in Africa do not have an equal ground in tech
          </span>
        </p>
        <p className="_spexXtext max-md:text-3xl max-md:leading-8 text-white">
          We believe Black Tech Talents should be amplified, especially the
          works they are doing. Do You?
        </p>
        <p className="text-ibtc-offwhite max-lg:text-base max-lg:leading-[22.4px]">
          Since 2022, People who believe in giving Africa's Talents an equal
          chance and ground in tech have joined us.
        </p>
      </div>
      <ButtonGroup />
    </div>
  )
}
