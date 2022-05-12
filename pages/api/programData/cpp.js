import { CreateGenefitBenefitJSONForUserDisplayWithCPPData } from '../../../lib/BenefitsMapping'
import GenerateCPPMockData from '../../../lib/CPPMockData'

export default async function GetCPPProgramData() {
  try {
    const cppData = await fetch(process.env.CPP_ACTIVE_BENEFIT_URL, {
      headers: new Headers({
        'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
      }),
    })
    let jsonData = [
      CreateGenefitBenefitJSONForUserDisplayWithCPPData(await cppData.json()),
    ]
    if (!process.env.NO_MOCK_DATA)
      jsonData = jsonData.concat(GenerateCPPMockData())
    return jsonData
  } catch (e) {
    console.log(e)
    return null
  }
}
