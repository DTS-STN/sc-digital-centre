/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages/home'
import { axe, toHaveNoViolations } from 'jest-axe'
import { useRouter } from 'next/router'

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

jest.mock(
  'next/image',
  () =>
    function Image({ imageSrc, alt }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={imageSrc} alt={alt} />
    }
)

expect.extend(toHaveNoViolations)

describe('Home page', () => {
  const metadata = {
    title: 'Home page',
    toggleLangLink: '/fr/home',
  }

  const findBenefitsAndServices = {
    searchLink: '/search',
  }

  const featured = {
    header: 'Featured: OAS',
    body: 'Featured body',
    imgSrc: '',
    imgAlt: '',
  }

  const mostRequestedPages = {
    header: 'Most Requested Pages',
    cards: [
      {
        key: 'Page Name 1',
        title: 'Title 1',
        tag: 'Program 1',
        text: 'Short Description 1',
        callToActionText: 'Call to Action 1',
        btnId: 'idx1',
        callToActionHref: '#',
      },
      {
        key: 'Page Name 2',
        title: 'Title 2',
        tag: 'Program 2',
        text: 'Short Description 2',
        callToActionText: 'Call to Action 2',
        btnId: 'idx2',
        callToActionHref: '#',
      },
    ],
  }

  const topTasks = {
    header: 'header text',
    topTasksList: [
      {
        title: 'task text',
        link: '/home',
      },
    ],
  }

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })

  it('should render in French', () => {
    render(
      <Home
        locale="fr"
        metadata={metadata}
        findBenefitsAndServices={findBenefitsAndServices}
        topTasks={topTasks}
        mostRequestedPages={mostRequestedPages}
        featured={featured}
      />
    )
    const enLink = screen.getByText('English')
    expect(enLink).toBeInTheDocument()
  })

  it('should render in English', () => {
    render(
      <Home
        locale="en"
        metadata={metadata}
        findBenefitsAndServices={findBenefitsAndServices}
        topTasks={topTasks}
        mostRequestedPages={mostRequestedPages}
        featured={featured}
      />
    )
    const enLink = screen.getByText('Français')
    expect(enLink).toBeInTheDocument()
  })

  it('should render SearchCard', () => {
    render(
      <Home
        metadata={metadata}
        findBenefitsAndServices={findBenefitsAndServices}
        topTasks={topTasks}
        mostRequestedPages={mostRequestedPages}
        featured={featured}
      />
    )
    expect(screen.getByTestId('searchCard')).toBeTruthy()
  })

  it('should render serviceCanada', () => {
    render(
      <Home
        metadata={metadata}
        findBenefitsAndServices={findBenefitsAndServices}
        topTasks={topTasks}
        mostRequestedPages={mostRequestedPages}
        featured={featured}
      />
    )
    expect(screen.getByTestId('serviceCanada')).toBeTruthy()
  })

  it('should render topTasks', () => {
    render(
      <Home
        metadata={metadata}
        findBenefitsAndServices={findBenefitsAndServices}
        topTasks={topTasks}
        mostRequestedPages={mostRequestedPages}
        featured={featured}
      />
    )
    expect(screen.getByTestId('topTasks')).toBeTruthy()
  })

  it('should render cardList', () => {
    render(
      <Home
        metadata={metadata}
        findBenefitsAndServices={findBenefitsAndServices}
        topTasks={topTasks}
        mostRequestedPages={mostRequestedPages}
        featured={featured}
      />
    )
    expect(screen.getByTestId('cardList')).toBeTruthy()
  })

  it('should render featureBlock', () => {
    render(
      <Home
        metadata={metadata}
        findBenefitsAndServices={findBenefitsAndServices}
        topTasks={topTasks}
        mostRequestedPages={mostRequestedPages}
        featured={featured}
      />
    )
    expect(screen.getByTestId('featureBlock')).toBeTruthy()
  })

  it('should render contactUs', () => {
    render(
      <Home
        metadata={metadata}
        locale="en"
        findBenefitsAndServices={findBenefitsAndServices}
        topTasks={topTasks}
        mostRequestedPages={mostRequestedPages}
        featured={featured}
      />
    )
    expect(screen.getByTestId('contactUs')).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <Home
        metadata={metadata}
        locale="en"
        findBenefitsAndServices={findBenefitsAndServices}
        topTasks={topTasks}
        mostRequestedPages={mostRequestedPages}
        featured={featured}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
