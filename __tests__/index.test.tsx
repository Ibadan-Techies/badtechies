import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders', () => {
    render(<Home />)
    const landingpage = screen.getByText(
      'Talents in Africa do not have an equal ground in tech'
    )
    expect(landingpage).toBeInTheDocument()
  })
})
