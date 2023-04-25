import Button from '../Button/button'
import EventCard from '../EventCard/eventcard'
import { Container } from '../Layout/Container'
import { datax } from './datax'

import { useWindowSize } from '@/utilities/hooks'
import Carousel from '../GalleryCarousel/carousel'

const Events = () => {
  const { isMobile, isTablet } = useWindowSize()
  return (
    <Container bg="bg-ibtc-black" id="events">
      <div className="flex flex-col gap-[66px]">
        <Header isTablet={isTablet} />
        <CardGroup isMobile={isMobile} />
        {isMobile && BTN}
      </div>
    </Container>
  )
}

const CardGroup = ({ isMobile }: { isMobile: boolean }) => {
  if (isMobile) {
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

const Header = ({ isTablet }: { isTablet: boolean }) => (
  <div className="flex justify-between items-center">
    <header className="_header text-white">Events</header>
    {isTablet && <span>{BTN}</span>}
  </div>
)

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

export default Events
