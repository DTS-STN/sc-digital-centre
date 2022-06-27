import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Dashboard, { getServerSideProps } from '../../pages/dashboard'
import { getAdvertsingCards } from '../../contents/BenefitAdvertisingCards'
import { getNoBenefitCards } from '../../contents/NoBenefitCards'
import { createMocks } from 'node-mocks-http'
import { getSession } from 'next-auth/react'
import { act } from 'react-test-renderer'
import { enableFetchMocks } from 'jest-fetch-mock'

expect.extend(toHaveNoViolations)
jest.mock('next-auth/react')
enableFetchMocks()

describe('Dashboard', () => {
  let container
  const sebFetchResult = {
    programCode: 'seb',
    statusCode: 'activeAgreement',
    typeCode: 'SEB',
    summaries: [
      {
        type: 'TransactionDate',
        value: '2021-09-21',
      },
      {
        type: 'AgreementStatus',
        value: 'Started',
      },
    ],
  }

  // set up mocks
  getSession.mockReturnValue([true])
  const { req, res } = createMocks({ method: 'GET' })

  beforeEach(() => {
    fetch.resetMocks()
  })

  act(() => {
    //set what each fetch will return in order of fetch call
    fetch.mockResponses(
      [JSON.stringify(''), { status: 204 }], //cpp
      [JSON.stringify('Request Not Avalaible'), { status: 501 }], //cppd
      [JSON.stringify(''), { status: 204 }], //ei
      [JSON.stringify(''), { status: 204 }], //oas
      [JSON.stringify(''), { status: 204 }], //gis
      [JSON.stringify(sebFetchResult), { status: 200 }] //seb
    )
    container = render(
      <Dashboard
        advertisingCards={getAdvertsingCards()}
        noBenefitCards={getNoBenefitCards('en')}
        locale="en"
        metadata={{}}
      />
    ).container

    //helps to ensure fetch completed before leaving act()
    screen.findByText('Loading CPP User Benefit Data...')
  })

  it('renders Dashboard', () => {
    expect(container).toBeTruthy()

    //loads data
    const sebResult = screen.getByText('Self Employment Benefits')
    expect(sebResult).toBeInTheDocument()

    //handles error
    const cppdResult = screen.getByText(
      'Error fetching cppd data 501 - "Request Not Avalaible".'
    )
    expect(cppdResult).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('returns expected server props', async () => {
    const result = await getServerSideProps({
      req,
      res,
      locale: 'en',
      query: {},
    })
    expect(result.props).toBeTruthy()
    expect(result.props.advertisingCards).toBeTruthy()
    expect(result.props.noBenefitCards).toBeTruthy()
    expect(result.props.isAuth).toBeDefined()
    expect(result.props.locale).toBe('en')
    expect(result.props.metadata).toBeTruthy()
  })

  it('redirects for invalid session', async () => {
    getSession.mockReturnValueOnce()
    const result = await getServerSideProps({
      req,
      res,
      locale: 'en',
      query: {},
    })
    expect(result.redirect).toBeTruthy()
    expect(result.props).toBeUndefined()
  })
})
