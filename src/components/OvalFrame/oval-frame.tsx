import { getSrcSets } from '@/utilities/util';

const OvalImageFrame = ({ bgColor, src }: { bgColor: string; src: string }) => (
  <div className="relative rounded-[15%] xl:w-[10rem] xl:h-[20rem] w-[7rem] h-[18rem] flex justify-center items-center transform -rotate-[13deg]">
    <div className="absolute bottom-0 w-[95%] h-[100%] bg-cover bg-center bg-no-repeat rounded-[100px] bg-blend-multiply">
      <img
        src={src}
        alt=""
        className="object-cover object-center h-full w-full rounded-[inherit]"
        sizes="(min-width: 30em) 28em, 100vw"
        srcSet= {getSrcSets(src)}
      />
    </div>
    <div
      className={`bg-gradient-to-br from-${bgColor}-700 to-${bgColor}-800 absolute w-full h-full top-0 bottom-0 left-0 opacity-80 rounded-[inherit]`}
    ></div>
  </div>
)

export default OvalImageFrame
