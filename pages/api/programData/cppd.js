import mockCppdInPayment from '../../../contents/mockdata/CppdInPayment.json'
import { ACTIVE_CPPD_TASKS } from '../../../contents/DashboardBenefitTasksConstants'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    ;(mockCppdInPayment.taskGroups = [
      { Header: 'paymentTasks', Tasks: ACTIVE_CPPD_TASKS },
    ]),
      res.status(200).json(mockCppdInPayment)
  } else {
    res.status(405)
  }
  return res
}
