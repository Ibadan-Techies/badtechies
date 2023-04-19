import * as React from 'react'
import Image from 'next/image'

const EventCard = ({
  details: { imgSrc, topic, date, speaker },
}: {
  details: { imgSrc: string; topic: string; date: string; speaker: string }
}) => {
  return (
    <div className="relative w-[19.6rem] h-[21.1875rem]">
      <Image
        src={imgSrc}
        alt=""
        fill
        className="object-cover object-center rounded-[0.625rem]"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <div className="absolute opacity-0 hover:opacity-100 text-white bottom-0 top-0 left-0 right-0 transition ease-in-out delay-150 duration-300">
        <section className="font-semibold h-full rounded-[0.625rem] flex flex-col justify-between">
          <SubSection type="header" head={date} body={speaker}></SubSection>
          <SubSection type="p" head={'Topic'} body={topic}></SubSection>
        </section>
      </div>
    </div>
  )
}

function SubSection({
  type,
  head,
  body,
}: {
  type: string
  head: string
  body: string
}) {
  return React.createElement(
    type,
    {
      className:
        'flex flex-col w-full _bg-blur px-3 pt-5 pb-4 rounded-[inherit]',
    },
    React.createElement(
      'span',
      { className: 'text-sm leading-[0.875rem] pb-2.5' },
      head
    ),
    React.createElement('span', { className: 'text leading-[21.6px]' }, body)
  )
}

export default EventCard
