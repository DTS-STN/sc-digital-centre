import { CreateGenefitBenefitJSONForUserDisplayWithCPPData } from '../../../lib/BenefitsMapping'

export default async function GetCPPProgramData() {
  try {
    const cppData = await fetch(process.env.CPP_ACTIVE_BENEFIT_URL, {
      headers: new Headers({
        'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
      }),
    })
    return CreateGenefitBenefitJSONForUserDisplayWithCPPData(
      await cppData.json()
    )
  } catch (e) {
    console.log(e)
    return null
  }
}
