export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      programCode: 'programCode',
      statusCode: 'statusCode',
      summaries: 'summaries',
      taskGroups: 'taskGroups',
      taskHeadingKey: 'taskHeadingKey',
    })
  } else {
    res.status(405)
  }
  return res
}
