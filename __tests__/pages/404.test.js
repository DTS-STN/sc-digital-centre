/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error404 from '../../pages/404'

describe('404', () => {
  it('renders without crashing', () => {
    render(<Error404 />)
    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument()
  })
})
