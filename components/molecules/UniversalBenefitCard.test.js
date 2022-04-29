import { render, screen } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import UniversalBenefitCard from './UniversalBenefitCard'
import en from '../../locales/en'
import {
  ProgramCodes,
  StatusCodes,
  TypeCodes,
  UniversalBenefit,
} from '../../objects/UniversalBenefit'

expect.extend(toHaveNoViolations)

describe('UniversalBenefitCard', () => {
  let benefit = new UniversalBenefit(
    ProgramCodes.CPP,
    StatusCodes.Active,
    TypeCodes.CPPRetirement
  )
  let { container } = render(
    <UniversalBenefitCard locale="en" benefit={benefit} />
  )

  it('renders', () => {
    let title = screen.getByText(en[benefit.programCode])
    expect(title).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    let results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
