import { Unauthenticated401Response, GetToken } from '../../../lib/Auth'

export async function middleware(req, ev) {
  const authSession = await GetToken(req)
  if (!authSession) return Unauthenticated401Response()
}
