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

export async function GetProgramData(req, res, getPath, getMockObj, mapCard) {
  if (req.method === 'GET') {
    try {
      // get the data
      let userData
      const userid = getCookie('userid', { req, res })
      if (userid) {
        userData = getMockObj(mockData[userid])
      } else if (getPath) {
        const reposnseData = await fetch(getPath, {
          headers: new Headers({
            'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
          }),
        })
        if (reposnseData.ok) {
          userData = [await reposnseData.json()]
        } else {
          throw `Interop Request to ${getPath} failed with ${reposnseData.status} - ${reposnseData.statusText}`
        }
      } else {
        res.status(501).send('Introp API Not Implemented')
      }

      // process the data
      if (userData && userData.length > 0) {
        const benefits = []
        userData.forEach((result) => {
          benefits.push(mapCard(result))
        })
        res.status(200).json(benefits)
      } else {
        res.status(204).end()
      }
    } catch (e) {
      console.log(e)
      res.status(500).end()
    }
  } else {
    res.status(405).end()
  }
  return res
}
