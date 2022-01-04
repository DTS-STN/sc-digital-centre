import PropTypes from 'prop-types'
import ActionButton from '../atoms/ActionButton'

export default function ServiceCanada(props) {
  return (
    <div data-testid="serviceCanada">
      <h2 className="font-bold font-display text-2xl mb-4">{props.title}</h2>
      <p className="mb-4 font-body">{props.text}</p>
      <div className="flex justify-around md:grid md:grid-cols-1 md:gap-3">
        <ActionButton
          id="signInMyAccountId"
          className="font-display text-sm xs:text-base shadow-md text-center rounded py-2 px-1 xs:px-3 bg-deep-blue-solid text-white hover:bg-deep-blue-light"
          href={props.signInHref}
        >
          {props.signInText}
        </ActionButton>
        <ActionButton
          id="createMyAccountId"
          className="font-display text-sm xs:text-base shadow-md text-center rounded py-2 border px-1 xs:px-3 border-gray-500 bg-gray-light text-deep-blue-solid hover:bg-gray-dark"
          href={props.createAccountHref}
        >
          {props.createAccountText}
        </ActionButton>
      </div>
    </div>
  )
}

ServiceCanada.propTypes = {
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
  signInText: PropTypes.string.isRequired,

  /**
   * The href that the Call-To-Action will send the user to
   */
  signInHref: PropTypes.string.isRequired,

  /**
   * The text that the Call-To-Action will display
   */
  createAccountText: PropTypes.string.isRequired,

  /**
   * The href that the Call-To-Action will send the user to
   */
  createAccountHref: PropTypes.string.isRequired,
}
