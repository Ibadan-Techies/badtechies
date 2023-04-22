import * as React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Carousel = ({ items }: { items: React.ReactNode[] }) => (
  <AliceCarousel autoHeight infinite mouseTracking items={items} />
)

export default Carousel
