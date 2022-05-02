import propTypes from 'prop-types'
import { SummaryTypes } from '../../objects/UniversalBenefit'

export default function BenefitCardHeaderSummary(props) {
  const t = props.locale
  let typesWithLinks = [SummaryTypes.PaymentAmount, SummaryTypes.LatestStatus]

  return (
    <div>
      <p>{t[props.summary.type].title}</p>
      <p className="font-bold">
        {props.summary.value}
        <br />
        {props.summary.status ?? null}
      </p>
      {!typesWithLinks.find((t) => t == props.summary.type) ? null : (
        <p>
          <a href={t[props.summary.type].link}>
            {t[props.summary.type].linkText}
          </a>
        </p>
      )}
    </div>
  )
}

BenefitCardHeaderSummary.propTypes = {
  locale: propTypes.object.isRequired,
  summary: propTypes.object.isRequired,
}
