import { CreateGenefitBenefitJSONForUserDisplayWithCPPData } from '../../../lib/BenefitsMapping'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const cppData = await fetch(process.env.CPP_ACTIVE_BENEFIT_URL, {
        headers: new Headers({
          'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
        }),
      })
      const benefit = CreateGenefitBenefitJSONForUserDisplayWithCPPData(
        await cppData.json()
      )
      res.status(200).json(benefit)
    } catch (e) {
      console.log(e)
      res.status(500)
    }
  } else {
    res.status(405)
  }
  return res
}
