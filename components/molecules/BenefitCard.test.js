import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import BenefitCard from './BenefitCard'

const activeCppTasks = [
  {
    task: 'task 1',
    taskIcon: '/images/dashboard/oas-payment-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: 'task 2',
    taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: 'task 3',
    taskIcon: '/images/dashboard/oas-retirement-income-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: 'task 4',
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: 'task 5',
    taskIcon: '/images/dashboard/oas-request-for-reconsideration-icon.svg ',
    taskLink: '/dashboard',
  },
  {
    task: 'task 6',
    taskIcon: '/images/dashboard/oas-delay-receiving-pension-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: 'task 7',
    taskIcon: '/images/dashboard/oas-cpp-contributions-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: 'task 8',
    taskIcon: '/images/dashboard/oas-federal-tax-deductions-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: 'task 9',
    taskIcon: '/images/dashboard/oas-consent-icon.svg',
    taskLink: '/dashboard',
  },
]

const activeCanadaPensionPlan = {
  benefitType: 'CPP',
  benefitName: 'Canada Pension Plan',
  status: 'Active',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  estimatedDateOfDecision: 'July 31, 2021',
  applicationType: 'Canada Pension Plan (CPP)',
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
  applicationStatus: 'In payment',
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
  tasks: activeCppTasks,
}

const activeCppApi = {
  programCode: '32294',
  benefitCode: '30320',
  benefitType: 'Beneficial',
  benefitStatus: 'Active',
  lastPaymentDate: '2021-02-21',
  finalPaymentDate: '2024-02-13',
}

expect.extend(toHaveNoViolations)
describe('BenefitCard', () => {
  it('renders BenefitCard', () => {
    render(
      <BenefitCard
        locale="en"
        benefit={activeCanadaPensionPlan}
        api={activeCppApi}
      />
    )
    const benefitName = screen.getByText('Canada Pension Plan')
    const status = screen.getByText('In payment')

    expect(benefitName).toBeInTheDocument()
    expect(status).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <BenefitCard
        locale="en"
        benefit={activeCanadaPensionPlan}
        api={activeCppApi}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
