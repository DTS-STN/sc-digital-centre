import { FetchProgramData } from '../../../lib/api/programData'

export default async function handler(req, res) {
  return FetchProgramData(
    req,
    res,
    null,
    (data) => data,
    (mockObj) => mockObj.GIS
  )
}
