import { render, screen } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import Greeting from './Greeting'
import * as utils from '../../lib/Utils'

expect.extend(toHaveNoViolations)

//mock getGreeting
utils.getGreeting = jest.fn().mockReturnValue('Good afternoon, ')

describe('Greeting', () => {
  const { container } = render(
    <Greeting
      greeting={utils.getGreeting()}
      name="Mary"
      myBenefitsAndServices="My benefits and services dashboard"
      alert_icon_alt_text="alt"
      alert_icon_id="id"
      message_heading="heading"
      message_body="body"
    />
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
