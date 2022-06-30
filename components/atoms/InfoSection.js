import propTypes from 'prop-types'
import ActionButton from './ActionButton'

export default function InfoSection(props) {
  return (
    <div>
      <h3 className="mt-14 pb-6 font-bold text-3xl">{props.title}</h3>
      {props.info.map((item, index) => {
        return (
          <p key={index} className="text-lg">
            {item}
          </p>
        )
      })}
      <ActionButton
        id={`edit-${props.title}`}
        href={props.editLink}
        text={props.editText}
        useShadow
        secondary
      />
    </div>
  )
}

InfoSection.propTypes = {
  /*
   *  Section Title
   */
  title: propTypes.string.isRequired,
  /*
   *  Information
   */
  info: propTypes.arrayOf(propTypes.string).isRequired,
  /**
   * link to edit the info
   */
  editLink: propTypes.string,
  editText: propTypes.string,
}
