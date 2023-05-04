import { Footer } from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import { Banner as LandingBanner } from '@/components/Layout/LandingBanner'
import AboutUs from '@/components/LandingAboutUs/about'
import Events from '@/components/LandingEvent/event'
import Gallery from '@/components/Gallery/gallery'
import Unique from '@/components/LandingUnique/unique'
import FAQ from '@/components/FAQ/faq-index'
import SubscribeNewsLetter from '@/components/SubscribeNewsletter/subscribe-newsletter'
import Seo from '@/components/Seo/Seo'

export default function Home() {
  return (
    <>
      <Seo
        title="Welcome Badtechies"
        description="A community of tech enthusiasts. We are a non-profit. Our vision is to amplify tech talents from Africa and the work they're doing. we do this by supporting, educating & bringing us together."
      />
      <div className="bg-ibtc-blue">
        <Navbar />
        <LandingBanner />
      </div>
      <AboutUs />
      <Events />
      <Gallery />
      <Unique />
      <SubscribeNewsLetter />
      <FAQ />
      <Footer />
    </>
  )
}
