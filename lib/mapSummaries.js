import { SummaryTypes } from '../constants/SummaryTypes'
import { formatMoney, formatDate } from '../lib/Utils'

export function MapSummary(summaries, t, locale) {
  if (!summaries) return undefined
  return summaries.map((summary) => {
    const summaryStatus =
      summary.type === SummaryTypes.LatestStatus ||
      summary.type === SummaryTypes.LatestStatusMessage
        ? t.eiMessages[summary.extra]
        : summary.extra
    let summaryValue = null
    let summaryValueStyle = null
    switch (summary.type) {
      case SummaryTypes.LastPayment:
      case SummaryTypes.LastNetPayment:
        summaryValue = formatMoney(summary.value, locale)
        summaryValueStyle = 'text-4xl'
        break
      case SummaryTypes.NextPayment:
      case SummaryTypes.NextReport:
      case SummaryTypes.LatestStatus:
      case SummaryTypes.LatestStatusDate:
      case SummaryTypes.EstimatedDecisionDate:
      case SummaryTypes.LastPaymentDate:
      case SummaryTypes.TransactionDate:
        summaryValue = formatDate(summary.value, locale)
        break
      case SummaryTypes.RequestedBenefit:
      case SummaryTypes.BenefitAffected:
      case SummaryTypes.ActiveBenefit:
        summaryValue = t[summary.value]
        break
      case SummaryTypes.LatestStatusMessage:
        summaryValue = locale === 'en' ? summary.value?.en : summary.value?.fr
        break
      case SummaryTypes.PresentStatus:
      case SummaryTypes.NextPaymentDate:
      case SummaryTypes.AgreementStatus:
        summaryValue = summary.value
      default:
        break
    }
    return {
      title: t[summary.type].title,
      status: summaryStatus,
      value: summaryValue,
      link: t[summary.type].link,
      linkText: t[summary.type].linkText,
      valueStyle: summaryValueStyle,
    }
  })
}
