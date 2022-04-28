export class BenefitSummaries {
  constructor(type, value, status) {
    this.type = type // will define what header text to go with it and any links if applicable
    this.value = value // a date or amount, defined by the type
    this.status = status //a status shown in addition if applicable
  }
}

export const SummaryTypes = {
  PaymentAmount: 'PA',
  NextReport: 'NR',
  LatestStatus: 'LS',
  NextPayment: 'NP',
}
