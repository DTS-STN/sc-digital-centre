/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages/home'
import { axe, toHaveNoViolations } from 'jest-axe'
import { useRouter } from 'next/router'
import { BenefitsContext } from '../../context/benefitsContext'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// the code below is to avoid the following error:
//    "An update to Link inside a test was not wrapped in act(...)"
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => (
    <children.type {...children.props} href={href} />
  ),
}))

expect.extend(toHaveNoViolations)

describe('Home page', () => {
  const featured = {
    scTitleEn: { value: 'title' },
    scDescriptionEn: { value: 'description' },
  }

  const benefits = [
    {
      properties: {
        elements: {
          scPageNameEn: {
            value: 'Page Name 1',
          },
          scTitleEn: {
            value: 'Title 1',
          },
          scProgram: {
            value: 'Program 1',
          },
          scDescriptionEn: {
            value: 'Short Description 1',
          },
          scCallToActionEn: {
            value: 'Call to Action 1',
          },
        },
      },
    },
    {
      properties: {
        elements: {
          scPageNameEn: {
            value: 'Page Name 2',
          },
          scTitleEn: {
            value: 'Title 2',
          },
          scProgram: {
            value: 'Program 2',
          },
          scDescriptionEn: {
            value: 'Short Description 2',
          },
          scCallToActionEn: {
            value: 'Call to Action 2',
          },
        },
      },
    },
  ]

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })

  const contextValues = { benefits: jest.fn(), setBenefits: jest.fn() }

  it('should render in French', () => {
    render(
      <BenefitsContext.Provider value={contextValues}>
        <Home locale="fr" benefits={benefits} featured={featured} />
      </BenefitsContext.Provider>
    )
    const enLink = screen.getByText('English')
    expect(enLink).toBeInTheDocument()
  })

  it('should render in English', () => {
    render(
      <BenefitsContext.Provider value={contextValues}>
        <Home locale="en" benefits={benefits} featured={featured} />
      </BenefitsContext.Provider>
    )
    const enLink = screen.getByText('Français')
    expect(enLink).toBeInTheDocument()
  })

  it('should render SearchCard', () => {
    render(
      <BenefitsContext.Provider value={contextValues}>
        <Home benefits={benefits} featured={featured} />
      </BenefitsContext.Provider>
    )
    expect(screen.getByTestId('searchCard')).toBeTruthy()
  })

  it('should render serviceCanada', () => {
    render(
      <BenefitsContext.Provider value={contextValues}>
        <Home benefits={benefits} featured={featured} />
      </BenefitsContext.Provider>
    )
    expect(screen.getByTestId('serviceCanada')).toBeTruthy()
  })

  it('should render topTasks', () => {
    render(
      <BenefitsContext.Provider value={contextValues}>
        <Home benefits={benefits} featured={featured} />
      </BenefitsContext.Provider>
    )
    expect(screen.getByTestId('topTasks')).toBeTruthy()
  })

  it('should render cardList', () => {
    render(
      <BenefitsContext.Provider value={contextValues}>
        <Home benefits={benefits} featured={featured} />
      </BenefitsContext.Provider>
    )
    expect(screen.getByTestId('cardList')).toBeTruthy()
  })

  it('should render featureBlock', () => {
    render(
      <BenefitsContext.Provider value={contextValues}>
        <Home benefits={benefits} featured={featured} />
      </BenefitsContext.Provider>
    )
    expect(screen.getByTestId('featureBlock')).toBeTruthy()
  })

  it('should render contactUs', () => {
    render(
      <BenefitsContext.Provider value={contextValues}>
        <Home benefits={benefits} featured={featured} />
      </BenefitsContext.Provider>
    )
    expect(screen.getByTestId('contactUs')).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <BenefitsContext.Provider value={contextValues}>
        <Home benefits={benefits} featured={featured} />
      </BenefitsContext.Provider>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
