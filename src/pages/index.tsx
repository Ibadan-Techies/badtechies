import { Banner as LandingBanner } from '@/components/Layout/LandingBanner'
import {default as AboutSection} from '@/components/Layout/LandingAboutUs/about'
import Events from '@/components/LandingEvent/event'
import Gallery from '@/components/Gallery/gallery'
import Unique from '@/components/LandingUnique/unique'
import FAQ from '@/components/FAQ/faq-index'
import SubscribeNewsLetter from '@/components/SubscribeNewsletter/subscribe-newsletter'
import Seo from '@/components/Seo'

import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <script
        key="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DATA) }}
      />
      <script
        key="general-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(GENERAL_DATA) }}
      />
    </Head>
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
    </>
  )
}

// SEO
const DATA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the requirements to attend Ibadan Techies In-person events?",
      "acceptedAnswer": {
        "@type": "Answer",
         "text": "There are no restriction to join any of our IRL events except that you signed up for the particular event. The club objective is to continually make this formidable community open and accessible."
        }
    },
    {
      "@type": "Question",
      "name": "Is Ibadan Techies only for developers?",
      "acceptedAnswer": {
      "@type": "Answer",
        "text": "The club is not limited to specifics tracks in Tech. We have the Design Sub-Community, Engineering Sub-community, Data Sub-community and Tech Creatives."
      }
    },
    {
      "@type": "Question",
      "name": "Is the community only for techies who reside in Ibadan?",
      "acceptedAnswer": {
      "@type": "Answer",
        "text": "we are open to everyone. Our audiences are Black tech talents in Africa, and not limiting to Ibadan. Ibadan, only applies as in the brand and name."
      }
    }
  ]
}



/**
 * TODO!
 * Write an API that returns IBTCLOGO for every get request to 
 * "logo": "https://www.ibadantc.org/logo.png" // this line should be in general_data when the api is created,
 */
const GENERAL_DATA =  {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Ibadan Techies",
  "url": "https://www.ibadantc.org",
  "logo":"https://www.ibadantc.org/api/logo",
  "description": "Ibadan Techies is a non profit and playground for tech talents in Africa.",
  "sameAs": [
    "https://www.linkedin.com/company/the-ibadan-techies-club/",
    "https://twitter.com/badtechys"
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "TechByChoice"
    }
  ],
  "keywords": "Ibadan tech, top nonprofit organization in Africa, techmeetups in Africa, tech meetups in Nigeria, meetups in Ibadan, besttech community in Nigeria, top tech community in Africa",
  "founder":"Kelvinsekx",
  "funder":"Ijeoma, Zakk, Mark Techson, Jason Palmer"
}
  