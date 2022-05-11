import { CreateGenefitBenefitJSONForUserDisplayWithEIData } from '../../../lib/BenefitsMapping'

export default async function GetEIProgramData() {
  try {
    const eiData = await fetch(process.env.EI_ACTIVE_BENEFIT_URL, {
      headers: new Headers({
        'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
      }),
    })
    return CreateGenefitBenefitJSONForUserDisplayWithEIData(await eiData.json())
  } catch (e) {
    console.log(e)
    return null
  }
}
