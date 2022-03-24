import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PendingBenefitDetails from './PendingBenefitDetails'
import { axe } from 'jest-axe'

describe('PendingBenefitDetails Tests', () => {
  const testBenefitObject = {
    benefitType: 'CPP',
    benefitName: 'Canada Pension Plan',
    status: 'Active',
    statusDescription:
      'Your application is pending, we will notify you with decision',
    applicationDate: 'July 1, 2021',
    estimatedReviewCompletionDate: 'July 31, 2021',
    applicationType: 'Canada Pension Plan',
    applicationStatus: 'Application Submitted',
    applicationDescription: 'Online application received',
    nextPaymentAmount: 734.34,
    nextPaymentDate: 'September 30, 2021',
    lastPaymentDate: 'August 30, 2021',
    pensionStartDate: 'August 1, 2021',
    payeeFullName: 'John Smith Doe',
    payeeAddress: '', // 123 - 00 Fake Street, Ottawa, On A1A-1A1
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
    pendingBenefits: 'Retirement pension',
  }

  it('renders the details section of a Pending Benefit', () => {
    render(<PendingBenefitDetails benefit={testBenefitObject} />)
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <PendingBenefitDetails benefit={testBenefitObject} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
