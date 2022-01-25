import BenefitCard from '../components/molecules/BenefitCard'

export default function Dashboard() {
  const oldAgeSecurity = {
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

  const canadaPensionPlan = {
    benefitType: 'CPP',
    benefitName: 'Canada Pension Plan',
    status: 'Pending',
    statusDescription:
      'Your application is pending, we will notify you with decision',
    applicationDate: 'July 1, 2021',
    estimatedReviewCompletionDate: 'July 31, 2021',
    applicationType: 'Canada Pension Plan (CPP)',
    applicationStatus: 'Application Submitted',
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

  return (
    <div>
      <BenefitCard locale="en" benefit={canadaPensionPlan} />
      <BenefitCard locale="en" benefit={oldAgeSecurity} />
    </div>
  )
}
