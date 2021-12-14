/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Splash from '../../pages/index'

describe('Splash page', () => {
  it('should render', () => {
    render(
      <Splash
        homePage={{
          link: {
            en: '/',
            fr: '/fr/',
          },
        }}
      />
    )
    const enLink = screen.getByText('English')
    expect(enLink).toBeInTheDocument()
  })
})
