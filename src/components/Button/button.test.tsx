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
        style={{
          color,
          background,
        }}
      >
        <span>Hi</span>
      </Button>
    )

    expect(screen.getByText('Hi')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass(color)
    expect(screen.getByRole('button')).toHaveClass(background)
  })

  it('should outline be true, border class is true and background is false', () => {
    const color = 'text-white'
    const border = 'text-green'
    render(
      <Button
        outline
        style={{
          color,
          border,
        }}
      >
        <span>Hi</span>
      </Button>
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass(color)
    expect(screen.getByRole('button')).toHaveClass(border)
  })

  it('should not be a button when href is true', () => {
    const color = 'text-white'
    const border = 'text-green'
    render(
      <Button
        href="/"
        outline
        style={{
          color,
          border,
        }}
      >
        <span>Hi</span>
      </Button>
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveClass(color)
    expect(screen.getByRole('link')).toHaveClass(border)
  })
})
