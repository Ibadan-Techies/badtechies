import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './button'
import '@testing-library/jest-dom'

describe('multi-purpose button', () => {
  it('should be a button by default', () => {
    const color = 'text-white'
    const background = 'bg-green'
    render(
      <Button
        children="Hi"
        style={{
          color,
          background,
        }}
      />
    )

    expect(screen.getByText('Hi')).toBeInTheDocument()
    expect(screen.getByText('Hi')).toHaveClass(color)
    expect(screen.getByText('Hi')).toHaveClass(background)
  })

  it('should outline be true, border class is true and background is false', () => {
    const color = 'text-white'
    const border = 'text-green'
    render(
      <Button
        children="Hi"
        outline
        style={{
          color,
          border,
        }}
      />
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Hi')).toHaveClass(color)
    expect(screen.getByText('Hi')).toHaveClass(border)
  })

  it('should not be a button when href is true', () => {
    const color = 'text-white'
    const border = 'text-green'
    render(
      <Button
        children="Hi"
        href="/"
        outline
        style={{
          color,
          border,
        }}
      />
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getByText('Hi')).toHaveClass(color)
    expect(screen.getByText('Hi')).toHaveClass(border)
  })
})
