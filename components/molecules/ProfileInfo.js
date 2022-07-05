import InfoSection from '../atoms/InfoSection'
import propTypes from 'prop-types'

export default function ProfileInfo(props) {
  return (
    <div className="w-full">
      <div className="grid gap-y-8 gap-x-40 pb-20 w-full md:grid-cols-2 ">
        {props.fields.map((item) => {
          return (
            <div key={item.title}>
              <InfoSection
                info={item.fields}
                title={item.title}
                editLink={item.editLink}
                editText={props.editText}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

ProfileInfo.propTypes = {
  /*
   *  fields in the profile sections
   */
  fields: propTypes.array,
  /**
   * page locale
   */
  locale: propTypes.string,
  /**
   *  text to be displayed in edit buttons
   */
  editText: propTypes.string,
}
