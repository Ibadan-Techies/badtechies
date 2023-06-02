import * as React from 'react'
import { Container } from '../Layout/Container'
import Image from 'next/image'
import clsx from 'clsx'
import { useWindowSize } from '@/utilities/hooks'

import ReactStackedPhotos from 'react-stacked-photos'
import { RoundArrow, OceanOrnament } from '@/assets/svg'

const backers = [
  {
    name: 'Ijeoma',
    title: 'Senior Project Manager, SThree',
    img: 'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1685681053/ije_a_backer_at_a_ibadan_techies_oinpxj',
  },
  {
    name: 'Mark Techson',
    title: 'Senior Developer Advocate, Google',
    img: 'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1685681053/Marktechsoon_fmeqsd',
  },
  {
    name: 'Jason Palmer',
    title: 'Senior Product Manager, Netflix',
    img: 'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1685681053/Jason_palmer_a_backer_at_ibadan_techies_club_ygf91l',
  },
  {
    name: 'Zakk',
    title: 'Senior Engineer, Gitcoin',
    img: 'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1685681053/Zakk_one_of_the_backers_at_ibadan_tech_comunity_ajq8qu',
  },
]

const Bgs = [
  'ibtc-light-yellow',
  'ibtc-green-cyan',
  'ibtc-azure',
  'ibtc-blue-light',
]

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
        <header
          className="_header text-center mb-6"
          id="ibadan-techies-backers"
        >
          Meet our Backers
        </header>
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
              alt="Zakk, a backer at Ibadan Tech Community"
              src={backers[3].img}
              className={clsx('object-cover rounded-lg')}
            />
          </div>
          <div
            style={{ transform: 'rotate(-10deg)', borderRadius: '8px' }}
            data-ishovering={{ transform: 'rotate(-5deg) translateX(-30px)' }}
          >
            <Image
              fill
              alt="Jason Palmer, a backer at Ibadan Techies Club"
              src={backers[2].img}
              className={clsx('object-cover rounded-lg')}
            />
          </div>
          <div style={{ borderRadius: '8px' }}>
            <Image
              fill
              alt="Mark Techson, a backer at Ibadan Tech Community"
              src={backers[1].img}
              className={clsx('object-cover rounded-lg')}
            />
          </div>
          <div>
            <Image
              fill
              alt="Ijeoma, a backer at Ibadan Tech Community"
              src={backers[0].img}
              className="object-cover rounded-lg"
            />
          </div>
        </ReactStackedPhotos>
        <div className="flex flex-col gap-4">
          <p className="_header2 text-center">{backers[i].name}</p>
          <p className="text-ibtc-grey-2 text-center">{backers[i].title}</p>
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
