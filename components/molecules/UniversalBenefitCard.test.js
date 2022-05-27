import { render } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import UniversalBenefitCard from './UniversalBenefitCard'
import { ProgramCodes } from '../../constants/ProgramCodes'
import { StatusCodes } from '../../constants/StatusCodes'
import { TypeCodes } from '../../constants/ProgramTypeCodes'
import { MapBenefit } from '../../lib/BenefitsMapping'

expect.extend(toHaveNoViolations)

describe('UniversalBenefitCard', () => {
  const benefit = MapBenefit(
    ProgramCodes.CPP,
    StatusCodes.Active,
    TypeCodes.CPPRetirement
  )
  const { container } = render(
    <UniversalBenefitCard locale="en" benefit={benefit} />
  )

  it('renders', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
