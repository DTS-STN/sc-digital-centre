import { render, screen } from '@testing-library/react'
import { act } from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ProfileInfo from './ProfileInfo'

expect.extend(toHaveNoViolations)

describe('ProfileInfo', () => {
  const fakeFields = [
    {
      title: 'Address',
      fields: ['123 Fake street', 'Ontario, Canada', '1A1-1A1'],
      editLink: '#',
    },
    {
      title: 'Province of residence',
      fields: ['Ontario'],
      editLink: '#',
    },
    {
      title: 'Bank Details',
      fields: ['Direct deposit', 'Scotiabank 8510231'],
      editLink: '#',
    },
    {
      title: 'Phone',
      fields: ['XXX - XXX - 1234'],
      editLink: '#',
    },
  ]
  const fakeFields2 = [
    {
      title: 'Written Language',
      fields: ['English'],
      editLink: '#',
    },
    {
      title: 'Alert me',
      fields: [
        'Sign up to get an email when important new is available',
        'Registered',
      ],
      editLink: '#',
    },
  ]

  let container
  act(() => {
    container = render(
      <ProfileInfo fields={[...fakeFields, ...fakeFields2]} />
    ).container
  })

  it('renders ProfileInfo', () => {
    const text1 = screen.getByText('Address')
    const text2 = screen.getByText('Written Language')
    expect(text1).toBeInTheDocument()
    expect(text2).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
