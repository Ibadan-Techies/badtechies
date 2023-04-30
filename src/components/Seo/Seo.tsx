import { NextSeo, NextSeoProps } from 'next-seo'

type SeoProps = {
  title: string
  description: string
  opengraph?: NextSeoProps['openGraph']
}

export default function Seo({ title, description, opengraph }: SeoProps) {
  return (
    <NextSeo title={title} description={description} openGraph={opengraph} />
  )
}
