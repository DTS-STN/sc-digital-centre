import { ACTIVE_OAS_GIS_TASKS } from '../../../contents/DashboardBenefitTasksConstants'
import { getCookie } from 'cookies-next'
import { MapOASCard } from '../../../lib/BenefitsMapping'
import { mockData } from '../../../mockdata/MockData'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const userid = getCookie('userid', { req, res })
    if (userid) {
      //Mock userid response
      const userData = mockData[userid].OAS
      let benefits = []

      if (userid === 'default') {
        //default userid sends an array of each type
        userData.forEach((result) => {
          benefits.push(MapOASCard(result))
        })
      } else {
        //handle the other situations here
      }
      res.status(200).json(benefits)
    } else {
      //Interop response if/when added in the future
    }
  } else {
    res.status(405)
  }
  return res
}
