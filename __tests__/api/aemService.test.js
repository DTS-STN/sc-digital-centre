import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AEMService } from '../../pages/api/aemService'
import SearchResult from '../../pages/searchResult'
import { axe, toHaveNoViolations } from 'jest-axe'
import { useRouter } from 'next/router'

const fakeBaseUrl = 'https://example.com'

describe('aemService class', () => {
  it('should instantiate with a baseUrl property if the first arg is not an empty string', () => {
    expect(() => {
      new AEMService()
    }).toThrow(Error)
    expect(() => {
      new AEMService('       ')
    }).toThrow(Error)
    expect(new AEMService(fakeBaseUrl).baseUrl).toBe(fakeBaseUrl)
  })
  it('should contain a cache bust string that is passed as a second arg, or defaulted to today date (en-CA localized)', () => {
    expect(new AEMService(fakeBaseUrl, 'cachebuster').cacheBustString).toBe(
      'cachebuster'
    )
    expect(new AEMService(fakeBaseUrl).cacheBustString).toBe(
      new Date().toLocaleDateString('en-CA')
    )
  })
})
