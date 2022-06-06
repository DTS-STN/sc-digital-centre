import { MapOASCard } from '../../../lib/BenefitsMapping'
import { GetProgramData } from './_middleware'

export default async function handler(req, res) {
  return GetProgramData(
    req,
    res,
    null,
    (mockObj) => mockObj.OAS,
    (data) => MapOASCard(data)
  )
}
