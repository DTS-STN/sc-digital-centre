import { getToken } from '@dts-stn/next-auth/jwt'
import { createMocks } from 'node-mocks-http'
import { middleware } from '../../../../pages/api/programData/_middleware'

require('jest-fetch-mock')
jest.mock('next-auth/jwt')

describe('api/programData/_middleware', () => {
  test('auth required by default', async () => {
    const { req, res } = createMocks({})
    getToken.mockReturnValueOnce()

    const result = await middleware(req, {})

    expect(result.status).toBe(401)
  })

  test('will validate session', async () => {
    const { req, res } = createMocks({})
    getToken.mockReturnValueOnce([true])

    const result = await middleware(req, {})

    expect(result).toBeUndefined()
  })
})
