import propTypes from 'prop-types'
import { StatusCodes } from '../../constants/StatusCodes'
import en from '../../locales/en'
import fr from '../../locales/fr'

/**
 * Displays the Status Badge at the top of the card
 */

export default function StatusBadge(props) {
  const t = props.locale === 'en' ? en : fr
  return (
    <div className="flex justify-end rounded-t-lg">
      <h2
        className={`font-medium font-display text-black text-lg px-5 py-1 w-full sm:w-1/3 sm:mr-14 rounded-t-lg sm:rounded-t-none sm:rounded-b-lg ${
          props.className
        }
        ${
          props.status === StatusCodes.inPayment
            ? 'bg-status-inPayment'
            : props.status === StatusCodes.benefitUpdate
            ? 'bg-status-benefitUpdate'
            : props.status === StatusCodes.applicationReceived ||
              props.status === StatusCodes.decisionSent
            ? 'bg-status-applicationReceived'
            : props.status == StatusCodes.paymentHold
            ? 'bg-status-hold'
            : 'bg-status-inactive'
        }`}
      >
        <span className="sr-only">{t[props.programCode]} </span>
        {t[props.status] ?? 'No status found'}
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
  programCode: propTypes.string,
  /**
   *
   */
  locale: propTypes.string,
}
