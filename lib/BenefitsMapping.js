import { CPPStatus, CPPTypes } from '../constants/CPPMappingCodes'
import { EIStatus, EITypes } from '../constants/EIMappingCodes'
import { ProgramCodes } from '../constants/ProgramCodes'
import { StatusCodes } from '../constants/StatusCodes'
import { SummaryTypes } from '../constants/SummaryTypes'
import { TASK_GROUPS } from '../contents/DashboardBenefitTasksConstants'

function MapBenefitToTaskGroups(programCode, statusCode) {
  const group = TASK_GROUPS.find(
    (tg) => tg.programCode === programCode && tg.statusCode === statusCode
  )
  return group
}

export function CreateGenericBenefitSummaryForDisplay(type, value, status) {
  let benefitSummary = {
    type: type, // will define what header text to go with it and any links if applicable
    value: value, // a date or amount, defined by the type
  }
  //only add the status object if it exists
  if (status) {
    benefitSummary.status = status //status is additional text for display
  }
  return benefitSummary
}

export function CreateGenericBenefitJSONForUserDisplay(
  programCode,
  statusCode,
  typeCode,
  summaries
) {
  const benefit = {
    programCode: programCode,
    statusCode: statusCode,
    typeCode: typeCode,
  }
  if (summaries) benefit.summaries = summaries
  const taskGroupMatch = MapBenefitToTaskGroups(programCode, statusCode)
  if (taskGroupMatch) {
    benefit.taskGroups = taskGroupMatch.tasksGroups
    benefit.taskHeadingKey = taskGroupMatch.taskHeadingKey
  }
  return benefit
}

///EI result object maping
// {
//     "claimStatusCode": 3433, // status
//     "enmBenefitType": 1, //active benefit type
//     "messageData": "Important message", //latest update
//     "messageId": 32, //latest update
//     "publishDate": "2021-02-21", //latest update
//     "nextRptDueDate": "2023-04-24", //next report due
//     "programCode": 4543, //program name
//     "netAmount": 32.21 //payment amount
// }
export function CreateGenefitBenefitJSONForUserDisplayWithEIData(
  eiBenefitData
) {
  let benefit = CreateGenericBenefitJSONForUserDisplay(
    ProgramCodes.EI,
    EIStatus.find((s) => s.value == eiBenefitData.claimStatusCode).status,
    EITypes.find((t) => t.value == eiBenefitData.enmBenefitType).type,
    [
      CreateGenericBenefitSummaryForDisplay(
        SummaryTypes.LastNetPayment,
        eiBenefitData.netAmount
      ),
      CreateGenericBenefitSummaryForDisplay(
        SummaryTypes.NextReport,
        eiBenefitData.nextRptDueDate
      ),
      CreateGenericBenefitSummaryForDisplay(
        SummaryTypes.LatestStatus,
        eiBenefitData.publishDate,
        eiBenefitData.messageData
      ),
    ]
  )
  return benefit
}

///CPP result object maping
// {
//     "programCode": 32294, //status
//     "benefitCode": 30320, //program name
//     "benefitType": "Beneficial", //active type
//     "benefitStatus": "Active", //latest update XXX
//     "lastPaymentDate": "2021-02-21", //last day paid
//     "finalPaymentDate": "2024-02-13", //last payment (future)
//     "netAmount": 30.32, // payment amount
//     "paymentProcessType": "Monthly" //process type
// }
export function CreateGenefitBenefitJSONForUserDisplayWithCPPData(
  cppBenefitData
) {
  const type = CPPTypes.find((s) => s.value === cppBenefitData.benefitType).type
  const status = CPPStatus.find(
    (s) => s.value == cppBenefitData.benefitStatus
  ).status
  let summaries

  switch (status) {
    case StatusCodes.inPayment:
      let nextPayment = new Date(cppBenefitData.lastPaymentDate)
      if (cppBenefitData.paymentProcessType == 'Monthly') {
        nextPayment = nextPayment.setMonth(nextPayment.getMonth() + 1)
      }
      summaries = [
        CreateGenericBenefitSummaryForDisplay(SummaryTypes.ActiveBenefit, type),
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.LastPaymentDate,
          cppBenefitData.lastPaymentDate
        ),
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.LastPayment,
          cppBenefitData.netAmount
        ),
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.NextPayment,
          nextPayment
        ),
      ]
      break

    case StatusCodes.applicationReceived:
    case StatusCodes.decisionSent:
      const lastPaymentDate = new Date(cppBenefitData.lastPaymentDate)
      summaries = [
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.RequestedBenefit,
          type
        ),
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.LatestStatus,
          cppBenefitData.lastStatusDate
        ),
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.EstimatedDecisionDate,
          lastPaymentDate.setMonth(lastPaymentDate.getMonth() + 1)
        ),
      ]
      break

    case StatusCodes.paymentHold:
      summaries = [
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.BenefitAffected,
          type
        ),
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.LatestStatus,
          cppBenefitData.lastStatusDate
        ),
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.PresentStatus,
          cppBenefitData.benefitStatus
        ),
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.LastPaymentDate,
          cppBenefitData.lastPaymentDate
        ),
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.LastPayment,
          cppBenefitData.netAmount
        ),
        CreateGenericBenefitSummaryForDisplay(
          SummaryTypes.NextPaymentDate,
          cppBenefitData.message
        ),
      ]

    default:
      break
  }
  const benefit = CreateGenericBenefitJSONForUserDisplay(
    ProgramCodes.CPP,
    status,
    type,
    summaries
  )
  return benefit
}
