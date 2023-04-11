import * as React from 'react'
import Image from 'next/image'
import { OvalOrnament } from '@/assets/svg'

const Unique = () => {
  return (
    <div className="bg-[#F5FAFA] _body py-5">
      <div className="_wrapper flex flex-col gap-[30px]">
        <Nav />
        <Content />
        <div className="w-full relative h-[27.5rem]">
          <Image
            fill
            className="object-cover
            object-center"
            src="/UniqueChess.png"
            alt=""
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
    </div>
  )
}

function Nav() {
  return (
    <div className="flex items-center justify-between">
      <span className="h-[9.5rem] w-[8.6rem]"></span>
      <span className="flex justify-center items-center _header">
        What makes us Unique
      </span>
      <OvalOrnament className="h-[9.5rem] w-[8.6rem]" />
    </div>
  )
}

function Content() {
  return (
    <div className="flex justify-between w-full">
      {datax.map((data, index) => (
        <section key={index} className="w-[30%]">
          <header className="_header2 text-ibtc-black mb-5">{data[0]}</header>
          <p className="text-[#4F4F4F] text-base leading-[22.4px]">{data[1]}</p>
        </section>
      ))}
    </div>
  )
}

const datax = [
  [
    'Open',
    'IBTC is designed to be open and transparent in its members dealing and every other general activities.',
  ],
  [
    'Inclusion and Knowledge',
    'The community is inclusive without any discrimination for colours, background, tribe, religion or sex. However, as a community we take a keen interest in knowledge and openness to share them.',
  ],
  [
    'Opportunities and Growth',
    'The community is a place that foster every member for growth and a pipeline of opportunities for all community members at large.',
  ],
]

export default Unique
