import PropTypes from 'prop-types'
import Link from 'next/link'

/**
 * Button component
 */
export function ActionButton({
  href,
  className,
  onClick,
  type,
  lang,
  id,
  text,
  children,
  ...rest
}) {
  //Styling for buttons and links
  const defaultStyle =
    'rounded-sm focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-4 bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light'

  return href ? (
    <Link href={href}>
      <a
        className={`${!className ? defaultStyle : className}`}
        onClick={onClick}
        role="button"
        draggable="false"
        lang={lang}
        {...rest}
        id={id}
      >
        {text}
        {children}
      </a>
    </Link>
  ) : (
    <button
      className={`${!className ? defaultStyle : className}`}
      onClick={onClick}
      type={type}
      lang={lang}
      {...rest}
      id={id}
    >
      {text}
      {children}
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
