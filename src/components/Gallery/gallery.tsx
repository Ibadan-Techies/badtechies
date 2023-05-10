import * as React from 'react'
import { Container } from '../Layout/Container'
import { IBTCMarquee } from '../Marquee/marquee'

const Gallery = () => {
  return (
    <>
      <Container>
        <p className="_header">Gallery</p>
      </Container>
      <IBTCMarquee images={sources}></IBTCMarquee>
      <IBTCMarquee images={sources2} reverse></IBTCMarquee>
    </>
  )
}

const sources = [
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138097/gallery/grid3_1_zugtwq',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138284/gallery/grid3_2_fxfuo2',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138067/gallery/grid3_3_rfvy9d',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138316/gallery/grid3_4_govmis',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138175/gallery/grid1_2d36_eqhbcn',
]

const sources2 = [
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138086/gallery/grid1_9354f93_bvmxhg',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138078/gallery/grid1_10195_qoarum',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138081/gallery/grid1_8f83_fhykhf',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138071/gallery/grid2_1_mjvlnd',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681138089/gallery/grid2_2_i7jxdb',
]

export default Gallery
