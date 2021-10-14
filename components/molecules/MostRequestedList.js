import PropTypes from 'prop-types'
import { MostRequestedCard } from '../atoms/MostRequestedCard'

export const MostRequestedList = ({ requestedList }) => {
  const displayMostRequested = requestedList.map((requested) => (
    <li key={requested.id}>
      <MostRequestedCard
        title={requested.title}
        text={requested.text}
        callToActionText={requested.callToActionText}
        callToActionHref={requested.callToActionHref}
        btnId={requested.btnId}
      />
    </li>
  ))
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:pl-1">
      {requestedList ? displayMostRequested : ''}
    </ul>
  )
}

MostRequestedList.propTypes = {
  /**
   * The requested page that the card will display
   */
  requestedList: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Title for the card
       */
      title: PropTypes.string,

      /**
       * Text for the card
       */
      text: PropTypes.string,

      /**
       * CallToAction Text for the card
       */
      callToActionText: PropTypes.string,

      /**
       * Text for the card
       */
      callToActionHref: PropTypes.string,

      /**
       * Id for the callToAction btn on the card
       */
      btnId: PropTypes.string,
    })
  ).isRequired,
}
