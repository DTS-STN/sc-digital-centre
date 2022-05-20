import en from '../locales/en'
import {
  SUBMITTED_CPP_ESTIMATE_TASKS,
  SUBMITTED_CPP_CHANGE_TASKS,
  ACTIVE_CPP_PAYMENT_TASKS,
  ACTIVE_CPP_CHANGE_TASKS,
  INACTIVE_CPP_TASKS,
  SUBMITTED_CPPD_TASKS,
  ACTIVE_CPPD_TASKS,
  SUBMITTED_OAS_TASKS,
  ACTIVE_OAS_TASKS,
  SUBMITTED_EI_TASKS,
  ACTIVE_EI_COMMON_TASKS,
  ACTIVE_EI_PAYMENT_TASKS,
  ACTIVE_EI_DOCS_TASKS,
  INACTIVE_EI_TASKS,
  ACTIVE_SEB_TASKS,
} from '../contents/DashboardBenefitTasksConstants'

const t = en
const SUBMITTED_OAS = {
  benefitType: 'OAS',
  benefitName: 'Old Age Security',
  status: 'Pending',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  latestStatusDate: 'July 15, 2021',
  estimatedDateOfDecision: 'July 31, 2021',
  applicationType: 'Old Age Security Benefits (OAS)',
  applicationStatus: 'Application received',
  applicationDescription: 'Electronic application received',
  withdrawalRequest: 'Pending',
  withdrawalStatus: 'Not Approved',
  withdrawalRequestDescription: 'In Progress',
  applicationWithdrawn: 'No',
  additionalInformation:
    'We will notify you as soon as your application withdrawel request is approved. Additionally, we may ask you if we need more information about your application withdrawn request.',
  activeBenefits: '',
  pendingBenefits: 'Old age security pension',
  benefitStatusProgress: 'In Progress',
  tasks: SUBMITTED_OAS_TASKS,
}

const ACTIVE_OAS = {
  benefitType: 'OAS',
  benefitName: 'Old Age Security',
  // TODO: We can remove benefitName and use t[props.benefit.benefitType.toLowerCase()] if we get just benefitType from API
  status: 'Active',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  latestStatusDate: 'September 15, 2021',
  estimatedDateOfDecision: 'July 31, 2021',
  applicationStatus: 'In payment',
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
  benefitStatusProgress: 'Complete',
  // TODO: "pendingBenefits" is used for both Pending and Active benefits. We need to change the field name when mapping with API.
  tasks: ACTIVE_OAS_TASKS,
}

const SUBMITTED_CPP = {
  benefitType: 'CPP',
  benefitName: 'Canada Pension Plan',
  status: 'Pending',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  latestStatusDate: 'July 15, 2021',
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

  applicationStatus: 'Application received',
  pendingBenefits: 'Retirement pension',
  benefitStatusProgress: 'In Progress',
  tasks: [SUBMITTED_CPP_ESTIMATE_TASKS, SUBMITTED_CPP_CHANGE_TASKS],
  taskGroups: true,
}

const ACTIVE_CPP = {
  benefitType: 'CPP',
  benefitName: 'Canada Pension Plan',
  status: 'Active',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  latestStatusDate: 'July 15, 2021',
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
  benefitStatusProgress: 'Complete',
  tasks: [ACTIVE_CPP_PAYMENT_TASKS, ACTIVE_CPP_CHANGE_TASKS],
  taskGroups: true,
}

const SUBMITTED_CPPD = {
  benefitType: 'CPPD',
  benefitName: 'Canada Pension Plan Disability',
  status: 'Pending',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  latestStatusDate: 'July 15, 2021',
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

  applicationStatus: 'Application received',
  pendingBenefits: 'Disability',
  benefitStatusProgress: 'In Progress',
  tasks: SUBMITTED_CPPD_TASKS,
}

const ACTIVE_CPPD = {
  benefitType: 'CPPD',
  benefitName: 'Canada Pension Plan Disability',
  status: 'Active',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  latestStatusDate: 'July 15, 2021',
  estimatedDateOfDecision: 'July 31, 2021',
  applicationType: 'Canada Pension Plan (CPP)',
  applicationDescription: 'Online application received',
  nextPaymentAmount: 612.94,
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
  applicationStatus: 'In payment',
  pendingBenefits: 'Disability',
  benefitStatusProgress: 'Complete',
  tasks: ACTIVE_CPPD_TASKS,
}

const INACTIVE_CPPD = {
  benefitType: 'CPPD',
  benefitName: 'Canada Pension Plan Disability',
  status: 'Inactive',
  statusDescription:
    'Your application is pending, we will notify you with decision',
  applicationDate: 'July 1, 2021',
  estimatedDateOfDecision: 'July 31, 2021',
  applicationType: 'Canada Pension Plan (CPP)',
  applicationDescription: 'Online application received',
  nextPaymentAmount: 612.94,
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
  applicationStatus: 'Inactive',
  pendingBenefits: 'Disability',
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
  tasks: INACTIVE_CPP_TASKS,
}

