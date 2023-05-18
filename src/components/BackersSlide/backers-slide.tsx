import * as React from 'react'
import { Container } from '../Layout/Container'
import Image from 'next/image'
import clsx from 'clsx'

import ReactStackedPhotos from 'react-stacked-photos'
import { RoundArrow } from '@/assets/svg'

const { useRef, useState } = React
export function Backers() {
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
  return (
    <Container>
      <div className="flex flex-col items-center gap-[54px]">
        <header className="_header">Meet our Backers</header>
        <ReactStackedPhotos
          ref={childRef}
          width={376}
          height={270}
          onClick={handleClick}
        >
          <div
            style={{ transform: 'rotate(4deg)' }}
            data-ishovering={{ transform: 'rotate(2deg) translateX(30px)' }}
          >
            <Image fill alt="" src={srcs[4]} className={clsx('object-cover')} />
          </div>
          <div
            style={{ transform: 'rotate(-10deg)' }}
            data-ishovering={{ transform: 'rotate(-5deg) translateX(-30px)' }}
          >
            <Image fill alt="" src={srcs[0]} className={clsx('object-cover')} />
          </div>
          <div>
            <Image
              fill
              alt="z"
              src={srcs[3]}
              className={clsx('object-cover')}
            />
          </div>
        </ReactStackedPhotos>
        <div className="flex flex-col gap-4 items-center">
          <p className="_header2">{backers[i].name}</p>
          <p className="text-ibtc-grey-2">{backers[i].title}</p>
        </div>
      </div>
      <RoundArrow
        className="text-4xl absolute left-32 top-[40%] hidden lg:block"
        onClick={(e: any) => {
          childRef.current?.swipeLeft(e)
        }}
      />
      <RoundArrow
        className="text-4xl absolute right-32 top-[40%] rotate-180 hidden lg:block"
        onClick={() => {
          childRef.current?.swipeRight()
        }}
      />
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
