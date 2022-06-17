import propTypes from 'prop-types'

/**
 * Displays the Status Badge at the top of the card
 */

export default function StatusBadge(props) {
  return (
    <div className="flex justify-end rounded-t-lg">
      <h2
        className={`font-medium font-display text-black text-lg px-5 py-1 w-full sm:w-1/3 sm:mr-14 rounded-t-lg sm:rounded-t-none sm:rounded-b-lg 
        ${props.color} `}
      >
        {props.status}
      </h2>
    </div>
  )
}

StatusBadge.propTypes = {
  /**
   * color to apply class for color to badge
   */
  color: propTypes.oneOf([
    'bg-status-inPayment',
    'bg-status-benefitUpdate',
    'bg-status-applicationReceived',
    'bg-status-hold',
    'bg-status-inactive',
  ]),
  /**
   * The status text to be displayed
   */
  status: propTypes.oneOfType([propTypes.string, propTypes.element]),
}
