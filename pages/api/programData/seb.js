import { MapSEBCard } from '../../../lib/api/mapBenefits'
import { FetchProgramData } from '../../../lib/api/programData'

export default async function handler(req, res) {
  return FetchProgramData(
    req,
    res,
    null,
    (result) => MapSEBCard(result),
    (mockDataSet) => mockDataSet.SEB
  )
}
