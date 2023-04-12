import Image from 'next/image'
import OvalImageFrame from '../OvalFrame/oval-frame'

const Frame = () => {
  return (
    <div className="flex items-baseline xl:w-[40rem] w-[20rem] h-[16rem] absolute bottom-0 xl:right-12 right-1">
      <div className="relative -bottom-10">
        <OvalImageFrame
          bgColor="green"
          src="https://res.cloudinary.com/dfliypjzt/image/upload/v1681297044/gallery/ogb1_kxukql.png"
        />
      </div>
      <div className="relative bottom-10">
        <OvalImageFrame
          bgColor="red"
          src="https://res.cloudinary.com/dfliypjzt/image/upload/v1681297044/gallery/thegangshit_bqixgy.png"
        />
      </div>
      <OvalImageFrame
        bgColor="yellow"
        src="https://res.cloudinary.com/dfliypjzt/image/upload/v1681297043/gallery/meku_d8ruqd.png"
      />
    </div>
  )
}

export default Frame
