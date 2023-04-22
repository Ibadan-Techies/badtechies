import Image from 'next/image'
import OvalImageFrame from '../OvalFrame/oval-frame'

const Frame = () => {
  return (
    <div className="flex items-baseline xl:w-[40rem] lg:w-[20rem] lg:h-[16rem] lg:m-0 my-10 lg:absolute lg:bottom-0 xl:right-12 lg:right-1 w-fit gap-3 self-center">
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
