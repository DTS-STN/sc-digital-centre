import { Link } from '@dts-stn/decd-design-system'
import propTypes from 'prop-types'
import { SummaryTypes } from '../../objects/UniversalBenefit'

export default function BenefitCardHeaderSummary(props) {
  const t = props.locale
  const typesWithLinks = [SummaryTypes.PaymentAmount, SummaryTypes.LatestStatus]

  return (
    <div className="w-full ">
      <div className="w-full  ">
        <p className="">{t[props.summary.type].title}</p>
        <p className="font-bold ">{props.summary.value}</p>
        <p className="font-bold ">{props.summary.status ?? null}</p>
        {!typesWithLinks.find((t) => t === props.summary.type) ? null : (
          <p className="">
            <Link
              text={t[props.summary.type].linkText}
              href={t[props.summary.type].link}
            />
          </p>
        )}
      </div>
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
