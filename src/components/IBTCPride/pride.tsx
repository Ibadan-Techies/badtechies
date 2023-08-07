import React from 'react'
import { Container } from '../Layout/Container'

export const PrideComponent: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          We've Only Started
        </h2>
        <p className="text-gray-600 mb-6 text-lg text-center">
          Our results in 15 months of existence speak for themselves.
        </p>

        <div className="flex flex-wrap justify-between bg-white/10 rounded-lg p-8 shadow-sm">
          <Pride_Wrapper>
            <Pride_p>
              The Most Formidable Tech Community out of Oyo State for a Reason
            </Pride_p>
            <Pride_ul>
              <li>
                <Pride_b>$3000+</Pride_b> raised internationaly without any
                internal contribution or soliciting.
              </li>
              <li>
                <Pride_b>100%</Pride_b> of backers are non-nigerian and unbiased
                about our internal politics, tribe or religion.
              </li>
              <li>
                <Pride_b>8+ in-person meetups</Pride_b> held within 12 months of
                existence in a state that never had one consistent independent
                tech community.
              </li>
            </Pride_ul>
          </Pride_Wrapper>

          <Pride_Wrapper>
            <Pride_p>
              What We are Working Tirelessly to Further Improve.
            </Pride_p>
            <Pride_ul>
              <li>
                <Pride_b>30%+ females</Pride_b> are decision makers fighting for
                the interest of the gender inclusion and diversity.
              </li>
              <li>
                We are helping <Pride_b>30%+ juniors upskill</Pride_b> in the
                most fun and engaging way possible. Our goal is to eliminate the
                need for our members ever paying for a junior/intermediate
                upskill.
              </li>
              <li>
                Our dream is to host the{' '}
                <Pride_b>1st community funded conf</Pride_b> come 2024.
              </li>
            </Pride_ul>
          </Pride_Wrapper>

          <Pride_Wrapper>
            <Pride_p>Our members are at the Forefront of Ibadan Tech</Pride_p>
            <Pride_ul>
              <li>
                <Pride_b>35%+ of our members lead</Pride_b> other startup and
                communities like the 1st YC startup in Ibadan.
              </li>
              <li>
                Ours members/directors contribute{' '}
                <Pride_b>30% to the funds</Pride_b> that run this club via
                membership contribution and donations.
              </li>
            </Pride_ul>
          </Pride_Wrapper>
        </div>
      </Container>
    </div>
  )
}

const Pride_p: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <p className="p-4 border-l-8 border-ibtc-brown my-4">{children}</p>
}

const Pride_ul: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ul className="space-y-2 p-4 flex flex-col gap-4">{children}</ul>
}

const Pride_b: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <span className="text-ibtc-brown font-bold">{children}</span>
}

const Pride_Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="lg:w-[30%] max-sm:w-full w-[12rem]">{children}</div>
}
