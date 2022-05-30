import { MapCPPDCard } from '../../../lib/BenefitsMapping'
import { mockData } from '../../../mockdata/MockData'
import { GetProgramData } from './_middleware'

export default async function handler(req, res) {
  return GetProgramData(
    req,
    res,
    null,
    (userId) => mockData[userId].CPPD,
    (data) => MapCPPDCard(data)
  )
}
