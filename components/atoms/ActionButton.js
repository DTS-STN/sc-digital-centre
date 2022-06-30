import PropTypes from 'prop-types'
import Link from 'next/link'

/**
 * Button component
 */
export default function ActionButton(props) {
  const { ...rest } = props
  //Styling for buttons and links
  const defaultStyle =
    'inline-block text-xl my-4 py-1.5 px-3.5 rounded bg-gray-light text-blue-default hover:bg-grey-medium hover:text-blue-hover hover:cursor-pointer'

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
      aria-expanded={`${props.ariaExpanded ? props.ariaExpanded : undefined}`}
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
  /**
   * Aria expanded state
   */
  ariaExpanded: PropTypes.string,
}
