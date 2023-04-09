import Button from '../Button/button'

const Main = () => (
  <div className="flex gap-16">
    <p className="header text-ibtc-black">
      A community of tech enthusiasts based in the heart of Ibadan, Nigeria.
    </p>
    <div className="gap-[3rem] flex flex-col text-[#4F4F4F]">
      <p className="text leading-[22.4px]">
        We are a diverse group of professionals, students, entrepreneurs, and
        hobbyists who share a common passion for all things tech.
      </p>

      <p className="text leading-[22.4px]">
        Our mission is to create a platform where individuals can come together
        to learn, share knowledge, and collaborate on projects that have the
        potential to make a significant impact in our community and beyond. We
        believe that technology has the power to solve some of the world's most
        pressing challenges, and we are committed to leveraging our skills and
        expertise to create positive change.
      </p>
      <span>
        <Button
          style={{
            background: 'bg-ibtc-blue',
            color: 'text-white',
          }}
        >
          Join Now
        </Button>
      </span>
    </div>
  </div>
)

export default Main
