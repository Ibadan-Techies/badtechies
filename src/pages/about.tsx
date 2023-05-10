import SubscribeNewsLetter from '@/components/SubscribeNewsletter/subscribe-newsletter'
import Seo from '@/components/Seo/Seo'
import Layout from '@/components/Layout'

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
      <h1>About Us</h1>
      <SubscribeNewsLetter></SubscribeNewsLetter>
    </Layout>
  )
}
