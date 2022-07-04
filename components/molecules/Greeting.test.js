import { render, screen } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import Greeting from './Greeting'

expect.extend(toHaveNoViolations)

//mock getGreeting
const getGreeting = jest.fn()
getGreeting.mockReturnValue('Good afternoon, ')

describe('Greeting', () => {
  const { container } = render(
    <Greeting locale="en" greeting={getGreeting()} name="Mary" />
  )

  it('renders greeting', () => {
    const timedGreeting = screen.getByText('Good afternoon, Mary')
    expect(timedGreeting).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
