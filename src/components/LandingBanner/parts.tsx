import Button from '../Button/button'
import clsx from 'clsx'

const datax = [
  'Yes, Let me empower Black Talents',
  'Let me in, I want to be empowered',
]

export const ButtonGroup = () => {
  return (
    <div
      className={clsx(
        'flex self-center gap-10 lg:w-[45rem]',
        'max-md:flex-col gap-6 w-full'
      )}
    >
      {datax.map((data, index) => (
        <Button
          key={index}
          style={{
            color: 'text-ibtc-black',
            background: 'bg-[#F3D6A5]',
            hoverBg: 'hover:bg-[#EAB862]',
            hoverColor: 'hover:text-white',
          }}
        >
          {data}
        </Button>
      ))}
    </div>
  )
}
