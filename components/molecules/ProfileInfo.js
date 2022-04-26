import ProfileInfoSection from '../atoms/ProfileInfoSection'
import propTypes from 'prop-types'

export default function ProfileInfo(props) {
  return (
    <div className="max-w-lg px-8 py-4 bg-gray-100">
      {props.fields?.map((field) => (
        <ProfileInfoSection
          key={field.title}
          title={field.title}
          info={field.info}
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
}
