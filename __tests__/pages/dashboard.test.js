import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import {
  APPLICATION_CARD_OAS,
  APPLICATION_CARD_GIS,
  APPLICATION_CARD_CPPD,
  APPLICATION_CARD_EI,
  APPLICATION_CARD_CPP,
} from '../../contents/DashboardBenefitApplicationCards'
import Dashboard from '../../pages/dashboard'
import {
  ProgramCodes,
  StatusCodes,
  TypeCodes,
  UniversalBenefit,
} from '../../objects/UniversalBenefit'
import { BenefitSummaries, SummaryTypes } from '../../objects/BenefitSummaries'
expect.extend(toHaveNoViolations)
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        programCode: '4543',
        claimStatusCode: '3433',
        enmBenefitType: '1',
        messageData: 'Important message',
        messageId: '32',
        publishDate: '2021-02-21',
        netAmount: '32.21',
        nextRptDueDate: '2023-04-24',
        benefitCode: '30320',
        benefitType: 'Beneficial',
        benefitStatus: 'Active',
        lastPaymentDate: '2021-02-21',
        finalPaymentDate: '2024-02-13',
      }),
  })
)

beforeEach(() => {
  fetch.mockClear()
})

describe('Dashboard', () => {
  const advertisingCards = [
    APPLICATION_CARD_OAS,
    APPLICATION_CARD_GIS,
    APPLICATION_CARD_CPPD,
    APPLICATION_CARD_EI,
    APPLICATION_CARD_CPP,
  ]
  let usersBenefits = JSON.stringify([
    new UniversalBenefit(
      ProgramCodes.CPP,
      StatusCodes.Active,
      TypeCodes.CPPRetirement,
      [new BenefitSummaries(SummaryTypes.PaymentAmount, 30)]
    ),
  ])
  const { container } = render(
    <Dashboard
      advertisingCards={advertisingCards}
      usersBenefits={usersBenefits}
    />
  )
  it('renders Dashboard', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
