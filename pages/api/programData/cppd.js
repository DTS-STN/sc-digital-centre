import { ACTIVE_CPPD_TASKS } from '../../../contents/DashboardBenefitTasksConstants'
import { getCookie } from 'cookies-next'
import { CreateGenefitBenefitJSONForUserDisplayWithCPPData } from '../../../lib/BenefitsMapping'
import { mockData } from '../../../lib/MockData'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const userid = getCookie('userid', { req, res })
    if (userid) {
      //Mock userid response
      const userData = mockData[userid].CPPD
      const benefits =
        CreateGenefitBenefitJSONForUserDisplayWithCPPData(userData)
      res.status(200).json(benefits)
    } else {
      //Mock interop response
      res.status(200).json({
        programCode: 'cppd',
        statusCode: 'inPayment',
        typeCode: 'CPPBeneficial',
        summaries: [
          { type: 'LastNetPayment', value: '612.94' },
          { type: 'NextPayment', value: '2021-09-30T00:00:00.000Z' },
          { type: 'LatestStatus', value: '2021-07-15T00:00:00.000Z' },
        ],
        taskGroups: [
          {
            Header: 'paymentTasks',
            Tasks: [
              {
                task: 'allPaymentsTask',
                taskIcon: '/images/dashboard/oas-payment-icon.svg',
                taskLink: 'allPaymentsTaskLink',
              },
            ],
          },
        ],
        taskGroups: [{ Header: 'paymentTasks', Tasks: ACTIVE_CPPD_TASKS }],
        taskHeadingKey: 'paymentsTaxesAccount',
      })
    }
  } else {
    res.status(405)
  }
  return res
}
