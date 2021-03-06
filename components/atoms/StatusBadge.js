import propTypes from 'prop-types'

/**
 * Displays the Status Badge at the top of the card
 */

export default function StatusBadge(props) {
  if (props.hidden) return null
  return (
    <div className="flex justify-end rounded-t-lg">
      <h2
        className={`text-black text-xl font-medium px-5 py-1.5 w-full sm:w-1/2 sm:mr-14 rounded-t-lg sm:rounded-t-none sm:rounded-b-2xl 
        ${props.color} `}
      >
        <span className="sr-only">{props.srDescription} </span>
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
    'bg-green-medium',
    'bg-yellow-medium',
    'bg-brighter-blue-medium',
    'bg-gray-medium',
  ]),

  /**
   * The status text to be displayed
   */
  status: propTypes.string.isRequired,

  /**
   * The screen reader description
   */
  srDescription: propTypes.string.isRequired,

  /**
   * Hide Status badge
   */
  hidden: propTypes.bool,
}
