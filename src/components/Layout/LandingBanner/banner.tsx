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
        'flex self-center mt-6 md:gap-10 lg:w-[45rem] h-[4rem] mx-auto',
        'max-md:flex-col gap-6 w-full max-md:h-[8.3rem] items-center'
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

export default function Banner() {
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
    <div className="font-medium self-center text-center">
      <div className="flex items-center flex-col gap-6 text-lg leading-[1.125rem] text-white">
        <p>
          <span className="py-2.5 px-4 bg-ibtc-blue-dark max-lg:leading-3 w-fit max-sm:block">
            Talents in Africa do not have an equal ground in tech
          </span>
        </p>
        <p className="text-3xl leading-8 md:text-5xl md:leading-10">
          We believe Africa's Tech Talents should be amplified, especially the
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
