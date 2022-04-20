import propTypes from 'prop-types'
import ActionButton from './ActionButton'

export default function ViewMoreLessButton(props) {
  return (
    <ActionButton
      className="text-xl leading-8 pl-5 py-5 sm:pl-10 underline text-link-blue-default hover:text-link-blue-hover"
      onClick={props.onClick}
      type="submit"
      id={props.id}
      data-testid={props.dataTestid}
    >
      <>
        <img
          src="/images/dashboard/view-more-less-icon.svg"
          alt=""
          className={props.plus ? 'rotate-45 inline mr-2' : 'inline mr-2'}
        />
        {props.caption}
      </>
    </ActionButton>
  )
}

ViewMoreLessButton.propTypes = {
  caption: propTypes.string.isRequired,
  plus: propTypes.bool,
  onClick: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  dataTestid: propTypes.string,
}
