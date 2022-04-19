import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ActiveBenefitDetails from './ActiveBenefitDetails'

const activeCanadaPensionPlan = {
  benefitType: 'CPP',
  benefitName: 'Canada Pension Plan',
  status: 'Active',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  estimatedReviewCompletionDate: 'July 31, 2021',
  applicationType: 'Canada Pension Plan (CPP)',
  applicationDescription: 'Online application received',
  nextPaymentAmount: 734.34,
  nextPaymentDate: 'September 30, 2021',
  lastPaymentDate: 'August 30, 2021',
  pensionStartDate: 'August 1, 2021',
  payeeFullName: 'John Smith Doe',
  payeeAddress: '',
  payeePhoneNumber: '1-613-555-5455',
  accountNumber: 'XXXX-123',
  institutionNumber: '002',
  institutionName: 'Scotiabank',
  payerName: 'Government of Canada',
  paymentDepositDate: 'August 30, 2021',
  paymentStatus: 'Issued',
  paymentType: 'Direct Deposit',
  additionalInformation:
    'We will notify you as soon as we have process your application.',
  applicationStatus: 'Active',
  pendingBenefits: 'Retirement pension',
  lastUpdates: [
    {
      label: 'Documents reviewed',
      description: 'September 8, 2021',
    },
    {
      label: 'Documents uploaded',
      description: 'September 6, 2021',
    },
    {
      label: 'Documents requested',
      description: 'September 5, 2021',
    },
  ],
}

expect.extend(toHaveNoViolations)

describe('ActiveBenefitDetails', () => {
  it('Renders ActiveBenefitDetails', () => {
    render(
      <ActiveBenefitDetails benefit={activeCanadaPensionPlan} locale={'en'} />
    )
    const titleText = screen.getByText('Account details')
    const addressTitle = screen.getByText('Address')
    const paymentDetailsTitle = screen.getByText('Payment details')
    const payeePhoneNumber = screen.getByText('1-613-555-5455')

    expect(titleText).toBeInTheDocument()
    expect(addressTitle).toBeInTheDocument()
    expect(paymentDetailsTitle).toBeInTheDocument()
    expect(payeePhoneNumber).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <ActiveBenefitDetails benefit={activeCanadaPensionPlan} locale={'en'} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
