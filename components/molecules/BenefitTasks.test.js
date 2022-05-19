import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import BenefitTasks from './BenefitTasks'

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => (
    <children.type {...children.props} href={href} />
  ),
}))

jest.mock(
  'next/image',
  () =>
    function Image({ imageSrc, alt }) {
      return <img src={imageSrc} alt={alt} />
    }
)

expect.extend(toHaveNoViolations)

describe('BenefitTask', () => {
  it('renders BenefitTask', () => {
    render(
      <BenefitTasks
        locale="en"
        tasks={[
          {
            task: 'allPaymentsTask',
            taskIcon: '/images/dashboard/oas-payment-icon.svg',
            taskLink: '/dashboard',
          },
          {
            task: 'statusUpdateTask',
            taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
            taskLink: '/dashboard',
          },
        ]}
      />
    )
    const task1Text = screen.getByText('View all payments')
    const task2Text = screen.getByText('View my status and messages')

    expect(task1Text).toBeInTheDocument()
    expect(task2Text).toBeInTheDocument()
  })

  it('renders custom provided header', () => {
    render(
      <BenefitTasks
        tasks={[
          {
            task: 'allPaymentsTask',
            taskIcon: '/images/dashboard/oas-payment-icon.svg',
            taskLink: '/dashboard',
          },
          {
            task: 'statusUpdateTask',
            taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
            taskLink: '/dashboard',
          },
        ]}
        locale="en"
        header="my custom header"
      />
    )
    const header = screen.getByText('my custom header')
    expect(header).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <BenefitTasks
        locale="en"
        tasks={[
          {
            task: 'allPaymentsTask',
            taskIcon: '/images/dashboard/oas-payment-icon.svg',
            taskLink: '/dashboard',
          },
          {
            task: 'statusUpdateTask',
            taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
            taskLink: '/dashboard',
          },
        ]}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
