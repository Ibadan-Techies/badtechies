import * as React from 'react'
import Image from 'next/image'
import SubscribeNewsLetter from '@/components/SubscribeNewsletter/subscribe-newsletter'
import { IBTCMarquee } from '@/components/Marquee/marquee'
import Seo from '@/components/Seo/Seo'
import Layout from '@/components/Layout'
import { Container } from '@/components/Layout/Container'
import { sources } from '@/components/GalleryCarousel/sources'

const __wrapper =
  'flex lg:gap-16 gap-4 max-md:flex-col items-center max-md:justify-center'

export default function Home() {
  return (
    <Layout
      Seo={
        <Seo
          title="About Ibadan Techies"
          description="A community of tech enthusiasts. We are a non-profit. Our vision is to amplify tech talents from Africa and the work they're doing. we do this by supporting, educating & bringing us together."
        />
      }
    >
      {Section1}
      {Section3}
      {Section4}
      {Section2}
      <SubscribeNewsLetter></SubscribeNewsLetter>
      <MarqueeDesignTeam />
    </Layout>
  )
}

/**section 1 */
const BoldParagraph = ({ children }: React.PropsWithChildren) => (
  <p className="lg:w-1/2 w-full text-[2.5rem] leading-[3.125rem] font-semibold">
    {children}
  </p>
)
const Section1 = (
  <Container>
    <div className={__wrapper}>
      <BoldParagraph>
        Ibadan Techies Club, popular as The Badtechys, is the relay for tech
        talents in Africa.
      </BoldParagraph>
      <div className="flex flex-col lg:w-1/2 w-full">
        <p className="mb-4">
          We are a non-profit organization with the vision to amplify tech
          talents in Africa and the works they are doing.
        </p>
        <section>
          <header className="text-xl space-y-[0.5] font-medium">Mission</header>
          <p>
            It is to be a lasting, inclusive and accessible community that
            provides Black tech talents with skills, support and environment to
            be a voice in tech irrespective of age, sex, or disability.
          </p>
        </section>
      </div>
    </div>
    <div className="w-full h-96 relative mt-9">
      <Image
        src={
          'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681297044/gallery/thegangshit_bqixgy'
        }
        fill
        alt=""
        className="object-cover object-top rounded-sm"
      />
    </div>
  </Container>
)

/**section 2 */
const Section2 = (
  <div className="bg-[#F5FAFA]">
    <Container>
      <div className={__wrapper}>
        <BoldParagraph>
          This initiative is built by tech talents in Africa for talents all
          over the world.
        </BoldParagraph>
        <section className="flex flex-col lg:w-1/2 w-full _ccd">
          <header className="text-xl mb-6 font-medium">
            To achieve this, we offer a range of programs and resources,
            including:
          </header>
          <ul className="flex flex-col gap-6">
            <li>
              in-person meetups: Our regular gatherings bring together Black
              tech talents from across the community to network, share ideas,
              hangout and learn from one another.
            </li>
            <li>
              general tech hangouts: Our informal meetups offer a relaxed space
              for both members and non-members to connect and discuss topics of
              interest in a more casual setting.
            </li>
            <li>
              workshops and mentoring: We develop ourselves into mentors that
              end up mentoring newer members. The cycle ensures the individual
              growth of each member. 
            </li>
            <li>
              upskilling and nurturing talents: We are committed to supporting
              the growth and development of each member, offering opportunities
              for them to build their skills and pursue their goals.
            </li>
          </ul>
        </section>
      </div>
    </Container>
  </div>
)

/**Section 3 */
const Section3 = (
  <Container>
    <div
      className={
        'flex flex-row-reverse lg:gap-16 gap-4 max-lg:flex-col align-center'
      }
    >
      <div className="w-1/2 lg:block hidden h-[25rem] relative mt-9">
        <Image
          src={
            'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681297044/gallery/thegangshit_bqixgy'
          }
          fill
          alt=""
          className="object-cover object-top rounded-2xl"
        />
      </div>
      <div className="flex flex-col lg:w-1/2 w-full">
        <section className="flex flex-col gap-3">
          <header className="text-xl space-y-[0.5] font-medium">
            Our Story
          </header>
          <p>
            In a world where tech professionals in developed countries have
            access to an array of their's conferences, meetups, and communities
            that amplify its tech talents and their work,
            <br /> African tech talents often face barriers that prevent them
            from reaching their full potential forcing them to seek the
            awareness and resources outside Africa.
          </p>

          <p>
            In 2022, Kelvinsekx and Jason Palmer founded Ibadan Techies to
            address this problem. We began as a simple initiative to host
            in-person meetups in Ibadan, Nigeria. At that time, there were no
            existing community-driven organizations for tech professionals to
            meet except one travels or moves down to Lagos - an already
            congested commercial capital of Nigeria.
          </p>
          <p>
            With the early help from Sodiq, Gozinne, and Arafat, the
            organization quickly grew, rather than a two-own initiative into a
            commitment to providing accessible, community-driven, and universal
            tech support for Black Tech Talents even beyond the small state,
            Ibadan. 
          </p>
        </section>
      </div>
    </div>
  </Container>
)

/**Section 4 */
const Section4 = (
  <Container>
    <div className={__wrapper}>
      <div className="w-1/2 lg:block hidden h-[25rem] relative mt-9">
        <Image
          src={
            'https://res.cloudinary.com/dfliypjzt/image/upload/q_auto,f_auto,fl_lossy/v1681297044/gallery/thegangshit_bqixgy'
          }
          fill
          alt=""
          className="object-cover object-top rounded-2xl"
        />
      </div>
      <div className="flex flex-col lg:w-1/2 w-full">
        <div className="flex flex-col gap-3">
          <p>
            In May and June of 2022, we hosted our first in-person meetups,
            which attracted 25 techies in attendance. By the end of 2022, our
            attendance had grown to over 70 in our in-persons technical and
            general meetup alone.
          </p>
          <p>
            Every great impact project needs finances to move them off the
            ground. And this organization has been lucky to have Ije, Zakk,
            Jason Palmer, and Mark at the heart of our finances, critique,
            advice and backing.
          </p>
          <p>
            After losing Arafat, we expanded our directors. We are made up of
            Kelvinsekx, Jude Eyene, Sodiq, Gozinne, Arafat, Sheriff and Oladapo.
            <br />
            <br />
            the end...
          </p>
        </div>
      </div>
    </div>
  </Container>
)

const MarqueeDesignTeam = () => {
  return <IBTCMarquee images={sources[0]}></IBTCMarquee>
}
