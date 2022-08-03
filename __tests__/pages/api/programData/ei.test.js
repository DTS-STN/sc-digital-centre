import { enableFetchMocks } from 'jest-fetch-mock'
import { createMocks } from 'node-mocks-http'
import handler from '../../../../pages/api/programData/ei'
import eiMockResult from '../../../../mockdata/tests/ei.json'
import { ProgramCodes } from '../../../../constants/ProgramCodes'

enableFetchMocks()
jest.mock('@dts-stn/next-auth/jwt', () => ({
  getToken: () => jest.fn(),
}))

describe('/api/programData/ei', () => {
  process.env = {
    EI_ACTIVE_BENEFIT_URL: 'https://mock.interop.com/api/ei',
    AUTH_DISABLED: 'true',
  }

  test('returns api response', async () => {
    fetch.mockResponseOnce(JSON.stringify(eiMockResult))

    const { req, res } = createMocks({
      method: 'GET',
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    const result = res._getJSONData()[0]
    expect(result).toBeDefined
    expect(result.programCode).toBe(ProgramCodes.EI)
  })

  test('returns mocked data', async () => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: 'userid=test',
    })

    const { req, res } = createMocks({
      method: 'GET',
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    const result = res._getJSONData()[0]
    expect(result).toBeDefined
    expect(result.programCode).toBe(ProgramCodes.EI)
  })
})
