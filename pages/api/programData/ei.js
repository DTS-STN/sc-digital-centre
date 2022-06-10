import { FetchProgramData } from '../../../lib/api/programData'

export default async function handler(req, res) {
  return FetchProgramData(
    req,
    res,
    process.env.EI_ACTIVE_BENEFIT_URL,
    (data) => data,
    (mockObj) => mockObj.EI
  )
}
