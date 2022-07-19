import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Dashboard, { getServerSideProps } from '../../pages/dashboard'
import { getAdvertsingCards } from '../../contents/BenefitAdvertisingCards'
import { getNoBenefitCards } from '../../contents/NoBenefitCards'
import { createMocks } from 'node-mocks-http'
import { getSession } from 'next-auth/react'
import { act } from 'react-dom/test-utils'
import { enableFetchMocks } from 'jest-fetch-mock'
import { unmountComponentAtNode } from 'react-dom'

expect.extend(toHaveNoViolations)
enableFetchMocks()
jest.mock('next-auth/react')
jest.mock('cookies-next', () => ({
  getCookie: () => 'default',
  setCookie: () => 'default',
}))

describe('Dashboard', () => {
  let container
  const { req, res } = createMocks({ method: 'GET' })
  const sebFetchResult = [
    {
      programCode: 'seb',
      statusCode: 'activeAgreement',
      typeCode: 'seb',
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
    },
  ]
  const defaultDashboard = (
    <Dashboard
      advertisingCards={getAdvertsingCards()}
      noBenefitCards={getNoBenefitCards('en')}
      locale="en"
      metadata={{}}
    />
  )

  beforeEach(() => {
    fetch.resetMocks()
    //set what each fetch will return in order of fetch call
    fetch.mockResponses(
      [JSON.stringify(''), { status: 204 }], //cpp
      [JSON.stringify('Request Not Avalaible'), { status: 501 }], //cppd
      [JSON.stringify(''), { status: 204 }], //ei
      [JSON.stringify(''), { status: 204 }], //oas
      [JSON.stringify(''), { status: 204 }], //gis
      [JSON.stringify(sebFetchResult), { status: 200 }] //seb
    )
    container = document.createElement('div')
    document.body.appendChild(container)
  })
  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it('loads api data', async () => {
    await act(async () => {
      render(defaultDashboard, container)
    })

    const sebResult = screen.getByTestId('benefit-card-seb-seb-activeAgreement')
    expect(sebResult).toBeInTheDocument()
  })

  it('loads a nobenefitcard', async () => {
    await act(async () => {
      render(defaultDashboard, container)
    })
    const NoBenefitCard = screen.getByTestId('no-benefit-card1')
    expect(NoBenefitCard).toBeInTheDocument()
  })

  it('renders Dashboard', async () => {
    await act(async () => {
      render(defaultDashboard, container)
    })
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    await act(async () => {
      render(defaultDashboard, container)
    })
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('returns expected server props', async () => {
    getSession.mockReturnValueOnce([true])
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
