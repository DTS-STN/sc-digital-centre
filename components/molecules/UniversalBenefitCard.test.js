import { render, screen } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import UniversalBenefitCard from './UniversalBenefitCard'
import en from '../../locales/en'
import {
  CreateBenefitCardObj,
  ProgramCodes,
  StatusCodes,
  TypeCodes,
} from '../../objects/UniversalBenefit'

expect.extend(toHaveNoViolations)

describe('UniversalBenefitCard', () => {
  const benefit = CreateBenefitCardObj(
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
