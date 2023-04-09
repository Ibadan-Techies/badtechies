import Image from 'next/image'

const EventCard = ({ src, topic }: { src: string; topic: string }) => {
  return (
    <div className="relative w-[19.6rem] h-[21.1875rem]">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover object-center rounded-[0.625rem]"
      />
      <div className="absolute opacity-0 hover:opacity-100 text-white bottom-0 top-0 left-0 right-0 transition ease-in-out delay-150 duration-300">
        <section className="font-semibold _bg-blur px-3 pt-5 pb-4 absolute bottom-0 w-full rounded-[0.625rem]">
          <header className="text-sm leading-[0.875rem] pb-2.5">Topic</header>
          <p className="text leading-[21.6px]">{topic}</p>
        </section>
      </div>
    </div>
  )
}

export default EventCard
