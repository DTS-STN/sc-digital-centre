import propTypes from 'prop-types'
import { StatusCodes } from '../../constants/StatusCodes'

/**
 * Displays the Status Badge at the top of the card
 */

export default function StatusBadge(props) {
  return (
    <div className="flex justify-end rounded-t-lg ">
      <h2
        className={`font-medium font-display text-black text-lg px-5 py-1 sm:mb-5 w-full sm:w-1/3 sm:mr-14 rounded-t-lg sm:rounded-t-none sm:rounded-b-lg  ${props.className} `}
      >
        <span className="sr-only">{props.program} </span>
        {props.status ?? 'No status found'}
      </h2>
    </div>
  )
}

StatusBadge.propTypes = {
  /**
   * className
   */
  className: propTypes.string,
  /**
   *
   */
  status: propTypes.string,
  program: propTypes.string,
  /**
   *
   */
  locale: propTypes.string,
}
