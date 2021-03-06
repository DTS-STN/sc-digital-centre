import PropTypes from 'prop-types'
import Link from 'next/link'

/**
 * Button component
 */
export default function ActionButton(props) {
  //keep some props out of the "...rest"
  const { secondary, useShadow, ...rest } = props
  //Styling for buttons and links
  const defaultStyle =
    'font-display rounded focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-10 whitespace-pre bg-blue-primary text-white text-center border border-blue-default active:bg-blue-pressed hover:bg-bright-blue-dark grid place-items-center'
  const secondaryStyle =
    'inline-block my-4 py-2.5 px-3.5 rounded bg-gray-light text-blue-default hover:bg-grey-medium hover:text-blue-hover hover:cursor-pointer'
  let style = secondary ? secondaryStyle : defaultStyle
  if (useShadow) style += ' shadow-sm shadow-gray-darker focus:shadow-none'

  return props.href ? (
    <Link href={props.href}>
      <a
        className={props.className ?? style}
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
      aria-expanded={props.ariaExpanded ?? undefined}
      className={props.className ?? style}
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

  secondary: PropTypes.bool,
  useShadow: PropTypes.bool,

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
