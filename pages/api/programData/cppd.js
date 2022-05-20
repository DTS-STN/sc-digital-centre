import { ACTIVE_CPPD_TASKS } from '../../../contents/DashboardBenefitTasksConstants'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      programCode: 'cppd',
      statusCode: 'inPayment',
      typeCode: 'CPPBeneficial',
      summaries: [
        { type: 'PaymentAmount', value: 612.94 },
        { type: 'NextPayment', value: new Date('2021-09-30T00:00:00') },
        { type: 'LatestStatus', value: new Date('2021-07-15T00:00:00') },
      ],
      taskGroups: [{ Header: 'paymentTasks', Tasks: ACTIVE_CPPD_TASKS }],
      taskHeadingKey: 'paymentsTaxesAccount',
    })
  } else {
    res.status(405)
  }
  return res
}
