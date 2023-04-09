import * as React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type TString = `${string}-${string}`
type TButtonProps<T = undefined | boolean> = {
  href?: string
  outline?: T
  label?: boolean
  style: {
    color: TString
    border?: T extends true ? TString : never
    background?: T extends boolean ? never : TString
    hoverColor?: `hover:${string}-${string}`
    hoverBg?: `hover:${string}-${string}`
  }
  type?: 'button' | 'submit'
}

type RequiredBorder<T> = T extends true
  ? {
      style: {
        border: TString
      }
    }
  : {}

type TButtonPropsWithRequiredBorder<T> = TButtonProps<T> & RequiredBorder<T>

const Button = <T extends undefined | boolean>({
  href,
  outline = undefined,
  children,
  label,
  style,
  type = 'button',
}: React.PropsWithChildren<TButtonPropsWithRequiredBorder<T>>) => {
  const buttonClass = clsx(
    // Base style
    `rounded py-3.5 px-5 flex items-center justify-around ${style.hoverBg} ${style.hoverColor}`,
    {
      // Styles for Outline
      [`border-solid border ${style.color} ${style.border}`]: outline,
      // Styles for Bold
      [`border-0 ${style.background} ${style.color}`]: !outline,
      // Styles for Label
      ['text-lg/[18px]']: !label,
      ['text-[13px]/[18.2px]']: label,
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
