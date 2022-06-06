import { MapCPPCard } from '../../../lib/BenefitsMapping'
import { GetProgramData } from './_middleware'

export default async function handler(req, res) {
  return GetProgramData(
    req,
    res,
    null,
    (data) => MapArrayData(data, (item) => MapCPPCard(item)), //reuse CPP because they function the same
    (mockObj) => mockObj.CPPD
  )
}
