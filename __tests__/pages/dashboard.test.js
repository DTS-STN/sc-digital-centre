import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import {
  APPLICATION_CARD_OAS,
  APPLICATION_CARD_GIS,
  APPLICATION_CARD_CPPD,
  APPLICATION_CARD_EI,
  APPLICATION_CARD_CPP,
  getAdvertsingCards,
} from '../../contents/BenefitAdvertisingCards'
import Dashboard from '../../pages/dashboard'
import { ProgramCodes } from '../../constants/ProgramCodes'
import { StatusCodes } from '../../constants/StatusCodes'
import { TypeCodes } from '../../constants/ProgramTypeCodes'
import { SummaryTypes } from '../../constants/SummaryTypes'
import {
  CreateGenericBenefitJSONForUserDisplay,
  CreateGenericBenefitSummaryForDisplay,
} from '../../lib/BenefitsMapping'
import { getBenefitCards } from '../../contents/BenefitCards'
import { getNoBenefitCards } from '../../contents/NoBenefitCards'

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
  const usersBenefits = [
    CreateGenericBenefitJSONForUserDisplay(
      ProgramCodes.CPP,
      StatusCodes.Active,
      TypeCodes.CPPRetirement,
      [CreateGenericBenefitSummaryForDisplay(SummaryTypes.PaymentAmount, 30)]
    ),
  ]
  const { container } = render(
    <Dashboard
      benefitCards={getBenefitCards()}
      advertisingCards={getAdvertsingCards()}
      noBenefitCards={getNoBenefitCards()}
      metadata={{
        title: 'Digital Centre (en) + Digital Centre (fr)',
        keywords: 'en + fr keywords',
        description: 'en + fr description',
      }}
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
