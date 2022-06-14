import { enableFetchMocks } from 'jest-fetch-mock'
import { createMocks } from 'node-mocks-http'
import handler from '../../../../pages/api/programData/cpp'
import cppMockResult from '../../../../mockdata/tests/cpp.json'
import { ProgramCodes } from '../../../../constants/ProgramCodes'

enableFetchMocks()

describe('/api/programData/cpp', () => {
  //     beforeEach(()=>{
  //         jest.resetModules()

  //         fetch.resetMocks()
  //     })

  test('returns api response', async () => {
    process.env = { CPP_ACTIVE_BENEFIT_URL: 'https://mock.interop.com/api/cpp' }
    fetch.mockResponseOnce(JSON.stringify(cppMockResult))

    const { req, res } = createMocks({
      method: 'GET',
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    const result = res._getJSONData()[0]
    expect(result).toBeDefined
    expect(result.programCode).toBe(ProgramCodes.CPP)
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
    expect(result.programCode).toBe(ProgramCodes.CPP)
  })
})
