import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const random = <T extends { length: number }>(item: T) =>
  Math.floor(Math.random() * item.length)

export function getSrcSets(constraints: string) {
  const meters = [256, 512, 768, 1024, 1280]
  constraints = constraints + ' '
  let newconstraints = constraints.repeat(5).trim().split(' ')

  newconstraints = newconstraints.map((constraint, index) => {
    constraint = constraint.replace(/w_auto/i, 'w_' + meters[index])
    return constraint + ' ' + meters[index] + 'w'
  })

  return newconstraints.join(', ')
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
