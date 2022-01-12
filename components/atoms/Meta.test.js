import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Meta from './Meta'

expect.extend(toHaveNoViolations)

describe('Meta', () => {
  it('has no a11y violations', async () => {
    const metadata = {
      title: 'Meta title',
      description: 'Meta description',
      owner: 'Meta owner',
      audience: ['Meta audience'],
      type: ['Meta type'],
      dcTerms: ['Meta dcterms1', 'Meta dcterms2'],
      keywords: 'Meta keywords',
      img: {
        title: 'Meta img title',
        src: 'Meta img src',
        alt: 'Meta img alt',
        description: 'Meta img description',
      },
    }
    const { container } = render(<Meta locale="en" metadata={metadata} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
