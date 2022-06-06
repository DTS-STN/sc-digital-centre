import { MapEICard } from '../../../lib/api/mapBenefits'
import { FetchProgramData, MapArrayData } from '../../../lib/api/programData'

export default async function handler(req, res) {
  return FetchProgramData(
    req,
    res,
    process.env.EI_ACTIVE_BENEFIT_URL,
    (data) => MapArrayData(data, (item) => MapEICard(item)),
    (mockObj) => mockObj.EI
  )
}
