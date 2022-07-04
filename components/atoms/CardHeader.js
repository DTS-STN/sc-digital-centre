import PropTypes from 'prop-types'

export default function CardHeader(props) {
  return (
    <h3 className="font-bold font-display text-4xl sm:text-6xl py-8 sm:py-6">
      {props.locale === 'fr' ? (
        <span className="sr-only">{props.summary}</span>
      ) : null}
      {props.text}
      {props.locale === 'en' ? (
        <span className="sr-only">{props.summary}</span>
      ) : null}
    </h3>
  )
}

CardHeader.propTypes = {
  /**
   * The text that the card will display in the header
   */
  text: PropTypes.string.isRequired,

  /**
   * Summary text for screen readers
   */
  summary: PropTypes.string,

  /**
   * Locale to determine text order for screen reader summary
   */
  locale: PropTypes.string,
}
