import { useState } from 'react'
import { ArrowDown } from '@/assets/svg'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  function handleClick(index: number) {
    return setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="text-white lg:p-[2.8rem] md:p-[14px] lg:w-11/12 flex flex-col gap-[13px] w-full">
      {FAQs.map((faq, index) => (
        <section
          className="bg-ibtc-blue rounded w-full py-[25px] lg:px-[50px] px-4"
          key={index}
        >
          <button
            className="flex lg:items-center justify-between w-full lg:text-[29px] lg:leading-[29px] text-left font-semibold text-base leading-4 lg:tracking-wide"
            onClick={() => handleClick(index)}
          >
            <span>{faq.question}</span>
            <span
              className={`ml-2 max-lg:relative max-lg:top-1 duration-150 ease-in ${
                activeIndex == index ? 'transform -rotate-180' : ''
              }`}
            >
              <ArrowDown />
            </span>
          </button>
          {activeIndex == index && (
            <p className="mt-[25px] rounded-lg">{faq.answer}</p>
          )}
        </section>
      ))}
    </div>
  )
}

const FAQs = [
  {
    question:
      'Are there any requirements needed to join the Ibadan Techies Club?',
    answer:
      '"No, there are no restriction to join this community of awesomeness except being in tech. The club is targeted at pro and newbies who are finding their paths in the industry. Our programmes are broadly categorized as Virtual and In-person, if you meet this criteria you are welcome to join. However, on the verge to becoming a card carrying member it comes with some responbilities and rights. Learn more about being a Member of IBTC.”',
  },
  {
    question: 'Is the Ibadan Techies Club only for specific tracks in Tech?',
    answer:
      '"The club is not limited to specifics tracks in Tech. Presently, we have the Design Sub-Community, Engineering Sub-community, Data Sub-community and Tech Creatives. Whatever, your field you should fall into those four Sub-communities.”',
  },
  {
    question: 'Is the club only open to people living in Ibadan?',
    answer:
      "No, we are open to everyone. Our audiences are Black tech talents in Africa, and not limiting to Ibadan. Ibadan, only applies as in the brand and name. If you can't make it to our in-person events, you can always join our virtual events or get a glimpse of the events on youtube”",
  },
  {
    question: 'Can I refer someone to join the club?',
    answer:
      '“Well the answer is Yes and No. Yes that if you are not a member yet, you can invite anyone to join the events. But only members can refer someone to become a member or attend members-only events.”',
  },
]

export default FAQ
