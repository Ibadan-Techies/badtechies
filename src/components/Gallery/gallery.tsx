import * as React from 'react'
import Carousel from '../GalleryCarousel/carousel'
import { ShortImage, LongImage } from '../GalleryCarousel/component'
import { sources } from '../GalleryCarousel/sources'
import { useWindowSize } from '@/utilities/hooks'
import { random } from '@/utilities/util'

import { Container } from '../Layout/Container'

const r = random(sources)

const Items = sources.map((item, index) => {
  return <GalleryGrid content={item} key={index} data-value={index + 1} />
})

function GalleryGrid({ content }: { content: string[] }) {
  return (
    <div className="h-[35rem] lg:h-[35rem] flex justify-center" id="gallery">
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
  const { isMobile } = useWindowSize()
  if (isMobile) {
    return (
      <GalleryWrapper>
        <div>
          <Carousel
            items={sources[r].map((item, index) => (
              <div key={index} className="h-[23rem] w-full">
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
    <Container bg="bg-[#FDF6F2]" id="_3434ERR">
      <header className="_header text-ibtc-black pb-10">Gallery</header>
      {children}
    </Container>
  )
}

export default Gallery
