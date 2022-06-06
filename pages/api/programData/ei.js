import { MapEICard } from '../../../lib/api/mapBenefits'
import { GetProgramData } from './_middleware'

export default async function handler(req, res) {
  return GetProgramData(
    req,
    res,
    process.env.EI_ACTIVE_BENEFIT_URL,
    (data) => MapArrayData(data, (item) => MapEICard(item)),
    (mockObj) => mockObj.EI
  )
}
