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
    applicationDescription: 'Paper application rceived',
    withdrawalRequest: 'Pending',
    withdrawalStatus: 'Not Approved',
    withdrawalRequestDescription: 'In Progress',
    applicationWithdrawn: 'No',
    additionalInformation:
      'We will notify you as soon as your application withdrawel request is approved. Additionally, we may ask you if we need more information about your application withdrawn request.',
    activeBenefits: '',
    pendingBenefits: 'Retirement pension, death survivor pension',
    lastUpdates: [
      {
        label: 'Documents requested',
        description: 'September 5, 2021',
      },
      {
        label: 'Documents uploaded',
        description: 'September 6, 2021',
      },
      {
        label: 'Documents reviewed',
        description: 'September 8, 2021',
      },
    ],
  }

  return (
    <div>
      <BenefitCard locale="en" benefit={oldAgeSecurity} />
    </div>
  )
}
