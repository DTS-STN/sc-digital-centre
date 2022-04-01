/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error503 from '../../pages/503'

describe('503', () => {
  it('renders without crashing', () => {
    render(<Error503 />)
    expect(
      screen.getByText('503 - Service unavailable error occurred')
    ).toBeInTheDocument()
  })
})
