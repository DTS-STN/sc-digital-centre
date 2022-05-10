import propTypes from 'prop-types'
import { SummaryTypes } from '../../objects/UniversalBenefit'
import { formatDate } from '../organisms/DashboardUtils'

export default function BenefitCardHeaderSummary(props) {
  const t = props.locale
  const typesWithLinks = [SummaryTypes.PaymentAmount, SummaryTypes.LatestStatus]

  const getBenefitCardValue = () => {
    switch (props.summary.type) {
      case SummaryTypes.PaymentAmount:
        return (
          <p className="text-3xl">
            {t.netAmount.replace('{0}', props.summary.value)}
          </p>
        )
        break
      case SummaryTypes.NextPayment:
      case SummaryTypes.NextReport:
      case SummaryTypes.LatestStatus:
        return <p className="text-lg">{formatDate(props.summary.value)}</p>
        break
      default:
        return null
        break
    }
  }

  return (
    <div className="w-full">
      <p className="font-bold">{t[props.summary.type].title}</p>
      {getBenefitCardValue()}
      <p className="font-bold">{props.summary.status ?? null}</p>
      {!typesWithLinks.find((t) => t === props.summary.type) ? null : (
        <a
          href={t[props.summary.type].link}
          className="mt-1 text-link-blue-default underline text-base hover:text-link-blue-hover"
        >
          {t[props.summary.type].linkText}
        </a>
      )}
    </div>
  )
}

BenefitCardHeaderSummary.propTypes = {
  locale: propTypes.string.isRequired,
  summary: propTypes.shape({
    type: propTypes.oneOf(SummaryTypes).isRequired,
    value: propTypes.string.isRequired,
  }),
}
