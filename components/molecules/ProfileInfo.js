import ProfileInfoSection from '../atoms/ProfileInfoSection'
import propTypes from 'prop-types'

export default function ProfileInfo(props) {
  return (
    <div className="bg-gray-100 w-full px-8 py-4">
      {props.fields?.map((field) => (
        <ProfileInfoSection
          key={field.title}
          title={field.title}
          info={field.info}
          locale={props.locale}
        />
      ))}
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
}
