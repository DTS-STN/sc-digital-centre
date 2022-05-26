import propTypes from 'prop-types'
import ActionButton from './ActionButton'

export default function ViewMoreLessButton(props) {
  return (
    <ActionButton
      className="text-xl leading-8 py-5 pl-2 md:pl-6 underline text-link-blue-default hover:text-link-blue-hover"
      onClick={props.onClick}
      type="button"
      id={props.id}
      data-testid={props.dataTestid}
      aria-expanded={props.ariaExpanded}
    >
      <>
        <div className="flex items-center ">
          {props.icon ? (
            <img
              className="px-2 w-12 h-12"
              src="/images/dashboard/collapse-icon.svg"
              alt=""
            />
          ) : (
            <img
              className="px-2 w-12 h-12"
              src="/images/dashboard/expand-icon.svg"
              alt=""
            />
          )}
          <span className="text-left">{props.caption}</span>
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
}
