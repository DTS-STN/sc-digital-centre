import { getCookie } from 'cookies-next'
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

export async function GetProgramData(req, res, getPath, mockData, mapCard) {
  if (req.method === 'GET') {
    try {
      // get the data
      let userData
      const userid = getCookie('userid', { req, res })
      if (userid) {
        userData = mockData(userid)
      } else if (getPath) {
        const reposnseData = await fetch(getPath, {
          headers: new Headers({
            'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
          }),
        })
        userData = [await reposnseData.json()]
      }

      // process the data
      const benefits = []

      if (userData) {
        userData.forEach((result) => {
          benefits.push(mapCard(result))
        })
      }
      res.status(200).json(benefits)
    } catch (e) {
      console.log(e)
      res.status(500)
    }
  } else {
    res.status(405)
  }
  return res
}
