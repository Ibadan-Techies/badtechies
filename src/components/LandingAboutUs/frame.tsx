import Image from 'next/image'

const Frame = () => {
  return (
    <div className="flex items-baseline">
      <div className="relative w-[12.5rem] h-[13rem] rounded-[5rem] z-40 left-4">
        <Image fill src={'/abOval1.jpg'} alt="" className="rounded-tr-[5rem]" />
      </div>
      <div className="relative w-[12.5rem] h-[18.5rem]">
        <Image fill src={'/abOval3.jpg'} alt="" />
      </div>
      <div className="relative w-[12.5rem] h-[15rem]">
        <Image fill src={'/abOval2.png'} alt="" />
      </div>
    </div>
  )
}

export default Frame
