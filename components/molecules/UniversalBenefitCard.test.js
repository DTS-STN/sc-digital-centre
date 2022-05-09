import { render, screen } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import UniversalBenefitCard from './UniversalBenefitCard'
import en from '../../locales/en'
import { ProgramCodes } from '../../constants/ProgramCodes'
import { StatusCodes } from '../../constants/StatusCodes'
import { TypeCodes } from '../../constants/ProgramTypeCodes'
import { CreateGenericBenefitJSONForUserDisplay } from '../../lib/BenefitsMapping'

expect.extend(toHaveNoViolations)

describe('UniversalBenefitCard', () => {
  const benefit = CreateGenericBenefitJSONForUserDisplay(
    ProgramCodes.CPP,
    StatusCodes.Active,
    TypeCodes.CPPRetirement
  )
  const { container } = render(
    <UniversalBenefitCard locale="en" benefit={benefit} />
  )

  it('renders', () => {
    const title = screen.getByText(en[benefit.programCode])
    expect(title).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
