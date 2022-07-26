import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import InfoSection from './InfoSection'

expect.extend(toHaveNoViolations)

describe('InfoSection', () => {
  const { container } = render(
    <InfoSection
      title="title"
      info={['info1', 'other info']}
      editLink="link"
      editText="text"
    />
  )

  it('renders ProfileInfoSection', () => {
    const text1 = screen.getByText('title')
    const text2 = screen.getByText('info1')
    expect(text1).toBeInTheDocument()
    expect(text2).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
