import { getCookie } from 'cookies-next'
import { MapSEBCard } from '../../../lib/BenefitsMapping'
import { mockData } from '../../../mockdata/MockData'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    //get data
    let userData
    const userid = getCookie('userid', { req, res })
    if (userid) {
      //Mock userid response
      userData = mockData[userid].SEB
    } else {
      //Mock interop response
      //return res.status(501) //errors not properly handled in client
    }

    //format data
    if (userData) {
      const benefits = MapSEBCard(userData)
      res.status(200).json(benefits)
    } else {
      res.status(204).end()
    }
  } else {
    res.status(405)
  }
  return res
}
