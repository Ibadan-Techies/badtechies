import Image from 'next/image'

export const LongImage = ({ src }: { src: string }) => (
  <div className="relative w-[23rem] h-full">
    <Image
      src={src}
      fill
      alt=""
      className="object-cover object-center rounded-[10px]"
    />
  </div>
)

export const ShortImage = ({ src }: { src: string }) => (
  <div className="relative flex flex-col w-[31rem] h-1/2">
    <Image
      src={src}
      fill
      alt=""
      className="object-cover object-center rounded-[10px]"
    />
  </div>
)
