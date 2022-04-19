import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import BenefitCardHeaderInactive from './BenefitCardHeaderInactive'

const inactiveCanadaPensionPlanCPPD = {
  benefitType: 'CPPD',
  benefitName: 'Canada Pension Plan Disability',
  status: 'inactive',
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
  applicationStatus: 'inactive',
  pendingBenefits: 'Retirement pension',
  benefitStatusProgress: 'Complete',
}

expect.extend(toHaveNoViolations)

describe('BenefitCardHeaderInactive', () => {
  it('Renders BenefitCardHeaderInactive CPPD', () => {
    render(
      <BenefitCardHeaderInactive
        benefit={inactiveCanadaPensionPlanCPPD}
        locale={'en'}
      />
    )
    const titleText = screen.getByText('Your past CPPD claim overview')
    expect(titleText).toBeInTheDocument()
    const titleTextDisability = screen.queryByText(
      'Canada Pension Plan Disability'
    )
    expect(titleTextDisability).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <BenefitCardHeaderInactive
        benefit={inactiveCanadaPensionPlanCPPD}
        locale={'en'}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
