import propTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import { SummaryTypes } from '../../constants/SummaryTypes'
import { formatDate, formatMoney } from '../../lib/Utils'

export default function BenefitCardHeaderSummary(props) {
  const t = props.locale === 'en' ? en : fr
  const typesWithLinks = [
    SummaryTypes.PaymentAmount,
    SummaryTypes.LatestStatus,
    SummaryTypes.PresentStatus,
    SummaryTypes.LastPaymentDate,
    SummaryTypes.LastNetPayment,
    SummaryTypes.LatestStatusMessage,
  ]

  const getBenefitCardValue = () => {
    switch (props.summary.type) {
      case SummaryTypes.PaymentAmount:
      case SummaryTypes.LastPayment:
      case SummaryTypes.LastNetPayment:
        return (
          <p className="text-3xl">
            {formatMoney(props.summary.value, props.locale)}
          </p>
        )
        break
      case SummaryTypes.NextPayment:
      case SummaryTypes.NextReport:
      case SummaryTypes.LatestStatus:
      case SummaryTypes.EstimatedDecisionDate:
      case SummaryTypes.LastPaymentDate:
      case SummaryTypes.LatestStatusMessage:
        return (
          <p className="text-lg">
            {formatDate(props.summary.value, props.locale)}
          </p>
        )
        break
      case SummaryTypes.RequestedBenefit:
      case SummaryTypes.BenefitAffected:
      case SummaryTypes.ActiveBenefit:
        return <p className="text-lg">{t[props.summary.value]}</p>
        break
      case SummaryTypes.PresentStatus:
      case SummaryTypes.NextPaymentDate:
        return <p className="text-lg">{props.summary.value}</p>
      default:
        return null
        break
    }
  }

  const getBenefitCardStatus = () => {
    switch (props.summary.type) {
      case SummaryTypes.LatestStatus:
        return (
          <p className="text-lg">
            {t.eiMessages[props.summary.status] ?? null}
          </p>
        )
      default:
        return <p className="font-bold">{props.summary.status ?? null}</p>
    }
  }

  return (
    <li className="w-full">
      <p className="font-bold">{t[props.summary.type].title}</p>
      {getBenefitCardStatus()}
      {getBenefitCardValue()}

      {!typesWithLinks.find((t) => t === props.summary.type) ? null : (
        <a
          href={t[props.summary.type].link}
          className="mt-1 text-blue-default underline text-base hover:text-blue-hover"
        >
          {t[props.summary.type].linkText}
        </a>
      )}
    </li>
  )
}

BenefitCardHeaderSummary.propTypes = {
  locale: propTypes.string.isRequired,
  summary: propTypes.shape({
    type: propTypes.string.isRequired,
    value: propTypes.any.isRequired,
  }),
}
