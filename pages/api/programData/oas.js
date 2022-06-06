import { MapOASCard } from '../../../lib/api/mapBenefits'
import { FetchProgramData, MapArrayData } from '../../../lib/api/programData'

export default async function handler(req, res) {
  return FetchProgramData(
    req,
    res,
    null,
    (data) => MapArrayData(data, (item) => MapOASCard(item)),
    (mockObj) => mockObj.OAS
  )
}
