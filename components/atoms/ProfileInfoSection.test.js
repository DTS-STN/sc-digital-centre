import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ProfileInfoSection from './ProfileInfoSection'

expect.extend(toHaveNoViolations)

describe('ProfileInfoSection', () => {
  const fakeFields = [
    {
      title: 'test1',
      fields: ['testing'],
      moreInfoURL: '',
    },
    {
      title: 'test2',
      fields: ['yes', 'no'],
      moreInfoURL: '',
    },
  ]

  it('renders ProfileInfoSection', () => {
    render(<ProfileInfoSection title="title" info={fakeFields} />)
    const text1 = screen.getByText('title')
    const text2 = screen.getByText('yes')
    expect(text1).toBeInTheDocument()
    expect(text2).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <ProfileInfoSection title="title" info={fakeFields} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
