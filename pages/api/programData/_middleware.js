import { getCookie } from 'cookies-next'
import { getToken } from 'next-auth/jwt'
import { mockData } from '../../../mockdata/MockData'

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

export async function FetchProgramData(
  req,
  res,
  path,
  processResult,
  getMockData
) {
  switch (req.method) {
    case 'GET':
      try {
        let result
        let userid
        if (getMockData) {
          userid = getCookie('userid', { req, res })
        }
        if (userid) {
          result = getMockData(mockData[userid])
        } else if (path) {
          const fetchResult = await fetch(getPath, {
            headers: new Headers({
              'Ocp-Apim-Subscription-Key':
                process.env.OCP_APIM_SUBSCRIPTION_KEY,
            }),
          })

          if (fetchResult.ok) {
            result = await fetchResult.json()
          } else {
            throw `Request to ${getPath} failed with ${reposnseData.status} - ${reposnseData.statusText}`
          }
        } else {
          return res.status(501).end('Request Not Avalaible')
        }

        if (result) {
          return res.status(200).json(processResult(result))
        } else {
          return res.status(204).end()
        }
      } catch (error) {
        console.log(error)
        return res.status(500).end()
      }
      break
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
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
