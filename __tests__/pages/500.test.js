/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error500 from '../../pages/500'

describe('500', () => {
  it('renders without crashing', () => {
    render(<Error500 />)
    expect(
      screen.getByText('500 - Server-side error occurred')
    ).toBeInTheDocument()
  })
})
