import { MapCPPCard } from '../../../lib/BenefitsMapping'
import { GetProgramData } from './_middleware'

export default async function handler(req, res) {
  return GetProgramData(
    req,
    res,
    process.env.CPP_ACTIVE_BENEFIT_URL,
    (mockObj) => mockObj.CPP,
    (data) => MapCPPCard(data)
  )
}
