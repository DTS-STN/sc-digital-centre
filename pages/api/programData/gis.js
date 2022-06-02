import { RECEIVED_OAS_GIS_TASKS } from '../../../contents/DashboardBenefitTasksConstants'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      programCode: 'gis',
      statusCode: 'applicationReceived',
      typeCode: 'GISBeneficial',
      summaries: [
        { type: 'LastNetPayment', value: 577.92 },
        { type: 'NextPayment', value: new Date('2021-08-30T00:00:00') },
        { type: 'LatestStatus', value: new Date('2021-08-15T00:00:00') },
      ],
      taskGroups: [RECEIVED_OAS_GIS_TASKS],
      taskHeadingKey: 'commonActions',
    })
  } else {
    res.status(405)
  }
  return res
}
