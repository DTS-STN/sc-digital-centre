import { MapCPPCard } from '../../../lib/BenefitsMapping'
import { mockData } from '../../../mockdata/MockData'
import { getCookie } from 'cookies-next'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      let userData
      const userid = getCookie('userid', { req, res })
      if (userid) {
        //Mock userid response
        userData = mockData[userid].CPP
      } else {
        const reposnseData = await fetch(process.env.CPP_ACTIVE_BENEFIT_URL, {
          headers: new Headers({
            'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
          }),
        })
        userData = [await reposnseData.json()]
      }

      const benefits = []
      if (userData) {
        userData.forEach((result) => {
          benefits.push(MapCPPCard(result))
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
