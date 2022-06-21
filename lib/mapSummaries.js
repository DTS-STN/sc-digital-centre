import { SummaryTypes } from '../constants/SummaryTypes'
import { formatMoney, formatDate } from '../lib/Utils'

export function MapSummary(summaries, t, locale) {
  if (!summaries) return undefined
  return summaries.map((summary) => {
    const summaryStatus =
      summary.type === SummaryTypes.LatestStatus
        ? t.eiMessages[summary.status]
        : summary.status
    const summaryStatusClassName =
      summary.type === SummaryTypes.LatestStatus ? 'text-lg' : 'font-bold'
    let summaryValue = null
    let summaryValueClassName = null
    switch (summary.type) {
      case SummaryTypes.LastPayment:
      case SummaryTypes.LastNetPayment:
        summaryValue = formatMoney(summary.value, locale)
        summaryValueClassName = 'text-3xl'
        break
      case SummaryTypes.NextPayment:
      case SummaryTypes.NextReport:
      case SummaryTypes.LatestStatus:
      case SummaryTypes.EstimatedDecisionDate:
      case SummaryTypes.LastPaymentDate:
      case SummaryTypes.LatestStatusMessage:
      case SummaryTypes.TransactionDate:
        summaryValue = formatDate(summary.value, locale)
        summaryValueClassName = 'text-lg'
        break
      case SummaryTypes.RequestedBenefit:
      case SummaryTypes.BenefitAffected:
      case SummaryTypes.ActiveBenefit:
        summaryValue = t[summary.value]
        summaryValueClassName = 'text-lg'
        break
      case SummaryTypes.PresentStatus:
      case SummaryTypes.NextPaymentDate:
      case SummaryTypes.AgreementStatus:
        summaryValue = summary.value
        summaryValueClassName = 'text-lg'
      default:
        break
    }
    return {
      title: t[summary.type].title,
      status: summaryStatus,
      statusClassName: summaryStatusClassName,
      value: summaryValue,
      valueClassName: summaryValueClassName,
      link: t[summary.type].link,
      linkText: t[summary.type].linkText,
    }
  })
}
