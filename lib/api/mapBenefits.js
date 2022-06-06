import {
  CPPPrograms,
  CPPStatus,
  CPPTypes,
} from '../../constants/CPPMappingCodes'
import { EIStatus, EITypes } from '../../constants/EIMappingCodes'
import { OASStatus, OASTypes } from '../../constants/OASMappingCodes'
import { GISStatus, GISTypes } from '../../constants/GISMappingCodes'
import { ProgramCodes } from '../../constants/ProgramCodes'
import { TypeCodes } from '../../constants/ProgramTypeCodes'
import { StatusCodes } from '../../constants/StatusCodes'
import { SummaryTypes } from '../../constants/SummaryTypes'
import { TASK_GROUPS } from '../../contents/DashboardBenefitTasksConstants'

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
          SummaryTypes.LatestStatusMessage,
          eiBenefitData.publishDate,
          eiBenefitData.messageData
        ),
      ]
      break

    case StatusCodes.applicationReceived:
      const estimatedDateOfDecision = new Date(eiBenefitData.nextRptDueDate)
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(
          SummaryTypes.LatestStatus,
          eiBenefitData.publishDate,
          eiBenefitData.messageId
        ),
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
// also used by CPPD, not task list is differnt (handled in MapBenefit based on program & status)
export function MapCPPCard(cppBenefitData) {
  const program = CPPPrograms.find(
    (p) => p.value === cppBenefitData.programCode
  ).program
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
        FormatSummary(SummaryTypes.NextPayment, nextPayment),
        FormatSummary(SummaryTypes.LastPayment, cppBenefitData.netAmount),
      ]
      break

    case StatusCodes.applicationReceived:
    case StatusCodes.decisionSent:
      const lastStatusDate = new Date(cppBenefitData.lastStatusDate)
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, cppBenefitData.lastStatusDate),
        FormatSummary(
          SummaryTypes.EstimatedDecisionDate,
          lastStatusDate.setMonth(lastStatusDate.getMonth() + 1)
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
  const benefit = MapBenefit(program, status, type, summaries)
  return benefit
}

export function MapSEBCard(sebResult) {
  //seb only has one status and type
  const benefit = MapBenefit(
    ProgramCodes.SEB,
    StatusCodes.activeAgreement,
    TypeCodes.SEB,
    [
      FormatSummary(SummaryTypes.LastNetPayment, sebResult.paymentAmount),
      FormatSummary(SummaryTypes.NextPayment, sebResult.paymentDate),
      FormatSummary(SummaryTypes.LatestStatus, sebResult.statusUpdated),
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
      const lastStatusDate = new Date(oasBenefitData.lastStatusDate)
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, oasBenefitData.lastStatusDate),
        FormatSummary(
          SummaryTypes.EstimatedDecisionDate,
          lastStatusDate.setMonth(lastStatusDate.getMonth() + 1)
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

///GIS result object maping
// {
//     "programCode": gis,
//     "benefitCode": 30320, //program name
//     "benefitType": "Unknown", //active type
//     "benefitStatus": "Active", //latest update XXX
//     "lastPaymentDate": "2021-02-21", //last day paid
//     "finalPaymentDate": "2024-02-13", //last payment (future)
//     "netAmount": 30.32, // payment amount
//     "paymentProcessType": "Monthly" //process type
// }
export function MapGISCard(gisBenefitData) {
  console.log(gisBenefitData)
  const type = GISTypes.find((s) => s.value === gisBenefitData.benefitType).type
  const status = GISStatus.find(
    (s) => s.value == gisBenefitData.benefitStatus
  ).status
  let summaries = []

  switch (status) {
    case StatusCodes.inPayment:
      //convert to a date object so we can do date math
      let nextPayment = new Date(gisBenefitData.lastPaymentDate)
      if (gisBenefitData.paymentProcessType == 'Monthly') {
        //set it back to a string so it can seralize to JSON
        nextPayment = nextPayment.setMonth(nextPayment.getMonth() + 1)
      }
      summaries = [
        FormatSummary(SummaryTypes.ActiveBenefit, type),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          gisBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, gisBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPayment, nextPayment),
      ]
      break

    case StatusCodes.applicationReceived:
    case StatusCodes.decisionSent:
      const lastStatusDate = new Date(gisBenefitData.lastStatusDate)
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, gisBenefitData.lastStatusDate),
        FormatSummary(
          SummaryTypes.EstimatedDecisionDate,
          lastStatusDate.setMonth(lastStatusDate.getMonth() + 1)
        ),
      ]
      break

    case StatusCodes.paymentHold:
      summaries = [
        FormatSummary(SummaryTypes.BenefitAffected, type),
        FormatSummary(SummaryTypes.LatestStatus, gisBenefitData.lastStatusDate),
        FormatSummary(SummaryTypes.PresentStatus, gisBenefitData.benefitStatus),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          gisBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, gisBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPaymentDate, gisBenefitData.message),
      ]

    default:
      break
  }

  const benefit = MapBenefit(ProgramCodes.GIS, status, type, summaries)
  return benefit
}
