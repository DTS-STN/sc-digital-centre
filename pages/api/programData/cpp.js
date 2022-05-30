import { MapCPPCard } from '../../../lib/BenefitsMapping'
import { mockData } from '../../../mockdata/MockData'
import { GetProgramData } from './_middleware'

export default async function handler(req, res) {
  return GetProgramData(
    req,
    res,
    process.env.CPP_ACTIVE_BENEFIT_URL,
    (userId) => mockData[userId].CPP,
    (data) => MapCPPCard(data)
  )
}
