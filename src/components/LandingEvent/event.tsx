import Button from '../Button/button'
import EventCard from '../EventCard/eventcard'
import { datax } from './datax'

const Events = () => {
  return (
    <div className="_body bg-ibtc-black py-[70px]">
      <div className="_wrapper flex flex-col gap-[66px]">
        <Header />
        <CardGroup />
      </div>
    </div>
  )
}

const CardGroup = () => {
  return (
    <div className="flex 2xl:justify-between gap-3 w-full self-center">
      {datax.map((data, index) => (
        <EventCard key={index} details={data} />
      ))}
    </div>
  )
}

const Header = () => (
  <div className="flex justify-between items-center">
    <header className="_header text-white">Events</header>
    <span>
      <Button
        outline
        style={{
          color: 'text-white',
          border: 'text-white',
          hoverBg: 'hover:bg-white',
          hoverColor: 'hover:text-ibtc-black'
        }}
      >
        View all
      </Button>
    </span>
  </div>
)

export default Events
