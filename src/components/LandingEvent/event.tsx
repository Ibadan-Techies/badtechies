import Button from '../Button/button'
import EventCard from '../EventCard/eventcard'

const datax = [
  ['/EventCard/event11.png', 'What developers need to know about JWTs'],
  ['/EventCard/event12.png', 'Design SCC Technical Meetup'],
  [
    '/EventCard/event13.png',
    'Deploying resilient systems with Kubernetes on Google Cloud',
  ],
  ['/EventCard/event14.jpg', 'Being a black woman in Tech'],
]

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
        <EventCard key={index} src={data[0]} topic={data[1]} />
      ))}
    </div>
  )
}

const Header = () => (
  <div className="flex justify-between items-center">
    <header className="header text-white">Events</header>
    <span>
      <Button
        outline
        style={{
          color: 'text-white',
          border: 'text-white',
        }}
      >
        View all
      </Button>
    </span>
  </div>
)

export default Events
