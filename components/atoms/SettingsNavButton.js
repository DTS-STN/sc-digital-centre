import PropTypes from 'prop-types'

/**
 * Button component
 */
export default function SettingsNavButton(props) {
  const { ...rest } = props
  //Styling for buttons and links
  const defaultStyle =
    'bg-gray-lighter font-normal	text-black text-center font-display w-fit px-10 py-1 whitespace-nowrap rounded-xl hover:bg-bright-blue-lighthover'
  const activeStyle =
    'bg-bright-blue-lighthover font-normal text-black text-center font-display w-fit px-10 py-1 whitespace-nowrap rounded-xl hover:bg-bright-blue-lighthover'
  return (
    <button
      className={`${
        !props.className
          ? !props.active
            ? defaultStyle
            : activeStyle
          : props.className
      }`}
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

SettingsNavButton.propTypes = {
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
