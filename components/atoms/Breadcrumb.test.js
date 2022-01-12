/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Breadcrumb from './Breadcrumb'

expect.extend(toHaveNoViolations)

jest.mock('next/link', () => {
  return ({ children }) => {
    return children
  }
})

describe('BreadCrumb', () => {
  it('renders BreadCrumbs', () => {
    render(<Breadcrumb />)
    const canadaText = screen.getByText('Canada.ca')
    expect(canadaText).toBeInTheDocument()
  })

  it('renders breadcrumb with items', () => {
    render(
      <Breadcrumb items={[{ text: 'newPage', link: 'www.newPage.com' }]} />
    )
    const breadcrumbLink = screen.getByText('newPage')
    expect(breadcrumbLink).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    render(<Breadcrumb />)
    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
