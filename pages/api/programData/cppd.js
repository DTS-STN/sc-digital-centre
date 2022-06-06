import { MapCPPCard } from '../../../lib/BenefitsMapping'
import { GetProgramData } from './_middleware'

export default async function handler(req, res) {
  return GetProgramData(
    req,
    res,
    null,
    (mockObj) => mockObj.CPPD,
    (data) => MapCPPCard(data) //reuse CPP because they function the same
  )
}
