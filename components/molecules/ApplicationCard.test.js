import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ApplicationCard from './ApplicationCard'

const APPLICATION_CARD_OAS = {
  benefitType: 'OAS',
  benefitName: 'Old Age Security',
  applyIcon: '/images/dashboard/ei-insurance-report-icon.svg',
  estimateIcon: '/images/dashboard/ei-insurance-report-icon.svg',
  learnMoreLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html',
  applicationLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html',
  estimateLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html',
}

expect.extend(toHaveNoViolations)

describe('ApplicationCard', () => {
  it('Renders ApplicationCard', () => {
    render(
      <ApplicationCard
        benefitApplication={APPLICATION_CARD_OAS}
        locale={'en'}
      />
    )
    const titleText = screen.getAllByText('Old Age Security')
    const eligible = screen.getByText('You might be eligible.')
    const estimate = screen.getByText('Estimate retirement income')

    expect(titleText[0]).toBeInTheDocument()
    expect(eligible).toBeInTheDocument()
    expect(estimate).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <ApplicationCard
        benefitApplication={APPLICATION_CARD_OAS}
        locale={'en'}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
