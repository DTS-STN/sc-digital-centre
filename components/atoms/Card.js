import PropTypes from 'prop-types'
import { ActionButton } from './ActionButton'

export const Card = ({
  title,
  tag,
  text,
  callToActionHref,
  callToActionText,
  btnId,
}) => {
  return (
    <div className="flex flex-col place-content-between w-full shadow-card p-6">
      <div>
        <h2 className="font-bold font-display text-xl">{title}</h2>
        {/* <p className="">{tag}</p> */}
        <p className="my-5">{text}</p>
      </div>

      <ActionButton
        id={btnId}
        className="font-display text-xl underline text-white bg-gray-500 rounded mx-10 md:mx-0 md:px-4 py-2 flex justify-center "
        href={callToActionHref}
      >
        {callToActionText}
      </ActionButton>
    </div>
  )
}

Card.propTypes = {
  /**
   * The title that the card will display
   */
  title: PropTypes.string.isRequired,

  /**
   * The tag that the card will display
   */
  tag: PropTypes.string,

  /**
   * The text that the card will display
   */
  //text: PropTypes.string.isRequired,

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
