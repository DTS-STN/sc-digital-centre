import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'

export function GetSession(req) {
  return GetAuthentication(() => getSession({ req }))
}
export function GetToken(req) {
  return GetAuthentication(() => getToken({ req }))
}
function GetAuthentication(getSes) {
  let session

  if (
    process.env.AUTH_DISABLED &&
    process.env.AUTH_DISABLED.toLowerCase() === 'true'
  ) {
    session = async () => {
      username: 'Tester1'
    }
  } else {
    session = getSes()
  }

  return session
}

export function UnauthenticatedRedirect() {
  return {
    redirect: {
      permanent: false,
      destination: '/api/auth/signin',
    },
  }
}

export function Unauthenticated401Response() {
  return new Response('User session can not be authenticated', { status: 401 })
}
