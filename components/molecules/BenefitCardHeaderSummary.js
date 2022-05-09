import { Link } from '@dts-stn/decd-design-system'
import propTypes from 'prop-types'
import { SummaryTypes } from '../../objects/UniversalBenefit'
import en from '../../locales/en'
import fr from '../../locales/fr'
import { formatDate } from '../organisms/DashboardUtils'

export default function BenefitCardHeaderSummary(props) {
  const t = props.locale
  const typesWithLinks = [SummaryTypes.PaymentAmount, SummaryTypes.LatestStatus]

  const getBenefitCardValue = () => {
    switch (props.summary.type) {
      case SummaryTypes.PaymentAmount:
        return t.netAmount.replace('{0}', props.summary.value)
        break
      case SummaryTypes.NextPayment:
      case SummaryTypes.NextReport:
      case SummaryTypes.LatestStatus:
        return formatDate(props.summary.value)
        break
      default:
        return null
        break
    }
  }

  return (
    <div>
      <p>{t[props.summary.type].title}</p>
      <p
        className={
          props.summary.type === SummaryTypes.PaymentAmount ? 'font-bold' : null
        }
      >
        {getBenefitCardValue()}
      </p>
      <p className="font-bold">{props.summary.status ?? null}</p>
      {!typesWithLinks.find((t) => t === props.summary.type) ? null : (
        <p>
          <Link
            text={t[props.summary.type].linkText}
            href={t[props.summary.type].link}
          />
        </p>
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
