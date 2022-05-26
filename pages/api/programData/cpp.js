import { MapCPPCard } from '../../../lib/BenefitsMapping'
import GenerateCPPMockData from '../../../lib/CPPMockData'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const cppData = await fetch(process.env.CPP_ACTIVE_BENEFIT_URL, {
        headers: new Headers({
          'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
        }),
      })
      let benefits = [MapCPPCard(await cppData.json())]
      if (!process.env.NO_MOCK_DATA) {
        benefits = benefits.concat(GenerateCPPMockData())
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
