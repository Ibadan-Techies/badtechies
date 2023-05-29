import * as React from 'react'
import { Container } from '../Layout/Container'
import Image from 'next/image'
import clsx from 'clsx'
import { useWindowSize } from '@/utilities/hooks'

import ReactStackedPhotos from 'react-stacked-photos'
import { RoundArrow, OceanOrnament } from '@/assets/svg'

const backers = [
  {
    name: 'Jason Palmer',
    title: 'Product Manager, Netflix',
  },
  {
    name: 'Mark Techson',
    title: 'Senior Developer Advocate, Google',
  },
  {
    name: 'Ijeoma',
    title: 'Senior Project Manager, SThree',
  },
]

const Bgs = ['ibtc-light-yellow', 'ibtc-green-cyan', 'ibtc-azure']

const { useRef, useState } = React
export function Backers() {
  const { isMobile } = useWindowSize()
  const childRef = useRef<
    HTMLDivElement & {
      swipeLeft: (e: any) => void
      swipeRight: () => void
    }
  >(null)
  const [i, setIndex] = useState(0)
  const handleClick = () => {
    setIndex((i) => (i + 1 >= backers.length ? 0 : i + 1))
  }

  return (
    <Container bg={`bg-${Bgs[i]} pb-20`}>
      <div className="flex flex-col items-center gap-[54px]">
        <header className="_header text-center">Meet our Backers</header>
        <ReactStackedPhotos
          ref={childRef}
          width={isMobile ? 270 : 376}
          height={isMobile ? 200 : 270}
          onClick={handleClick}
        >
          <div
            style={{ transform: 'rotate(4deg)', borderRadius: '8px' }}
            data-ishovering={{ transform: 'rotate(2deg) translateX(30px)' }}
          >
            <Image
              fill
              alt=""
              src={srcs[4]}
              className={clsx('object-cover rounded-lg')}
            />
          </div>
          <div
            style={{ transform: 'rotate(-10deg)', borderRadius: '8px' }}
            data-ishovering={{ transform: 'rotate(-5deg) translateX(-30px)' }}
          >
            <Image
              fill
              alt=""
              src={srcs[0]}
              className={clsx('object-cover rounded-lg')}
            />
          </div>
          <div style={{ borderRadius: '8px' }}>
            <Image
              fill
              alt="z"
              src={srcs[3]}
              className={clsx('object-cover rounded-lg')}
            />
          </div>
        </ReactStackedPhotos>
        <div className="flex flex-col gap-4 items-center">
          <p className="_header2">{backers[i].name}</p>
          <p className="text-ibtc-grey-2">{backers[i].title}</p>
        </div>
      </div>
      <RoundArrow
        className="text-4xl absolute left-32 top-[40%] z-40 max-md:left-8"
        onClick={(e: any) => {
          childRef.current?.swipeLeft(e)
        }}
      />
      <RoundArrow
        className="text-4xl absolute right-32 top-[40%] rotate-180 z-40 max-md:right-8"
        onClick={() => {
          childRef.current?.swipeRight()
        }}
      />
      <OceanOrnament className="lg:block hidden absolute right-0 fill-ibtc-blue-cyan h-fit" />
      <OceanOrnament className="lg:block hidden absolute left-0 fill-ibtc-blue-cyan h-fit" />
    </Container>
  )
}

const srcs = [
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138097/gallery/grid3_1_zugtwq',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138284/gallery/grid3_2_fxfuo2',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138067/gallery/grid3_3_rfvy9d',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138316/gallery/grid3_4_govmis',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138175/gallery/grid1_2d36_eqhbcn',
]
