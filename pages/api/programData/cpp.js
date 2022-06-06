import { MapCPPCard } from '../../../lib/api/mapBenefits'
import { GetProgramData } from './_middleware'

export default async function handler(req, res) {
  return GetProgramData(
    req,
    res,
    process.env.CPP_ACTIVE_BENEFIT_URL,
    (data) => MapArrayData(data, (item) => MapCPPCard(item)),
    (mockObj) => mockObj.CPP
  )
}
