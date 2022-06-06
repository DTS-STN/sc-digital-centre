import { MapEICard } from '../../../lib/BenefitsMapping'
import { GetProgramData } from './_middleware'

export default async function handler(req, res) {
  return GetProgramData(
    req,
    res,
    process.env.EI_ACTIVE_BENEFIT_URL,
    (mockObj) => mockObj.EI,
    (data) => MapEICard(data)
  )
}
