import Image from 'next/image'

export const Logo = ({ width, height }: { width: string; height: string }) => {
  return (
    <div className={`relative ${width} ${height}`}>
      <Image src="/ibtc.png" alt="Picture of the author" fill />
    </div>
  )
}
