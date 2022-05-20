export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      programCode: 'programCode',
      statusCode: 'statusCode',
      summaries: [
        { type: 'PaymentAmount', value: 30.32 },
        { type: 'NextPayment', value: 1616281200000 },
        { type: 'LatestStatus', value: 'Data Not Provided' },
      ],
      taskGroups: [
        { Header: 'paymentTasks', Tasks: [Array] },
        { Header: 'changeTasks', Tasks: [Array] },
      ],
      taskHeadingKey: 'paymentsTaxesAccount',
    })
  } else {
    res.status(405)
  }
  return res
}
