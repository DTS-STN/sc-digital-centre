import { createMocks } from 'node-mocks-http'
import handler from '../../../../pages/api/programData/seb'
import { ProgramCodes } from '../../../../constants/ProgramCodes'

jest.mock('@dts-stn/next-auth/jwt', () => ({
  getToken: () => jest.fn(),
}))

describe('/api/programData/seb', () => {
  process.env = { AUTH_DISABLED: 'true' }

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
    expect(result.programCode).toBe(ProgramCodes.SEB)
  })
})
