import propTypes from 'prop-types'

export default function BenefitCardHeaderSummary(props) {
  return (
    <li className="w-full">
      {/* Title */}
      <p className="font-bold">{props.summary.title}</p>

      {/* Optional Status */}
      {props.summary.status ? (
        <p className={props.summary.statusClassName}>{props.summary.status}</p>
      ) : null}

      {/* Summary */}
      <p className={props.summary.valueClassName}>{props.summary.value}</p>

      {/* Optional Link */}
      {props.summary.link ? (
        <a
          href={props.summary.link}
          className="mt-1 text-link-blue-default underline text-base hover:text-link-blue-hover"
        >
          {props.summary.linkText}
        </a>
      ) : null}
    </li>
  )
}

BenefitCardHeaderSummary.propTypes = {
  summary: propTypes.shape({
    type: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    status: propTypes.string,
    statusClassName: propTypes.string,
    value: propTypes.any.isRequired,
    valueClassName: propTypes.string,
    link: propTypes.string,
    linkText: propTypes.string,
  }),
}
