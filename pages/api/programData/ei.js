import { MapEICard } from '../../../lib/BenefitsMapping'
import { mockData } from '../../../mockdata/MockData'
import { getCookie } from 'cookies-next'

export default async function handler(req, res) {
  const accessToken = 'dummyAccessToken'
  if (req.method === 'GET') {
    try {
      let userData
      const userid = getCookie('userid', { req, res })
      if (userid) {
        //Mock userid response
        userData = mockData[userid].EI
      } else {
        const responseData = await fetch(process.env.EI_ACTIVE_BENEFIT_URL, {
          headers: new Headers({
            'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
            'Access-Token': accessToken,
          }),
        })
        userData = [await responseData.json()]
      }

      const benefits = []
      //map if mock data is found
      if (userData) {
        userData.forEach((result) => {
          benefits.push(MapEICard(result))
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
