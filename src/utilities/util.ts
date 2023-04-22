export const random = <T extends { length: number }>(item: T) =>
  Math.floor(Math.random() * item.length)
