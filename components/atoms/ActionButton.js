import PropTypes from 'prop-types'
import Link from 'next/link'

/**
 * Button component
 */
export function ActionButton(props) {
  const { ...rest } = props
  //Styling for buttons and links
  const defaultStyle =
    'font-display rounded focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-10 whitespace-pre bg-deep-blue-solid text-white text-center border border-deep-blue-solid active:bg-deep-blue-dark hover:bg-bright-blue-dark grid place-items-center'

  return props.href ? (
    <Link href={props.href}>
      <a
        className={`${!props.className ? defaultStyle : props.className}`}
        onClick={props.onClick}
        role="button"
        draggable="false"
        lang={props.lang}
        {...rest}
        id={props.id}
      >
        {props.text}
        {props.children}
      </a>
    </Link>
  ) : (
    <button
      className={`${!props.className ? defaultStyle : props.className}`}
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

ActionButton.propTypes = {
  /**
   * The text that the button will display
   */
  text: PropTypes.string,

  /**
   * Style link as a button when there's a href
   */
  href: PropTypes.string,

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
  type: PropTypes.oneOf(['submit', 'reset']),

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
