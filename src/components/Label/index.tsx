import * as React from 'react'
import clsx from 'clsx'

type TString = `${string}-${string}`
type TButtonProps = {
  style: {
    color: TString
    background?: TString
    height: TString
  }
}

const Label = ({ children, style }: React.PropsWithChildren<TButtonProps>) => {
  const buttonClass = clsx(
    // Base style
    `rounded ${style.height} py-3.5 px-5 text-sm/[18.2px] flex items-center justify-around`
  )

  return <span className={buttonClass}>{children}</span>
}

export default Label
