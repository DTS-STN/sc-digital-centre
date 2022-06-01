import { ACTIVE_CPPD_TASKS } from '../../../contents/DashboardBenefitTasksConstants'
import { getCookie } from 'cookies-next'
import { MapCPPDCard } from '../../../lib/BenefitsMapping'
import { mockData } from '../../../mockdata/MockData'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    //get data
    let userData
    const userid = getCookie('userid', { req, res })
    if (userid) {
      //Mock userid response
      userData = mockData[userid].CPPD
    } else {
      //Mock interop response
      //return res.status(501) //errors not properly handled in client
    }

    //format data

    const benefits = []
    if (userData) {
      userData.forEach((result) => {
        benefits.push(MapCPPDCard(result))
      })
    }
    res.status(200).json(benefits)
  } else {
    res.status(405)
  }
  return res
}
