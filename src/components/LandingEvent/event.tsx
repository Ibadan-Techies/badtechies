import Button from '../Button/button'
import EventCard from '../EventCard/eventcard'
import { datax } from './datax'

import { useWindowSize } from '@/utilities/hooks'
import Carousel from '../GalleryCarousel/carousel'

const BTN = (
  <Button
    outline
    style={{
      color: 'text-white',
      border: 'text-white',
      hoverBg: 'hover:bg-white',
      hoverColor: 'hover:text-ibtc-black',
    }}
  >
    View all
  </Button>
)
const Events = () => {
  const size = useWindowSize()
  const max_table_screen = Number(size.width) < 1024 ? true : false
  return (
    <div className="_body bg-ibtc-black py-[70px]">
      <div className="_wrapper flex flex-col gap-[66px]">
        <Header max_table_screen={max_table_screen} />
        <CardGroup max_table_screen={max_table_screen} />
        {max_table_screen && BTN}
      </div>
    </div>
  )
}

const CardGroup = ({ max_table_screen }: { max_table_screen: boolean }) => {
  if (max_table_screen) {
    return (
      <div className="_34sdf">
        <Carousel
          items={datax.map((data, index) => (
            <EventCard key={index} details={data} />
          ))}
        />
      </div>
    )
  }
  return (
    <div className="flex 2xl:justify-between gap-3 w-full self-center">
      {datax.map((data, index) => (
        <EventCard key={index} details={data} />
      ))}
    </div>
  )
}

const Header = ({ max_table_screen }: { max_table_screen: boolean }) => (
  <div className="flex justify-between items-center">
    <header className="_header text-white">Events</header>
    {!max_table_screen && <span>{BTN}</span>}
  </div>
)

export default Events
