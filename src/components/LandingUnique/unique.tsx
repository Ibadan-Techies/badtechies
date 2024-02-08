import * as React from 'react'
import Image from 'next/image'
import { Container } from '../Layout/Container'
import { OvalOrnament } from '@/assets/svg'

import { useWindowSize } from '@/utilities/hooks'
import clsx from 'clsx'

const UniqueWrapper = ({ isMobile }: { isMobile?: boolean }) => (
  <Container className="bg-[#F5FAFA]">
    <div className="flex flex-col gap-[30px]">
      <Nav isMobile={!!isMobile} />
      {isMobile ? Img : null}
      <Content />
      {!isMobile ? Img : null}
    </div>
  </Container>
)

const Unique = () => {
  const { isMobile } = useWindowSize()

  if (isMobile) {
    return <UniqueWrapper isMobile={isMobile}></UniqueWrapper>
  }
  return <UniqueWrapper></UniqueWrapper>
}

function Nav({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={clsx('flex items-center justify-between', 'pt-6')}>
      <span className="h-[9.5rem] w-[8.6rem] lg:block hidden"></span>
      <span className="flex justify-center items-center _header">
        What makes us Unique?
      </span>
      {!isMobile && <OvalOrnament className="h-[9.5rem] w-[8.6rem]" />}
    </div>
  )
}

function Content() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
      {datax.map((data, index) => (
        <section key={index} className="w-full lg:w-[32%] mb-10">
          <header className="_header2 text-ibtc-black md:mb-5 mb-4">
            {data[0]}
          </header>
          <p className="text-[#4F4F4F]">{data[1]}</p>
        </section>
      ))}
    </div>
  )
}

const Img = (
  <div className="w-full relative h-[7.2rem] lg:h-[27.5rem]">
    <Image
      fill
      className="object-cover
            object-center"
      src="/uniqueChess.png"
      alt=""
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              40vw"
    />
  </div>
)

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
