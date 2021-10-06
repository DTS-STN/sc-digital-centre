import PropTypes from 'prop-types'
import { ActionButton } from '../atoms/ActionButton'

export const MostRequestedCard = ({
  title,
  text,
  callToActionHref,
  callToActionText,
  btnId,
}) => {
  return (
    <div className="shadow-most-requested p-6">
      <h3 className="font-bold font-display text-xl mb-5">{title}</h3>
      <p className="mb-5">{text}</p>
      <ActionButton
        id={btnId}
        className="font-display text-xl font-semibold underline text-deep-blue-solid hover:text-blue-800 visited:text-purple-600"
        href={callToActionHref}
      >
        {callToActionText}
      </ActionButton>
    </div>
  )
}

MostRequestedCard.propTypes = {
  /**
   * The title that the card will display
   */
  title: PropTypes.string.isRequired,

  /**
   * The text that the card will display
   */
  text: PropTypes.string.isRequired,

  /**
   * The text that the Call-To-Action will display
   */
  callToActionText: PropTypes.string.isRequired,

  /**
   * The href that the Call-To-Action will send the user to
   */
  callToActionHref: PropTypes.string.isRequired,

  /**
   * The id for the button
   */
  btnId: PropTypes.string.isRequired,
}
