import * as React from 'react'
import { Container } from '@/components/Layout/Container'
import Image from 'next/image'
import clsx from 'clsx'

const team = [
  {
    img: 'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1685683529/israel_design_lead_at_ibadan_tech_community_id5in5',
    name: 'Israel',
    title: 'Lead, BadDesign',
    alt: 'Israel Adegbolu, the lead of Ibadan Techies Club, pose for a picture',
  },

  {
    img: 'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1685684284/fuhad_a_member_of_ibadan_tech_community_design_team_1_nuoply',
    name: 'Fuhad',
    title: 'Designer, BadDesign',
    alt: 'Fuhad, a designer at Ibadan Techies',
  },

  {
    img: 'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1685684569/khadija_a_member_of_ibadan_techies_designer_team_fm6nxs',
    name: 'Khadija',
    title: 'Designer, BadDesign',
    alt: 'A beautiful picture of Khadija, a designer at Ibadan Techi Community',
  },
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
      <p
        className="_header text-center w-full mb-18"
        id="ibadan-techies-designers"
      >
        Meet our Design Team
      </p>
      <div ref={ref}>
        <div className="flex gap-4 justify-center max-md:flex-wrap mb-28">
          {team.map((designer, index) => (
            <div
              key={index}
              style={{ transition: 'all 1s' }}
              className={clsx(
                `w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem] relative blur-sm delay-[0ms] -translate-x-[100px]`,
                {
                  'opacity-0': hidden,
                  ['opacity-100 !translate-x-0 !blur-0']: !hidden,
                }
              )}
            >
              <DesignTeam_Image
                isLazy={isLazy}
                src={designer.img}
                alt={designer.alt}
              />
              <p
                className={clsx(
                  `_header3 text-center lg:text-left transition-opacity delay-[1500ms]`,
                  {
                    'opacity-0': hidden,
                    ['opacity-100']: !hidden,
                  }
                )}
              >
                {designer.name}
              </p>
              <p
                className={clsx(
                  `text-center lg:text-left transition-opacity delay-[2500ms]`,
                  {
                    'opacity-0': hidden,
                    ['opacity-100']: !hidden,
                  }
                )}
              >
                {designer.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

const DesignTeam_Image = ({
  isLazy,
  src,
  alt,
}: {
  isLazy: boolean
  src: string
  alt: string
}) => (
  <img
    loading={isLazy ? 'lazy' : 'eager'}
    alt={alt}
    src={src}
    className={clsx(
      'object-cover rounded-lg border border-transparent h-full w-full'
    )}
  />
)
