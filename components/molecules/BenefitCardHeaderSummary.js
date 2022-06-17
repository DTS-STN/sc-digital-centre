import propTypes from 'prop-types'

export default function BenefitCardHeaderSummary(props) {
  return (
    <li className="w-full">
      {/* Title */}
      <p className="font-bold">{props.title}</p>

      {/* Optional Status */}
      {props.status ? (
        <p className={props.statusClassName}>{props.status}</p>
      ) : null}

      {/* Summary */}
      <p className={props.valueClassName}>{props.value}</p>

      {/* Optional Link */}
      {props.link ? (
        <a
          href={props.link}
          className="mt-1 text-blue-default underline text-base hover:text-blue-hover"
        >
          {props.linkText}
        </a>
      ) : null}
    </li>
  )
}

BenefitCardHeaderSummary.propTypes = {
  title: propTypes.string.isRequired,
  status: propTypes.string,
  statusClassName: propTypes.string,
  value: propTypes.any.isRequired,
  valueClassName: propTypes.string,
  link: propTypes.string,
  linkText: propTypes.string,
}
