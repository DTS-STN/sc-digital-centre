import { MapSEBCard } from '../../../lib/BenefitsMapping'
import { FetchProgramData } from './_middleware'

export default async function handler(req, res) {
  return FetchProgramData(
    req,
    res,
    null,
    (result) => MapSEBCard(result),
    (mockDataSet) => mockDataSet.SEB
  )
}
