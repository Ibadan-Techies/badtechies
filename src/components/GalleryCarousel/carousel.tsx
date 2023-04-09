import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { ShortImage, LongImage } from './component'

const sources = [
  [
    '/gallery/grid1_2d36.png',
    '/gallery/grid1_8f83.png',
    '/gallery/grid1_10195.png',
    '/gallery/grid1_9354f93.png',
  ],
]

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

const Carousel = () => (
  <div className="_body">
    <div className="_wrapper">
      <AliceCarousel autoHeight infinite mouseTracking items={Items} />
    </div>
  </div>
)

export default Carousel
