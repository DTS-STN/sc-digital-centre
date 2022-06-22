import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
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
  getSession.mockReturnValue([true])
  const { req, res } = createMocks({ method: 'GET' })
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
  let container

  beforeEach(() => {
    fetch.resetMocks()
  })

  act(() => {
    //all program fetches return empty
    fetch.mockResponses(
      [JSON.stringify(''), { status: 204 }],
      [JSON.stringify('Request Not Avalaible'), { status: 501 }],
      [JSON.stringify(''), { status: 204 }],
      [JSON.stringify(''), { status: 204 }],
      [JSON.stringify(''), { status: 204 }],
      [JSON.stringify(sebFetchResult), { status: 200 }]
    )
    container = render(
      <Dashboard
        advertisingCards={getAdvertsingCards()}
        noBenefitCards={getNoBenefitCards('en')}
        locale="en"
        metadata={{
          title: 'Digital Centre (en) + Digital Centre (fr)',
          keywords: 'en + fr keywords',
          description: 'en + fr description',
        }}
      />
    ).container

    //ensures fetch completed before leaving act()
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

  // it('handles fetch errors', () => {
  //   fetch.mockResponse(JSON.stringify({status: 404, body: "Not found"}))
  //   let errorMsg
  //   act(() => {
  //     render(dashboard)
  //     //wait for load to complete
  //     errorMsg = screen.findByText('Error fetching cpp data 404 - .')
  //   })
  //   expect(errorMsg).toBeTruthy()

  // })

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
