import { ACTIVE_OAS_TASKS } from '../../../contents/DashboardBenefitTasksConstants'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
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
    })
  } else {
    res.status(405)
  }
  return res
}
