import * as React from 'react'
import { Container } from '../Layout/Container'
import { IBTCMarquee } from '../Marquee/marquee'

export default function Gallery() {
  return (
    <>
      <Container>
        <p
          className="_header mx-auto text-center max-sm:w-[60%] md:text-center"
          id="gallery"
        >
          We put <span className="text-ibtc-blue">our members</span> first.
        </p>
        <ul className="flex flex-col max-md:gap-4 md:flex-row md:justify-between md:w-4/5 xl:w-2/3 m-auto mt-8 text-2xl">
          <div className="flex flex-col gap-4">
            <li className="_li">We intentionally keep us small.</li>
            <li className="_li">We intentionally foster bond.</li>
            <li className="_li">We intentionally support one another.</li>
          </div>
          <div className="flex flex-col gap-4">
            <li className="_li">We don't charge you.</li>
            <li className="_li">We don't control or influence your views.</li>
            <li className="_li">We don't make it rigid to join us.</li>
          </div>
        </ul>
      </Container>
      <IBTCMarquee images={sources}></IBTCMarquee>
      <IBTCMarquee images={sources2} reverse></IBTCMarquee>
    </>
  )
}

const sources = [
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686718456/a_speaker_at_the_ibadan_techies_kff5so',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686712604/techies_at_a_meetup_in_Nigeria_pnjhwb',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686713329/happy_techies_at_a_tech_meetup_in_nigeria_guvvww',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686713737/two_attendees_at_ibadan_techies_meetup_mgtzlr',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1681138175/gallery/grid1_2d36_eqhbcn',
]

const sources2 = [
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1681138086/gallery/grid1_9354f93_bvmxhg',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686717533/people_at_the_tech_meetup_in_Nigeria_vucevn',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686718146/happ_attendees_at_the_leading_tech_meetup_in_ibadan_grk5eu.jpg',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1681138071/gallery/grid2_1_mjvlnd',
  'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686715907/a_room_filled_with_members_at_ibadan_techies_vac5fo',
]
