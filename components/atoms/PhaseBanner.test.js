import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import PhaseBanner from './PhaseBanner'

expect.extend(toHaveNoViolations)

describe('PhaseBanner', () => {
  it('renders PhaseBanner', () => {
    render(<PhaseBanner phase="phase" bannerText="some text" />)
    const phase = screen.getByText('phase')
    const bannerText = screen.getByText('some text')
    expect(phase).toBeInTheDocument()
    expect(bannerText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <PhaseBanner phase="phase" bannerText="test" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
