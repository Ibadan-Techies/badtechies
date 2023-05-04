import Image from 'next/image'

const OvalImageFrame = ({ bgColor, src }: { bgColor: string; src: string }) => (
  <div className="relative rounded-[15%] xl:w-[10rem] xl:h-[20rem] w-[7rem] h-[18rem] flex justify-center items-center transform -rotate-[13deg]">
    <div className="absolute bottom-0 w-[95%] h-[100%] bg-cover bg-center bg-no-repeat rounded-[100px] bg-blend-multiply">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover object-center rounded-[inherit]"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
    <div
      className={`bg-gradient-to-br from-${bgColor}-700 to-${bgColor}-800 absolute w-full h-full top-0 bottom-0 left-0 opacity-80 rounded-[inherit]`}
    ></div>
  </div>
)

export default OvalImageFrame
