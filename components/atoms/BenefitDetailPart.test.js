import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import BenefitDetailPart from './BenefitDetailPart'

expect.extend(toHaveNoViolations)

jest.mock('next/link', () => {
  return ({ children }) => {
    return children
  }
})

describe('BenefitDetailPart', () => {
  const { container } = render(
    <BenefitDetailPart
      id="this_id"
      title="detail title"
      editLink="canada.ca/editlink"
    />
  )
  it('renders BenefitDetailPart', () => {
    const element = screen.getByText('detail title')
    expect(element).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
