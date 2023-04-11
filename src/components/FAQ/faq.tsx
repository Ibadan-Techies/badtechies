import { useState } from 'react'
import { ArrowDown } from '@/assets/svg'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  function handleClick(index: number) {
    return setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="text-white p-[2.8rem] flex flex-col gap-[13px] w-11/12">
      {FAQs.map((faq, index) => (
        <div className="bg-ibtc-blue rounded w-full py-[25px] px-[50px]">
          <button
            className="flex items-center justify-between w-full text-[29px] leading-[29px] font-medium text-left focus:outline-none focus:shadow-outline-gray font-semibold"
            onClick={() => handleClick(index)}
          >
            {faq.question}
            <span className="ml-2">
              <ArrowDown />
            </span>
          </button>
          {activeIndex == index && (
            <div className="mt-[25px] rounded-lg text-[18px]/[25.56px]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const FAQs = [
  {
    question:
      'Are there any requirements needed to join the Ibadan Techies Club?',
    answer:
      'Answer: “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”',
  },
  {
    question: 'Is the Ibadan Techies Club only for specific tracks in Tech?',
    answer:
      'Answer: “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”',
  },
  {
    question: 'Is the club only open to people living in Ibadan?',
    answer:
      'Answer: “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”',
  },
  {
    question: 'Can I refer someone to join the club?',
    answer:
      'Answer: “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”',
  },
]

export default FAQ
