import { MapCPPCard } from '../../../lib/api/mapBenefits'
import { FetchProgramData, MapArrayData } from '../../../lib/api/programData'

export default async function handler(req, res) {
  return FetchProgramData(
    req,
    res,
    process.env.CPP_ACTIVE_BENEFIT_URL,
    (data) => MapArrayData(data, (item) => MapCPPCard(item)),
    (mockObj) => mockObj.CPP
  )
}
