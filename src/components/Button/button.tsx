import * as React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type TString<t extends string> = `${t}-${string}`

interface TStyleProps {
  color: TString<'text'>
  hoverColor?: `hover:${string}-${string}`
  hoverBg?: `hover:${string}-${string}`
  fontSize?: TString<'text'>
}

interface WithBorder extends TStyleProps {
  border: TString<'text'>
  background?: never
}

interface WithOutBorder extends TStyleProps {
  border?: never
  background?: TString<'bg'>
}
type Props =
  | {
      outline: true
      onClick?: (e: any) => any
      href?: string
      label?: boolean
      type?: 'button' | 'submit'
      style: WithBorder
    }
  | {
      onClick?: (e: any) => any
      outline?: never | false
      href?: string
      label?: boolean
      type?: 'button' | 'submit'
      style: WithOutBorder
    }

export default function Button({
  href,
  onClick,
  outline = undefined,
  children,
  label,
  style,
  type = 'button',
}: React.PropsWithChildren<Props>) {
  const buttonClass = clsx(
    // Base style
    `lg:py-3.5 lg:px-5 py-4 w-full h-full px-6 rounded font-medium flex items-center justify-around ${
      style.hoverBg || ''
    } ${style.hoverColor || ''}`,
    {
      // Styles for Outline
      [`border-solid border ${style.color || ''} ${style.border || ''}`]:
        outline,
      // Styles for Bold
      [`border-0 ${style.background || ''} ${style.color || ''}`]: !outline,
      // Styles for Label
      [style.fontSize || 'md:text-lg/[18px] text-base/[20px]']: !label,
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
    <button className={buttonClass} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
