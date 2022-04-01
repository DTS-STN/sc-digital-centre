/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error400 from '../../pages/400'

describe('400', () => {
  it('renders without crashing', () => {
    render(<Error400 />)
    expect(
      screen.getByText('400 Error - Bad request error occurred')
    ).toBeInTheDocument()
  })
})
