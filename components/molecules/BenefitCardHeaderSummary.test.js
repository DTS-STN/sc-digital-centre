import { render, screen } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import BenefitCardHeaderSummary from './BenefitCardHeaderSummary'

expect.extend(toHaveNoViolations)

describe('BenefitCardHeaderSummary', () => {
  const { container } = render(
    <BenefitCardHeaderSummary
      key={1}
      title={'Summary Title'}
      value="$32.50"
      link={'/'}
      linkText={'Link Text'}
    />
  )

  it('renders', () => {
    const title = screen.getByText('Summary Title')
    const value = screen.getByText('$32.50')
    const link = screen.getByText('Link Text')
    expect(title).toBeInTheDocument()
    expect(value).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
