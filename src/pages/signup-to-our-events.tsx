import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import FAQ from '@/components/FAQ/faq-index'
import { SignUpForm } from '@/components/SignUpToEventsForm/signUpForm'

export default function SIGNUP_TO_OUR_EVENTS() {
  return (
    <Layout
      Seo={
        <Seo
          title="Signup to our events - Badtechies"
          description="A community of tech enthusiasts. We are a non-profit. Our vision is to amplify tech talents from Africa and the work they're doing. we do this by supporting, educating & bringing us together."
        />
      }
    >
      <div className="grid md:grid-rows-1 max-md:items-center md:grid-cols-[2fr_1fr] gap-12 md:gap-6 text-ibtc-black/90 py-12 px-4">
        <div className="max-md:order-2">
          <div className="md:w-[70%] mx-auto">
            <SignUpForm />
          </div>
        </div>
        <div className="text-ibtc-black/60 max-md:order-1">
          <div className="w-[80%] md:mx-auto space-y-8 md:space-y-6">
            <p className="text-3xl font-bold tracking-tighter">
              Let's make an IBTC event personal to you!
            </p>
            <p className="text-2xl font-semibold tracking-tight">
              <span className=" text-ibtc-blue">{`No Gree for Anybody 😎.`}</span>{' '}
              Choose your event.
            </p>
            <div className="space-y-4">
              <div className="rounded-md border border-ibtc-black/60 py-6 px-8 flex justify-between">
                <span className="font-semibold text-ibtc-black">IBTC Meet</span>
                <span className="">
                  <span className="block">Feb 24, 2024</span>
                  <span>UI hotels, Ibadan*</span>
                </span>
              </div>
              <div className="rounded-md border border-ibtc-black py-6 px-8 flex justify-between">
                <span className="font-semibold text-ibtc-black">
                  One-no-One with Tori
                </span>
                <span className="">
                  <span className="block">April 13, 2024</span>
                  <span>Virtual*</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </Layout>
  )
}
