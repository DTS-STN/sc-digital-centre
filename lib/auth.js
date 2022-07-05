import { getSession } from 'next-auth/react'

export function AuthIsDisabled() {
  return (
    process.env.AUTH_DISABLED &&
    process.env.AUTH_DISABLED.toLowerCase() === 'true'
  )
}

export async function AuthIsValid(req) {
  const session = await getSession({ req })
  return session
}

export function Redirect() {
  return {
    redirect: {
      permanent: false,
      destination: '/api/auth/signin',
    },
  }
}
