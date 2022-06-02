import { ACTIVE_SEB_TASKS } from '../../../contents/DashboardBenefitTasksConstants'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      programCode: 'seb',
      statusCode: 'inPayment',
      typeCode: 'SEBBeneficial',
      summaries: [
        { type: 'LastNetPayment', value: 691.01 },
        { type: 'NextPayment', value: new Date('2021-09-30T00:00:00') },
        { type: 'LatestStatus', value: new Date('2021-09-15T00:00:00') },
      ],
      taskGroups: [ACTIVE_SEB_TASKS],
      taskHeadingKey: 'commonActions',
    })
  } else {
    res.status(405)
  }
  return res
}
