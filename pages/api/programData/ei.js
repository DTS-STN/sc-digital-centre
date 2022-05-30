import { MapEICard } from '../../../lib/BenefitsMapping'
import { mockData } from '../../../mockdata/MockData'
import { GetProgramData } from './_middleware'

export default async function handler(req, res) {
  return GetProgramData(
    req,
    res,
    process.env.EI_ACTIVE_BENEFIT_URL,
    (userId) => mockData[userId].EI,
    (data) => MapEICard(data)
  )
}
