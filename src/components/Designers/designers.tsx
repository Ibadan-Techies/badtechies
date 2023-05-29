import * as React from 'react'
import { Container } from '@/components/Layout/Container'
import Image from 'next/image'
import clsx from 'clsx'

const srcs = [
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138097/gallery/grid3_1_zugtwq',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138284/gallery/grid3_2_fxfuo2',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138067/gallery/grid3_3_rfvy9d',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138316/gallery/grid3_4_govmis',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138175/gallery/grid1_2d36_eqhbcn',
]

const { useState, useRef, useEffect } = React
export const DesignTeam = () => {
  const [isLazy, setIsLazy] = useState(true)
  const [hidden, setHidden] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isLazy) {
      return
    }
    const rootVertical = Number(window.innerHeight) * 3
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLazy(false)
          }
        })
      },
      {
        root: null,
        rootMargin: `${rootVertical}px 0px`,
      }
    )
    observer.observe(ref.current as Element)
    return () => observer.disconnect()
  }, [isLazy])

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            setHidden(false)
          } else {
            setHidden(true)
          }
        },
        {
          root: null,
          threshold: 0.7,
          rootMargin: '10px 0px',
        }
      )
    })
    observer.observe(ref.current as Element)
    return () => observer.disconnect()
  })

  return (
    <Container bg="bg-white">
      <p className="_header text-center w-full mb-18">Meet our Design Team</p>
      <div ref={ref}>
        <div className="flex gap-4 justify-center max-md:flex-wrap">
          <div
            style={{ transition: 'all 1s' }}
            className={clsx(
              `w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem] relative blur-sm delay-[0ms] -translate-x-[100px]`,
              {
                'opacity-0': hidden,
                ['opacity-100 !translate-x-0 !blur-0']: !hidden,
              }
            )}
          >
            <DesignTeam_Image isLazy={isLazy} src={srcs[4]} />
          </div>
          <div
            style={{ transition: 'all 1s' }}
            className={clsx(
              `w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem] relative blur-sm delay-[200ms] -translate-x-[100px]`,
              {
                'opacity-0': hidden,
                ['opacity-100 !translate-x-0 !blur-0']: !hidden,
              }
            )}
          >
            <DesignTeam_Image isLazy={isLazy} src={srcs[3]} />
          </div>
          <div
            style={{ transition: 'all 1.6s' }}
            className={clsx(
              `w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem] relative blur-sm -translate-x-[100px]`,
              {
                'opacity-0': hidden,
                ['opacity-100 !translate-x-0 !blur-0']: !hidden,
              }
            )}
          >
            <DesignTeam_Image isLazy={isLazy} src={srcs[2]} />
          </div>
          <div
            style={{ transition: 'all 1.2s' }}
            className={clsx(
              `w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem] relative blur-sm -translate-x-[100px]`,
              {
                'opacity-0': hidden,
                ['opacity-100 !translate-x-0 !blur-0 !delay-10']: !hidden,
              }
            )}
          >
            <DesignTeam_Image isLazy={isLazy} src={srcs[1]} />
          </div>
          <div
            style={{ transition: 'all 2.1s' }}
            className={clsx(
              `w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem] relative blur-sm -translate-x-[100px]`,
              {
                'opacity-0': hidden,
                ['opacity-100 !translate-x-0 !blur-0 ']: !hidden,
              }
            )}
          >
            <DesignTeam_Image isLazy={isLazy} src={srcs[0]} />
          </div>
        </div>
      </div>
    </Container>
  )
}

const DesignTeam_Image = ({
  isLazy,
  src,
}: {
  isLazy: boolean
  src: string
}) => (
  <img
    loading={isLazy ? 'lazy' : 'eager'}
    alt=""
    src={src}
    className={clsx(
      'object-cover rounded-3xl border-8 border-[#333] h-full w-full'
    )}
  />
)
