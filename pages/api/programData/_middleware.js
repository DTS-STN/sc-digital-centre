import { getSession } from 'next-auth/react'

export async function middleware(req, ev) {
  if (
    !process.env.AUTH_DISABLED ||
    process.env.AUTH_DISABLED.toLowerCase() === 'false'
  ) {
    const session = await getSession({ req })

    if (!session) {
      return new Response('Auth required', {
        status: 401,
      })
    }
  }
}
