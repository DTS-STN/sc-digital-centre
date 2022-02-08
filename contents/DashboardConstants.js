import en from '../locales/en'

const t = en
const SUBMITTED_OAS = {
  benefitType: 'OAS',
  benefitName: 'Old Age Security',
  status: 'Pending',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  estimatedReviewCompletionDate: 'July 31, 2021',
  applicationType: 'Old Age Security Benefits (OAS)',
  applicationStatus: 'Application Submitted',
  applicationDescription: 'Electronic application received',
  withdrawalRequest: 'Pending',
  withdrawalStatus: 'Not Approved',
  withdrawalRequestDescription: 'In Progress',
  applicationWithdrawn: 'No',
  additionalInformation:
    'We will notify you as soon as your application withdrawel request is approved. Additionally, we may ask you if we need more information about your application withdrawn request.',
  activeBenefits: '',
  pendingBenefits: 'Old age security pension',
  lastUpdates: [
    {
      label: 'Documents reviewedrequested',
      description: 'July 5, 2021',
    },
    {
      label: 'Documents uploaded',
      description: 'July 2, 2021',
    },
    {
      label: 'Documents requested',
      description: 'July 1, 2021',
    },
  ],
}

const ACTIVE_OAS = {
  benefitType: 'OAS',
  benefitName: 'Old Age Security',
  status: 'Active',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  estimatedReviewCompletionDate: 'July 31, 2021',
  applicationStatus: 'Active',
  applicationDescription: 'Online application received',
  nextPaymentAmount: 691.45,
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
  pendingBenefits: 'Old age security pension',
  lastUpdates: [
    {
      label: 'Documents reviewed',
      description: 'September 8, 2021',
    },
    {
      label: 'Documents uploaded',
      description: 'July 2, 2021',
    },
    {
      label: 'Documents requested',
      description: 'July 1, 2021',
    },
  ],
}

const SUBMITTED_CPP = {
  benefitType: 'CPP',
  benefitName: 'Canada Pension Plan',
  status: 'Pending',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  estimatedReviewCompletionDate: 'July 31, 2021',
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

const ACTIVE_CPP = {
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

const SUBMITTED_CPP_TASKS = [
  {
    task: t.allPaymentsTask,
    taskIcon: '/images/dashboard/oas-payment-icon.svg',
    taskLink: t.allPaymentsTaskLink,
  },
  {
    task: t.statusUpdateTask,
    taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
    taskLink: t.statusUpdateTaskLink,
  },
  {
    task: t.retirementIncomeTask,
    taskIcon: '/images/dashboard/oas-retirement-income-icon.svg',
    taskLink: t.retirementIncomeTaskLink,
  },
  {
    task: t.taxSlipTask,
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: t.taxSlipTaskLink,
  },
  {
    task: t.reconsiderationTask,
    taskIcon: '/images/dashboard/oas-request-for-reconsideration-icon.svg ',
    taskLink: t.reconsiderationLink,
  },
  {
    task: t.delayOasPensionTask,
    taskIcon: '/images/dashboard/oas-delay-receiving-pension-icon.svg',
    taskLink: t.delayOasPensionTaskLink,
  },
  {
    task: t.cppContributionTask,
    taskIcon: '/images/dashboard/oas-cpp-contributions-icon.svg',
    taskLink: t.cppContributionTaskLink,
  },
  {
    task: t.taxDeductionsTask,
    taskIcon: '/images/dashboard/oas-federal-tax-deductions-icon.svg',
    taskLink: t.taxDeductionsTaskLink,
  },
  {
    task: t.giveConsentTask,
    taskIcon: '/images/dashboard/oas-consent-icon.svg',
    taskLink: '/dashboard',
  },
]

const ACTIVE_CPP_TASKS = [
  {
    task: t.allPaymentsTask,
    taskIcon: '/images/dashboard/oas-payment-icon.svg',
    taskLink: t.allPaymentsTaskLink,
  },
  {
    task: t.statusUpdateTask,
    taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
    taskLink: t.statusUpdateTaskLink,
  },
  {
    task: t.retirementIncomeTask,
    taskIcon: '/images/dashboard/oas-retirement-income-icon.svg',
    taskLink: t.retirementIncomeTaskLink,
  },
  {
    task: t.taxSlipTask,
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: t.taxSlipTaskLink,
  },
  {
    task: t.reconsiderationTask,
    taskIcon: '/images/dashboard/oas-request-for-reconsideration-icon.svg ',
    taskLink: t.reconsiderationLink,
  },
  {
    task: t.delayOasPensionTask,
    taskIcon: '/images/dashboard/oas-delay-receiving-pension-icon.svg',
    taskLink: t.delayOasPensionTaskLink,
  },
  {
    task: t.cppContributionTask,
    taskIcon: '/images/dashboard/oas-cpp-contributions-icon.svg',
    taskLink: t.cppContributionTaskLink,
  },
  {
    task: t.taxDeductionsTask,
    taskIcon: '/images/dashboard/oas-federal-tax-deductions-icon.svg',
    taskLink: t.taxDeductionsTaskLink,
  },
  {
    task: t.giveConsentTask,
    taskIcon: '/images/dashboard/oas-consent-icon.svg',
    taskLink: t.giveConsentTaskLink,
  },
]

const SUBMITTED_OAS_TASKS = [
  {
    task: t.allPaymentsTask,
    taskIcon: '/images/dashboard/oas-payment-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.statusUpdateTask,
    taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.retirementIncomeTask,
    taskIcon: '/images/dashboard/oas-retirement-income-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.cppContributionTask,
    taskIcon: '/images/dashboard/oas-cpp-contributions-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.taxDeductionsTask,
    taskIcon: '/images/dashboard/oas-federal-tax-deductions-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.delayOasPensionTask,
    taskIcon: '/images/dashboard/oas-delay-receiving-pension-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.giveConsentTask,
    taskIcon: '/images/dashboard/oas-consent-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.taxSlipTask,
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.taxSlipMailingTask,
    taskIcon: '/images/dashboard/oas-tax-slip-mailing-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.reconsiderationTask,
    taskIcon: '/images/dashboard/oas-request-for-reconsideration-icon.svg ',
    taskLink: '/dashboard',
  },
]

const ACTIVE_OAS_TASKS = [
  {
    task: t.allPaymentsTask,
    taskIcon: '/images/dashboard/oas-payment-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.statusUpdateTask,
    taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.taxSlipTask,
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.taxSlipMailingTask,
    taskIcon: '/images/dashboard/oas-tax-slip-mailing-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.taxDeductionsTask,
    taskIcon: '/images/dashboard/oas-federal-tax-deductions-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.delayOasPensionTask,
    taskIcon: '/images/dashboard/oas-delay-receiving-pension-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.giveConsentTask,
    taskIcon: '/images/dashboard/oas-consent-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.cppContributionTask,
    taskIcon: '/images/dashboard/oas-cpp-contributions-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.retirementIncomeTask,
    taskIcon: '/images/dashboard/oas-retirement-income-icon.svg',
    taskLink: '/dashboard',
  },
  {
    task: t.reconsiderationTask,
    taskIcon: '/images/dashboard/oas-request-for-reconsideration-icon.svg ',
    taskLink: '/dashboard',
  },
]

module.exports = {
  ACTIVE_CPP,
  SUBMITTED_CPP,
  SUBMITTED_OAS,
  ACTIVE_OAS,
  SUBMITTED_CPP_TASKS,
  ACTIVE_CPP_TASKS,
  SUBMITTED_OAS_TASKS,
  ACTIVE_OAS_TASKS,
}
