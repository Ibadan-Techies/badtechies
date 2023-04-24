import { SquiggleLeft, SquiggleRight } from '@/assets/svg'
import Button from '../Button/button'

function SubscribeNewsLetter() {
  return (
    <div className="_body bg-ibtc-light-yellow relative">
      <div className="_wrapper flex flex-col items-center justify-center min-h-[25rem] gap-[4rem]">
        <div className="space-y-[1rem] lg:text-center">
          <h2 className="_header text-ibtc-black">Stay up to date with Us!</h2>
          <p className="text-ibtc-grey-2">
            Subscribe to our newsletter for latest news, projects and updates
          </p>
        </div>

        <div className="w-full items-center flex flex-col lg:flex-row justify-center lg:px-4 gap-[1.15rem] sm:max-w-[400px] lg:max-w-full">
          <input
            type="email"
            name="your-email"
            placeholder="Enter your email"
            aria-label="Enter your email"
            className="bg-transparent w-full border border-[#BDBDBD] rounded-[6px] h-[3rem] lg:h-[3.5rem] lg:max-w-[28rem] px-2 placeholder:text-[#828282] outline-4 outline-transparent outline-offset-[6px] focus:outline-ibtc-blue"
          />
          <span className="w-full lg:w-fit h-[3rem] lg:h-[3.5rem]">
            <Button
              type="button"
              style={{
                color: 'text-ibtc-grey',
                background: 'bg-ibtc-black',
              }}
            >
              Subscribe Now
            </Button>
          </span>
        </div>
      </div>
      <SquiggleLeft className="absolute left-0 bottom-0 hidden lg:block" />
      <SquiggleRight className="absolute right-0 bottom-0 hidden lg:block" />
    </div>
  )
}

export default SubscribeNewsLetter
