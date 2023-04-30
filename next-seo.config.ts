import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | Ibadan Techies Club',
  defaultTitle: 'Ibadan Techies Club',
  canonical: 'https://ibadantc.org',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://ibadantc.org',
    siteName: 'Ibadan Techies Club',
    images: [
      {
        url: 'https://ibadantc.org/ibtc-share-image.jpg',
        alt: 'Ibadan Techies Club',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    site: '@badtechys',
    handle: '@badtechys',
    cardType: 'summary_large_image',
  },
}

export default config
