import propTypes from 'prop-types'

export default function BenefitCardHeaderSummary(props) {
  return (
    <li className="py-4">
      {/* Title */}
      <p className="text-xl mb-3">{props.title}</p>

      {/* Optional Status */}
      {props.status ? (
        <p className="text-3xl font-bold">{props.status}</p>
      ) : null}

      {/* Summary */}
      <p className={`font-bold ${props.valueStyle ?? 'text-3xl'}`}>
        {props.value}
      </p>

      {/* Optional Link */}
      {props.link ? (
        <a
          href={props.link}
          className="text-xl mt-4 underline text-blue-default hover:text-blue-hover"
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
  value: propTypes.any.isRequired,
  link: propTypes.string,
  linkText: propTypes.string,
  valueStyle: propTypes.string,
}
