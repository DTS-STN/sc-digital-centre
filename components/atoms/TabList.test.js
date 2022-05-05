import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import TabList from './TabList'

expect.extend(toHaveNoViolations)

describe('TabList', () => {
  it('renders TabList', () => {
    render(
      <TabList titles={['test', 'test2']} onClick={() => {}} tabSelected={0} />
    )
    const text1 = screen.getByText('test')
    const text2 = screen.getByText('test2')
    expect(text1).toBeInTheDocument()
    expect(text2).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <TabList titles={['test', 'test2']} onClick={() => {}} tabSelected={0} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
