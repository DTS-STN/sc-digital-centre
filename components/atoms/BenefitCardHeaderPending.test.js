import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BenefitCardHeaderPending from './BenefitCardHeaderPending'

describe('BenefitCardHeaderPending Tests', () => {
  it('renders the Header of a Pending Benefit', () => {
    const component = render(
      <BenefitCardHeaderPending benefit={'TestBenefit'} />
    )
    expect(component).toMatchSnapshot()
  })
})
