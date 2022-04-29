import propTypes from 'prop-types'

/**
 * Displays the Status Badge at the top of the card
 */

export default function StatusBadge(props) {
  return (
    <div className="flex  justify-end rounded-t-lg ">
      <h2
        className={`font-bold font-display text-white text-lg px-5 py-1 sm:mb-5 w-full sm:w-1/3 sm:mr-14 rounded-t-lg sm:rounded-t-none sm:rounded-b-lg ${props.className}`}
      >
        {props.status}
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
}
