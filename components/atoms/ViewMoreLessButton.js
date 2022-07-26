import propTypes from 'prop-types'
import ActionButton from './ActionButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function ViewMoreLessButton(props) {
  return (
    <ActionButton
      className={
        'text-xl leading-8 text-blue-default hover:text-blue-hover ' +
        props.className
      }
      onClick={props.onClick}
      type="button"
      id={props.id}
      data-testid={props.dataTestid}
      aria-expanded={props.ariaExpanded}
    >
      <>
        <div className="flex items-center ">
          {props.icon ? (
            <FontAwesomeIcon
              icon={faCircleMinus}
              className={`text-3xl px-3 ${props.iconStyle}`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faCirclePlus}
              className={`text-3xl px-3 ${props.iconStyle}`}
            />
          )}
          <span className="text-left px-1">{props.caption}</span>
        </div>
      </>
    </ActionButton>
  )
}

ViewMoreLessButton.propTypes = {
  caption: propTypes.string.isRequired,
  icon: propTypes.bool,
  onClick: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  dataTestid: propTypes.string,
  ariaExpanded: propTypes.string,
  iconStyle: propTypes.string,
  className: propTypes.string,
}
