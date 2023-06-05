import { Banner as LandingBanner } from '@/components/Layout/LandingBanner'
import {default as AboutSection} from '@/components/Layout/LandingAboutUs/about'
import Events from '@/components/LandingEvent/event'
import Gallery from '@/components/Gallery/gallery'
import Unique from '@/components/LandingUnique/unique'
import FAQ from '@/components/FAQ/faq-index'
import SubscribeNewsLetter from '@/components/SubscribeNewsletter/subscribe-newsletter'
import Seo from '@/components/Seo/Seo'

import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout
      Seo={
        <Seo
          title="Welcome Badtechies"
          description="A community of tech enthusiasts. We are a non-profit. Our vision is to amplify tech talents from Africa and the work they're doing. we do this by supporting, educating & bringing us together."
        />
      }
    >
      <>
        <div className="bg-ibtc-blue">
          <LandingBanner />
        </div>
        <AboutSection />
        <Events />
        <Gallery />
        <Unique />
        <SubscribeNewsLetter />
        <FAQ />
      </>
    </Layout>
  )
}
