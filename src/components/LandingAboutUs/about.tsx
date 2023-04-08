import * as React from 'react'
import Button from '../Button/button'

const AboutUs = () => {
  return (
    <div className="pt-[4rem]">
      <Button
        style={{
          color: 'text-ibtc-blue-dark',
          background: 'bg-ibtc-blue-light',
        }}
      >
        Join Now
      </Button>
      <div className="flex">
        <p className="header">
          A community of tech enthusiasts based in the heart of Ibadan, Nigeria.
        </p>
        <div className="gap-[3rem] flex flex-col">
          <p className="text">
            We are a diverse group of professionals, students, entrepreneurs,
            and hobbyists who share a common passion for all things tech.
          </p>

          <p className="text">
            Our mission is to create a platform where individuals can come
            together to learn, share knowledge, and collaborate on projects that
            have the potential to make a significant impact in our community and
            beyond. We believe that technology has the power to solve some of
            the world's most pressing challenges, and we are committed to
            leveraging our skills and expertise to create positive change.
          </p>
          <Button
            style={{
              background: 'bg-ibtc-blue',
              color: 'text-white',
            }}
          >
            Join Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
