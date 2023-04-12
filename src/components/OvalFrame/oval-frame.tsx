const OvalImageFrame = ({ bgColor, src }: { bgColor: string; src: string }) => (
  <div className="relative rounded-[15%] xl:w-[13rem] xl:h-[20rem] w-[7rem] h-[18rem] flex justify-center items-center">
    <div
      className="absolute bottom-0 w-[85%] h-[100%] transform -rotate-[13deg] bg-cover bg-center bg-no-repeat rounded-[100px] bg-blend-multiply"
      style={{ backgroundImage: `url(${src});` }}
    >
      <div
        className={`bg-gradient-to-br from-${bgColor}-700 to-${bgColor}-800 absolute w-full h-full top-0 bottom-0 left-0 opacity-30 rounded-full`}
      ></div>
    </div>
  </div>
)

export default OvalImageFrame
