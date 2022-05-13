import { EIStatus, EITypes } from '../constants/EIMappingCodes'
import { CPPStatus, CPPTypes } from '../constants/CPPMappingCodes'
import { ProgramCodes } from '../constants/ProgramCodes'
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
    summaries: summaries, // an array of BenefitSummaries
  }
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
        SummaryTypes.PaymentAmount,
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
  //convert to a data object so we can do date math
  let nextPayment = new Date(cppBenefitData.lastPaymentDate)
  if (cppBenefitData.paymentProcessType == 'Monthly') {
    //set it back to a string so it can seralize to JSON
    nextPayment = nextPayment.setMonth(nextPayment.getMonth() + 1)
  }
  let benefit = CreateGenericBenefitJSONForUserDisplay(
    ProgramCodes.CPP,
    CPPStatus.find((s) => s.value == cppBenefitData.programCode).status,
    CPPTypes.find((s) => s.value == cppBenefitData.benefitType).type,
    [
      CreateGenericBenefitSummaryForDisplay(
        SummaryTypes.PaymentAmount,
        cppBenefitData.netAmount
      ),
      CreateGenericBenefitSummaryForDisplay(
        SummaryTypes.NextPayment,
        nextPayment
      ),
      CreateGenericBenefitSummaryForDisplay(
        SummaryTypes.LatestStatus,
        'Data Not Provided'
      ),
    ]
  )
  return benefit
}
