import { MapCPPCard } from '../../../lib/api/mapBenefits'
import { FetchProgramData, MapArrayData } from '../../../lib/api/programData'

export default async function handler(req, res) {
  return FetchProgramData(
    req,
    res,
    null,
    (data) => MapArrayData(data, (item) => MapCPPCard(item)), //reuse CPP because they function the same
    (mockObj) => mockObj.CPPD
  )
}