const SUBMITTED_EI = {
  benefitType: 'EI',
  benefitName: 'Employment Insurance',
  status: 'Pending',
  statusDescription:
    'Your application is pending, we will notify you with a decision',
  applicationDate: 'September 1, 2021',
  latestStatusDate: 'September 15, 2021',
  estimatedDateOfDecision: 'September 30, 2021',
  applicationStatus: 'Application received',
  applicationDescription: 'Paper application received',
  nextPaymentAmount: 0,
  nextPaymentDate: '',
  lastPaymentDate: '',
  pensionStartDate: '',
  benefitStartDate: '',
  payeeFullName: '',
  payeeAddress: '',
  payeePhoneNumber: '',
  accountNumber: '',
  institutionNumber: '',
  institutionName: '',
  payerName: '',
  paymentDepositDate: '',
  paymentStatus: '',
  paymentType: '',
  additionalInformation:
    'We will notify you as soon as we have process your application.',
  pendingBenefits: 'Regular benefits',
  benefitStatusProgress: 'Questionnaire received -training',
  tasks: SUBMITTED_EI_TASKS,
}

const ACTIVE_EI = {
  benefitType: 'EI',
  benefitName: 'Employment Insurance',
  status: 'Active',
  statusDescription:
    'Your application is pending, we will notify you with a decision',
  applicationDate: 'September 1, 2021',
  latestStatusDate: 'September 15, 2021',
  estimatedDateOfDecision: 'September 30, 2021',
  applicationStatus: 'In payment',
  applicationDescription: 'Paper application received',
  nextPaymentAmount: 691.45,
  nextPaymentDate: 'September 30, 2021',
  lastPaymentDate: 'August 30, 2021',
  pensionStartDate: '',
  benefitStartDate: 'August 1, 2021',
  payeeFullName: '',
  payeeAddress: '28 Clover St. Ottawa ON M4H1S3',
  payeePhoneNumber: '1-819-654-5671',
  accountNumber: '8510231',
  institutionNumber: '',
  institutionName: 'Scotiabank',
  payerName: '',
  paymentDepositDate: '',
  paymentStatus: '',
  paymentType: 'Direct Deposit',
  additionalInformation:
    'We will notify you as soon as we have process your application.',
  pendingBenefits: 'Regular benefits',
  benefitStatusProgress: 'Training information added',
  tasks: [
    ACTIVE_EI_COMMON_TASKS,
    ACTIVE_EI_PAYMENT_TASKS,
    ACTIVE_EI_DOCS_TASKS,
  ],
  taskGroups: true,
}

const INACTIVE_EI = {
  benefitType: 'EI',
  benefitName: 'Employment Insurance',
  status: 'Inactive',
  statusDescription:
    'Your application is pending, we will notify you with a decision',
  applicationDate: 'September 1, 2021',
  estimatedDateOfDecision: 'September 30, 2021',
  applicationStatus: 'Inactive',
  applicationDescription: 'Paper application received',
  nextPaymentAmount: 691.45,
  nextPaymentDate: 'September 30, 2021',
  lastPaymentDate: 'August 30, 2021',
  pensionStartDate: '',
  benefitStartDate: 'August 1, 2021',
  payeeFullName: '',
  payeeAddress: '28 Clover St. Ottawa ON M4H1S3',
  payeePhoneNumber: '1-819-654-5671',
  accountNumber: '8510231',
  institutionNumber: '',
  institutionName: 'Scotiabank',
  payerName: '',
  paymentDepositDate: '',
  paymentStatus: '',
  paymentType: 'Direct Deposit',
  additionalInformation:
    'We will notify you as soon as we have process your application.',
  pendingBenefits: 'Regular benefits',
  lastUpdates: [
    {
      label: 'Report processed',
      description: 'September 9, 2021',
    },
    {
      label: 'Documents reviewed',
      description: 'September 6, 2021',
    },
    {
      label: 'Documents uploaded',
      description: 'September 5, 2021',
    },
  ],
  tasks: INACTIVE_EI_TASKS,
}

const ACTIVE_SEB = {
  benefitType: 'SEB',
  benefitName: 'Self Employment Benefits',
  status: 'ActiveAgreement',
  estimatedDateOfDecision: 'September 31, 2021',
  applicationStatus: 'Agreement',
  transactionDate: 'September 31, 2021',
  benefitStatusProgress: 'Started',
  tasks: [ACTIVE_SEB_TASKS],
  taskGroups: true,
}

function getBenefitCards() {
  return [
    SUBMITTED_CPP,
    SUBMITTED_OAS,
    SUBMITTED_EI,
    INACTIVE_EI,
    SUBMITTED_CPPD,
    INACTIVE_CPPD,
  ]
}

module.exports = {
  SUBMITTED_CPP,
  SUBMITTED_CPPD,
  INACTIVE_CPPD,
  SUBMITTED_OAS,
  SUBMITTED_EI,
  INACTIVE_EI,
  getBenefitCards,
}
