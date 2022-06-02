import { ACTIVE_OAS_TASKS } from '../../../contents/DashboardBenefitTasksConstants'
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
      //Otherwise send this mock
      res.status(200).json([
        {
          programCode: 'oas',
          statusCode: 'inPayment',
          typeCode: 'OASBeneficial',
          summaries: [
            { type: 'LastNetPayment', value: 691.45 },
            { type: 'NextPayment', value: new Date('2021-09-30T00:00:00') },
            { type: 'LatestStatus', value: new Date('2021-09-15T00:00:00') },
          ],
          taskGroups: [ACTIVE_OAS_TASKS],
          taskHeadingKey: 'paymentsTaxesAccount',
        },
      ])
    }
  } else {
    res.status(405)
  }
  return res
}
