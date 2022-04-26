import PropTypes from 'prop-types'

/**
 * Button component
 */
export default function BackButton(props) {
  const { ...rest } = props
  //Styling for buttons and links

  return (
    <button
      className="font-normal text-center font-display w-fit text-base bg-gray-100 p-2 px-4 rounded-md text-link-blue-button mb-2"
      onClick={props.onClick}
      type={props.type}
      lang={props.lang}
      {...rest}
      id={props.id}
    >
      {props.text}
      {props.children}
    </button>
  )
}

BackButton.propTypes = {
  /**
   * The text that the button will display
   */
  text: PropTypes.string,

  /**
   * Identify which button being clicked
   */
  id: PropTypes.string.isRequired,

  /**
   * Lang attribute for links that do not match the language of the top level document
   */
  lang: PropTypes.string,
  /**
   * the type of the button
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * CSS that overrides default styling
   */
  className: PropTypes.string,

  /**
   * any other elements you want to add to the button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  /**
   * ...rest
   *   Any other attribute not explicity coded, like: dataCy, dataCyButton, analyticsTracking, data-testid, aria stuff, etc.
   */
}
