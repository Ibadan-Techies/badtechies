import React, { Children } from 'react'
import Carousel from '../GalleryCarousel/carousel'
import { ShortImage, LongImage } from '../GalleryCarousel/component'
import { sources } from '../GalleryCarousel/sources'
import { useWindowSize } from '@/utilities/hooks'
import { random } from '@/utilities/util'

const r = random(sources)

const Items = sources.map((item, index) => {
  return <GalleryGrid content={item} key={index} data-value={index + 1} />
})

function GalleryGrid({ content }: { content: string[] }) {
  return (
    <div className="h-[35rem] flex justify-center">
      <div className="flex gap-[26px] max-2xl:w-full">
        <LongImage src={content[0]} />
        <div className="flex flex-col h-full gap-[26px]">
          <ShortImage src={content[1]} />
          <ShortImage src={content[2]} />
        </div>
        <LongImage src={content[3]} />
      </div>
    </div>
  )
}

const Gallery = () => {
  const size = useWindowSize()
  const max_table_screen = Number(size.width) < 764 ? true : false
  if (max_table_screen) {
    return (
      <GalleryWrapper>
        <div>
          <Carousel
            items={sources[r].map((item, index) => (
              <div key={index} className="h-[25rem] w-full">
                <div className="flex w-full h-full">
                  <ShortImage src={item} />
                </div>
              </div>
            ))}
          />
        </div>
      </GalleryWrapper>
    )
  }
  return (
    <GalleryWrapper>
      <Carousel items={Items} />
    </GalleryWrapper>
  )
}

function GalleryWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="_body bg-[#FDF6F2] _3434ERR py-6">
      <div className="_wrapper pt-14">
        <header className="_header text-ibtc-black pb-10">Gallery</header>
        {children}
      </div>
    </div>
  )
}

export default Gallery
