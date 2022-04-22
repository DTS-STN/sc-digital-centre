import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import Dashboard from '../../pages/dashboard'
expect.extend(toHaveNoViolations)
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        programCode: '4543',
        claimStatusCode: '3433',
        enmBenefitType: '1',
        messageData: 'Important message',
        messageId: '32',
        publishDate: '2021-02-21',
        netAmount: '32.21',
        nextRptDueDate: '2023-04-24',
        benefitCode: '30320',
        benefitType: 'Beneficial',
        benefitStatus: 'Active',
        lastPaymentDate: '2021-02-21',
        finalPaymentDate: '2024-02-13',
      }),
  })
)

beforeEach(() => {
  fetch.mockClear()
})

describe('Dashboard', () => {
  jest.setTimeout(50000)
  it('renders Dashboard', () => {
    const { container } = render(<Dashboard />)
    expect(container).toMatchSnapshot()
  })
  it('has no a11y violations', async () => {
    const { container } = render(<Dashboard />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
