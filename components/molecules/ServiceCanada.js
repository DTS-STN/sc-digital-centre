import PropTypes from 'prop-types'
import { ActionButton } from '../atoms/ActionButton'

export const ServiceCanada = ({
  title,
  text,
  signInHref,
  signInText,
  createAccountHref,
  createAccountText,
}) => {
  return (
    <div>
      <h2 className="font-bold font-display text-2xl mb-4">{title}</h2>
      <p className="mb-4 font-body">{text}</p>
      <div className="grid grid-cols-1 gap-3 md:flex">
        <ActionButton
          id="signInMyAccountId"
          className="font-display text-xl shadow-md text-center rounded py-3 px-10 bg-deep-blue-solid text-white hover:bg-deep-blue-light md:mr-3"
          href={signInHref}
        >
          {signInText}
        </ActionButton>
        <ActionButton
          id="createMyAccountId"
          className="font-display text-xl shadow-md text-center rounded py-3 px-10 border border-gray-500 bg-gray-light text-deep-blue-solid hover:bg-gray-dark"
          href={createAccountHref}
        >
          {createAccountText}
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
  createAccountHref: PropTypes.string.isRequired,

  /**
   * The href that the Call-To-Action will send the user to
   */
  createAccountText: PropTypes.string.isRequired,
}
