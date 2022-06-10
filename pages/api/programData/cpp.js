import { FetchProgramData } from '../../../lib/api/programData'

export default async function handler(req, res) {
  return FetchProgramData(
    req,
    res,
    process.env.CPP_ACTIVE_BENEFIT_URL,
    (data) => data,
    (mockObj) => mockObj.CPP
  )
}
