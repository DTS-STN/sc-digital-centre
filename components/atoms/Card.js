import PropTypes from 'prop-types'
import ActionButton from './ActionButton'

export default function Card(props) {
  return (
    <div className="flex flex-col place-content-between w-full shadow-card p-6">
      <div>
        <h3 className="font-bold font-display text-xl">{props.title}</h3>
        <p className="my-5">{props.text}</p>
      </div>

      <ActionButton
        id={props.btnId}
        className="font-display text-xl underline text-white bg-gray-500 rounded mx-10 md:mx-0 md:px-4 py-2 flex justify-center "
        href={props.callToActionHref}
      >
        {props.callToActionText}
      </ActionButton>
    </div>
  )
}

Card.propTypes = {
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
