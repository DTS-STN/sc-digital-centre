import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BenefitCardHeaderPending from './BenefitCardHeaderPending'
import { axe, toHaveNoViolations } from 'jest-axe'

const pendingCPP = {
  benefitType: 'CPP',
  benefitName: 'Canada Pension Plan',
  status: 'Pending',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  estimatedDateOfDecision: 'July 31, 2021',
  applicationType: 'Canada Pension Plan (CPP)',
  applicationDescription: 'Online application received',
  nextPaymentAmount: 735.34,
  nextPaymentDate: 'September 30, 2021',
  pensionStartDate: 'August 1, 2021',
  payeeFullName: 'John Smith Doe',
  payeeAddress: '123 - 00 Fake Street, Ottawa, On A1A-1A1',
  accountNumber: 'XXXX-123',
  institutionNumber: '002',
  payerName: 'Government of Canada',
  paymentDepositDate: 'August 30, 2021',
  paymentStatus: 'Issued',
  paymentType: 'Direct Deposit',
  additionalInformation:
    'We will notify you as soon as we have process your application.',

  applicationStatus: 'Application Submitted',
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

describe('BenefitCardHeaderPending Tests', () => {
  it('renders the Header of a Pending Benefit', () => {
    render(<BenefitCardHeaderPending benefit={pendingCPP} locale={'en'} />)
    const titleText = screen.getByText('Canada Pension Plan')
    const submittedOn = screen.getByText('July 1, 2021')
    const applicationStatus = screen.getByText('Application Submitted')
    expect(titleText).toBeInTheDocument()
    expect(applicationStatus).toBeInTheDocument()
    expect(submittedOn).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <BenefitCardHeaderPending benefit={pendingCPP} locale={'en'} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
