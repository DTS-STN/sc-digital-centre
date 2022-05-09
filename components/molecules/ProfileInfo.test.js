import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ProfileInfo from './ProfileInfo'

expect.extend(toHaveNoViolations)

describe('ProfileInfo', () => {
  const fakeFields = {
    title: 'Profile Information',
    info: [
      {
        title: 'Address',
        fields: ['123 Fake street', 'Ontario, Canada', '1A1-1A1'],
        moreInfoURL: '',
      },
      {
        title: 'Province of residence',
        fields: ['Ontario'],
        moreInfoURL: '',
      },
      {
        title: 'Bank Details',
        fields: ['Direct deposit', 'Scotiabank 8510231'],
        moreInfoURL: '',
      },
      {
        title: 'Phone',
        fields: ['XXX - XXX - 1234'],
        moreInfoURL: '',
      },
    ],
  }
  const fakeFields2 = {
    title: 'Preferences',
    info: [
      {
        title: 'Written Language',
        fields: ['English'],
        moreInfoURL: '',
      },
      {
        title: 'Alert me',
        fields: [
          'Sign up to get an email when important new is available',
          'Registered',
        ],
        moreInfoURL: '',
      },
    ],
  }

  it('renders ProfileInfo', () => {
    render(<ProfileInfo fields={[fakeFields, fakeFields2]} />)
    const text1 = screen.getByText('Profile Information')
    const text2 = screen.getByText('Alert me')
    expect(text1).toBeInTheDocument()
    expect(text2).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <ProfileInfo fields={[fakeFields, fakeFields2]} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
