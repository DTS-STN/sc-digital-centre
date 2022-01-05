import PropTypes from 'prop-types'
import ActionButton from '../atoms/ActionButton'

export default function ContactCard(props) {
  return (
    <div className="p-6" id={props.cardId}>
      <img
        className="md:m-auto md:float-none float-left"
        width="75"
        height="75"
        src={props.iconSrc}
        alt={props.iconAlt}
      />
      <div className="ml-24 md:ml-0 md:text-center md:float-none">
        <h3 className="mb-5 text-blue-800 font-bold text-2xl  ">
          {props.title}
        </h3>
        <p className="mb-5 ">{props.text}</p>
        <div className="flex">
          <ActionButton
            id={`${props.cardId}_btn`}
            className="md:m-auto rounded-sm bg-gray-solid text-black focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 py-2 px-4 border-b-2 border-r-2 border-gray-dark active:bg-gray-300 hover:bg-gray-400 text-center shadow-md"
            text={props.linkText}
            href={props.linkHref}
          />
        </div>
      </div>
    </div>
  )
}

ContactCard.propTypes = {
  /**
   * The icon that will be shown
   */
  iconSrc: PropTypes.string.isRequired,
  /**
   * The Alt title that the icon will show when hovering and no-images
   */
  iconAlt: PropTypes.string.isRequired,

  /**
   * The title that the card will display
   */
  title: PropTypes.string.isRequired,

  /**
   * The text that the card will display
   */
  text: PropTypes.string.isRequired,

  /**
   * The text that the button will display
   */
  linkText: PropTypes.string.isRequired,

  /**
   * The href that the button will open
   */
  linkHref: PropTypes.string.isRequired,

  /**
   * The id for the card
   */
  cardId: PropTypes.string.isRequired,
}
