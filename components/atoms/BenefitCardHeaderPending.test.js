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
  benefitStatusProgress: 'In Progress',
}

const pendingCPPD = {
  benefitType: 'CPPD',
  benefitName: 'Canada Pension Plan Disability',
  status: 'Pending',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 11, 2021',
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
  benefitStatusProgress: 'In Progress',
}

describe('BenefitCardHeaderPending Tests', () => {
  it('renders the Header of a Pending Benefit', () => {
    render(<BenefitCardHeaderPending benefit={pendingCPP} locale={'en'} />)
    const titleText = screen.getByText('Canada Pension Plan')
    const applicationStatusProgress = screen.getByText('In Progress')
    const applicationStatus = screen.getByText('Application Submitted')
    expect(titleText).toBeInTheDocument()
    expect(applicationStatus).toBeInTheDocument()
    expect(applicationStatusProgress).toBeInTheDocument()
  })

  it('renders the Header of a CPPD', () => {
    render(<BenefitCardHeaderPending benefit={pendingCPPD} locale={'en'} />)
    const titleTextCPPD = screen.getByText('Canada Pension Plan')
    expect(titleTextCPPD).toBeInTheDocument()
    const titleTextDisability = screen.queryByText(
      'Canada Pension Plan Disability'
    )
    expect(titleTextDisability).toBeNull()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <BenefitCardHeaderPending benefit={pendingCPP} locale={'en'} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
