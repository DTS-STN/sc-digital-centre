/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Splash from '../../pages/index'

describe('Splash page', () => {
  it('should render', () => {
    render(<Splash />)
    const enLink = screen.getByText('English')
    expect(enLink).toBeInTheDocument()
  })
})
