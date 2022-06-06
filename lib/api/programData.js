import { getCookie } from 'cookies-next'
import { mockData } from '../../mockdata/MockData'

export function MapArrayData(data, mapping) {
  const mapped = []
  if (Array.isArray(data)) {
    data.forEach((item) => {
      mapped.push(mapping(item))
    })
  } else {
    mapped.push(mapping(data))
  }
  return mapped
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
