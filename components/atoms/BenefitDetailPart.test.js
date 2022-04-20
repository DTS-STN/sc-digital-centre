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
  it('renders BenefitDetailPart', () => {
    render(<BenefitDetailPart title="my_detail" />)
    const element = screen.getByText('my_detail')
    expect(element).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <BenefitDetailPart id="this_id" title="detail title" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
