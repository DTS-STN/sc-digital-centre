import { getToken } from 'next-auth/jwt'

export async function middleware(req, ev) {
  if (
    !process.env.AUTH_DISABLED ||
    process.env.AUTH_DISABLED.toLowerCase() !== 'true'
  ) {
    //Middleware requires use of token as of now https://gist.github.com/balazsorban44/30e2267fe1105529f217acbe3763b468
    const session = await getToken({ req })

    if (!session) {
      return new Response('Auth required', {
        status: 401,
      })
    }
  }
}
