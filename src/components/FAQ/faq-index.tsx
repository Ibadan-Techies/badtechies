import FAQ from './faq'
import { Container } from '../Layout/Container'

const Comp = () => (
  <Container className="bg-ibtc-black">
    <div className="flex text-white gap-[80px] items-center flex-col">
      <div className="flex flex-col lg:items-center rounded-[4px] gap-8">
        <header className="_header" id="faq">
          Frequently Asked Questions
        </header>
        <div className="bg-ibtc-blue w-[140px] h-[9px]"></div>
      </div>
      <FAQ />
    </div>
  </Container>
)

export default Comp
