import OvalImageFrame from '../../OvalFrame/oval-frame'

const Frame = () => {
  return (
    <div className="flex w-fit mx-auto lg:absolute bottom-0 right-0 gap-3">
      <div className="relative top-16">
        <OvalImageFrame
          bgColor="green"
          src="https://res.cloudinary.com/dfliypjzt/image/upload/q_50,w_auto,c_scale,f_auto,fl_lossy/v1681297044/gallery/ogb1_kxukql"
        />
      </div>
      <div className="relative -top-8">
        <OvalImageFrame
          bgColor="red"
          src="https://res.cloudinary.com/dfliypjzt/image/upload/q_50,w_auto,c_scale,f_auto,fl_lossy/v1681297044/gallery/thegangshit_bqixgy"
        />
      </div>
      <div>
        <OvalImageFrame
          bgColor="yellow"
          src="https://res.cloudinary.com/dfliypjzt/image/upload/q_50,w_auto,c_scale,f_auto,fl_lossy/v1681297043/gallery/meku_d8ruqd"
        />
      </div>
    </div>
  )
}

export default Frame
