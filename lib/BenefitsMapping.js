import { CPPStatus, CPPTypes } from '../constants/CPPMappingCodes'
import { CPPDStatus, CPPDTypes } from '../constants/CPPDMappingCodes'
import { EIStatus, EITypes } from '../constants/EIMappingCodes'
import { ProgramCodes } from '../constants/ProgramCodes'
import { SummaryTypes } from '../constants/SummaryTypes'
import { TASK_GROUPS } from '../contents/DashboardBenefitTasksConstants'

function MapBenefitToTaskGroups(programCode, statusCode) {
  const group = TASK_GROUPS.find(
    (tg) => tg.programCode === programCode && tg.statusCode === statusCode
  )
  return group
}

export function FormatSummary(type, value, status) {
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

export function MapBenefit(programCode, statusCode, typeCode, summaries) {
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
export function MapEICard(eiBenefitData) {
  let benefit = MapBenefit(
    ProgramCodes.EI,
    EIStatus.find((s) => s.value == eiBenefitData.claimStatusCode).status,
    EITypes.find((t) => t.value == eiBenefitData.enmBenefitType).type,
    [
      FormatSummary(SummaryTypes.LastNetPayment, eiBenefitData.netAmount),
      FormatSummary(SummaryTypes.NextReport, eiBenefitData.nextRptDueDate),
      FormatSummary(
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
export function MapCPPCard(cppBenefitData) {
  //convert to a data object so we can do date math
  let nextPayment = new Date(cppBenefitData.lastPaymentDate)
  if (cppBenefitData.paymentProcessType == 'Monthly') {
    //set it back to a string so it can seralize to JSON
    nextPayment = nextPayment.setMonth(nextPayment.getMonth() + 1)
  }
  const type = CPPTypes.find((s) => s.value === cppBenefitData.benefitType).type
  const benefit = MapBenefit(
    ProgramCodes.CPP,
    CPPStatus.find((s) => s.value == cppBenefitData.programCode).status,
    type,
    [
      FormatSummary(SummaryTypes.ActiveBenefit, type),
      FormatSummary(
        SummaryTypes.LastPaymentDate,
        cppBenefitData.lastPaymentDate
      ),
      FormatSummary(SummaryTypes.LastPayment, cppBenefitData.netAmount),
      FormatSummary(SummaryTypes.NextPayment, nextPayment),
    ]
  )
  return benefit
}

///CPPD result object maping
// {
//     "programCode": 32295, //status WARNING: unsure of correct CPPD program code
//     "benefitCode": 30320, //program name
//     "benefitType": "Beneficial", //active type
//     "benefitStatus": "Active", //latest update XXX
//     "lastPaymentDate": "2021-02-21", //last day paid
//     "finalPaymentDate": "2024-02-13", //last payment (future)
//     "netAmount": 30.32, // payment amount
//     "paymentProcessType": "Monthly" //process type
// }
export function MapCPPDCard(cppdBenefitData) {
  //convert to a data object so we can do date math
  let nextPayment = new Date(cppdBenefitData.lastPaymentDate)
  if (cppdBenefitData.paymentProcessType == 'Monthly') {
    //set it back to a string so it can seralize to JSON
    nextPayment = nextPayment.setMonth(nextPayment.getMonth() + 1)
  }
  const type = CPPDTypes.find(
    (s) => s.value === cppdBenefitData.benefitType
  ).type
  const benefit = MapBenefit(
    ProgramCodes.CPPD,
    CPPDStatus.find((s) => s.value == cppdBenefitData.programCode).status,
    type,
    [
      FormatSummary(SummaryTypes.ActiveBenefit, type),
      FormatSummary(
        SummaryTypes.LastPaymentDate,
        cppdBenefitData.lastPaymentDate
      ),
      FormatSummary(SummaryTypes.LastPayment, cppdBenefitData.netAmount),
      FormatSummary(SummaryTypes.NextPayment, nextPayment),
    ]
  )
  return benefit
}
