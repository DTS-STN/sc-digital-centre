import { CPPStatus, CPPTypes } from '../constants/CPPMappingCodes'
import { CPPDStatus, CPPDTypes } from '../constants/CPPDMappingCodes'
import { EIStatus, EITypes } from '../constants/EIMappingCodes'
import { OASStatus, OASTypes } from '../constants/OASMappingCodes'
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
  const type = EITypes.find((t) => t.value == eiBenefitData.enmBenefitType).type
  const status = EIStatus.find(
    (s) => s.value == eiBenefitData.claimStatusCode
  ).status
  let summaries

  switch (status) {
    case StatusCodes.inPayment:
    case StatusCodes.benefitUpdate:
      summaries = [
        FormatSummary(SummaryTypes.LastNetPayment, eiBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextReport, eiBenefitData.nextRptDueDate),
        FormatSummary(
          SummaryTypes.LatestStatus,
          eiBenefitData.publishDate,
          eiBenefitData.messageData
        ),
      ]
      break

    case StatusCodes.applicationReceived:
      const estimatedDateOfDecision = new Date(eiBenefitData.nextRptDueDate)
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, eiBenefitData.publishDate),
        FormatSummary(
          SummaryTypes.EstimatedDecisionDate,
          estimatedDateOfDecision.setMonth(
            estimatedDateOfDecision.getMonth() + 1
          )
        ),
      ]
      break

    case StatusCodes.exhausted:
      summaries = [
        FormatSummary(SummaryTypes.LastPayment, eiBenefitData.netAmount),
        FormatSummary(SummaryTypes.LatestStatus, eiBenefitData.publishDate),
      ]
      break

    default:
      break
  }
  const benefit = MapBenefit(ProgramCodes.EI, status, type, summaries)
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
        FormatSummary(SummaryTypes.ActiveBenefit, type),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          cppBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, cppBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPayment, nextPayment),
      ]
      break

    case StatusCodes.applicationReceived:
    case StatusCodes.decisionSent:
      const lastPaymentDate = new Date(cppBenefitData.lastPaymentDate)
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, cppBenefitData.lastStatusDate),
        FormatSummary(
          SummaryTypes.EstimatedDecisionDate,
          lastPaymentDate.setMonth(lastPaymentDate.getMonth() + 1)
        ),
      ]
      break

    case StatusCodes.paymentHold:
      summaries = [
        FormatSummary(SummaryTypes.BenefitAffected, type),
        FormatSummary(SummaryTypes.LatestStatus, cppBenefitData.lastStatusDate),
        FormatSummary(SummaryTypes.PresentStatus, cppBenefitData.benefitStatus),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          cppBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, cppBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPaymentDate, cppBenefitData.message),
      ]

    default:
      break
  }
  const benefit = MapBenefit(ProgramCodes.CPP, status, type, summaries)
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

///OAS result object maping
// {
//     "programCode": oas,
//     "benefitCode": 30320, //program name
//     "benefitType": "Unknown", //active type
//     "benefitStatus": "Active", //latest update XXX
//     "lastPaymentDate": "2021-02-21", //last day paid
//     "finalPaymentDate": "2024-02-13", //last payment (future)
//     "netAmount": 30.32, // payment amount
//     "paymentProcessType": "Monthly" //process type
// }
export function MapOASCard(oasBenefitData) {
  const type = OASTypes.find((s) => s.value === oasBenefitData.benefitType).type
  const status = OASStatus.find(
    (s) => s.value == oasBenefitData.benefitStatus
  ).status
  let summaries = []

  switch (status) {
    case StatusCodes.inPayment:
      //convert to a date object so we can do date math
      let nextPayment = new Date(oasBenefitData.lastPaymentDate)
      if (oasBenefitData.paymentProcessType == 'Monthly') {
        //set it back to a string so it can seralize to JSON
        nextPayment = nextPayment.setMonth(nextPayment.getMonth() + 1)
      }
      summaries = [
        FormatSummary(SummaryTypes.ActiveBenefit, type),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          oasBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, oasBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPayment, nextPayment),
      ]
      break

    case StatusCodes.applicationReceived:
    case StatusCodes.decisionSent:
      const lastPaymentDate = new Date(oasBenefitData.lastPaymentDate)
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, oasBenefitData.lastStatusDate),
        FormatSummary(
          SummaryTypes.EstimatedDecisionDate,
          lastPaymentDate.setMonth(lastPaymentDate.getMonth() + 1)
        ),
      ]
      break

    case StatusCodes.paymentHold:
      summaries = [
        FormatSummary(SummaryTypes.BenefitAffected, type),
        FormatSummary(SummaryTypes.LatestStatus, oasBenefitData.lastStatusDate),
        FormatSummary(SummaryTypes.PresentStatus, oasBenefitData.benefitStatus),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          oasBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, oasBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPaymentDate, oasBenefitData.message),
      ]

    default:
      break
  }

  const benefit = MapBenefit(ProgramCodes.OAS, status, type, summaries)
  return benefit
}
