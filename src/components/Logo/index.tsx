import Image from 'next/image'

export const Logo = ({ width, height }: { width: string; height: string }) => {
  return (
    <div className={`relative ${width} ${height}`}>
      <Image
        src="/ibtc.png"
        alt="Picture of the author"
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
  )
}
