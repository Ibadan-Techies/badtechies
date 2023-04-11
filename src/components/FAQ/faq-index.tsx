import FAQ from './faq'

const Comp = () => (
  <div className="_body bg-ibtc-black py-[70px]">
    <div className="_wrapper flex text-white gap-[80px] items-center flex-col">
      <div className="flex flex-col items-center rounded-[4px] gap-8">
        <header className="_header">Frequently Asked Questions</header>
        <div className="bg-ibtc-blue w-[140px] h-[9px]"></div>
      </div>
      <FAQ />
    </div>
  </div>
)

export default Comp
