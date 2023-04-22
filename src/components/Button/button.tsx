import * as React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type TString = `${string}-${string}`

interface TStyleProps {
  color: TString
  hoverColor?: `hover:${string}-${string}`
  hoverBg?: `hover:${string}-${string}`
  fontSize?: TString
}

interface WithBorder extends TStyleProps {
  border: TString
  background?: never
}

interface WithOutBorder extends TStyleProps {
  border?: never
  background?: TString
}
type Props =
  | {
      outline: true
      href?: string
      label?: boolean
      type?: 'button' | 'submit'
      style: WithBorder
    }
  | {
      outline?: never | false
      href?: string
      label?: boolean
      type?: 'button' | 'submit'
      style: WithOutBorder
    }

const Button = ({
  href,
  outline = undefined,
  children,
  label,
  style,
  type = 'button',
}: React.PropsWithChildren<Props>) => {
  const buttonClass = clsx(
    // Base style
    `lg:py-3.5 lg:px-5 py-7 w-full px-6 rounded font-medium flex items-center justify-around ${
      style.hoverBg || ''
    } ${style.hoverColor || ''}`,
    {
      // Styles for Outline
      [`border-solid border ${style.color || ''} ${style.border || ''}`]:
        outline,
      // Styles for Bold
      [`border-0 ${style.background || ''} ${style.color || ''}`]: !outline,
      // Styles for Label
      [style.fontSize || 'text-lg/[18px]']: !label,
      [style.fontSize || 'text-[13px]/[18.2px] py-[10px] px-[13.5px]']: label,
    }
  )

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClass} type={type}>
      {children}
    </button>
  )
}

export default Button
