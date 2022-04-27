///EI map
///programCode = programCode
///statusCode = claimStatusCode
///typeCode = enmBenefitType
///summaries = [ { PaymentAmount, netAmount },
///              { NextReport, nextRptDueDate },
///              { LatestStatus, publishDate, messageData } ]
///CPP map
///programCode = benefitCode
///statusCode = programCode
///typeCode = benefitType
///summaries = [ { PaymentAmount, netAmount },
///              { NextPayment, lastPaymentDate + PaymentProcessType },
///              { LatestStatus, null, null } ]
export default class UniversalBenefit {
  constructor(programCode, statusCode, typeCode, summaries) {
    this.programCode = programCode
    this.statusCode = statusCode
    this.typeCode = typeCode
    this.summaries = summaries // an array of BenefitSummaries
  }
}
