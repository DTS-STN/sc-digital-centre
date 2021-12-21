import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import TopTasks from './TopTasks'

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
expect.extend(toHaveNoViolations)

describe('TopTasks', () => {
  it('renders TopTasks', () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    render(
      <TopTasks
        topTasksHeader="header text"
        topTasksDescription="desc text"
        topTasksList={[{ title: 'task text', link: '/home' }]}
      />
    )
    const headerText = screen.getByText('header text')
    const descText = screen.getByText('desc text')
    const tasktext = screen.getByText('task text')
    expect(headerText).toBeInTheDocument()
    expect(descText).toBeInTheDocument()
    expect(tasktext).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    const { container } = render(
      <TopTasks
        topTasksHeader="header text"
        topTasksDescription="desc text"
        topTasksList={[{ title: 'task text', link: '/home' }]}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
