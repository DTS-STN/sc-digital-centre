import en from '../../locales/en'
import fr from '../../locales/fr'
import InfoSection from '../atoms/InfoSection'
import propTypes from 'prop-types'
import ActionButton from '../atoms/ActionButton'

export default function ProfileInfo(props) {
  const t = props.locale === 'en' ? en : fr
  return (
    <div className="w-full py-4 ">
      <div className="grid gap-y-8 gap-x-40 py-8 w-full md:grid-cols-2 ">
        {props.fields.map((item) => {
          return (
            <div key={item.title}>
              <InfoSection
                info={item.fields}
                title={item.title}
                editLink={item.editLink}
                editText={t.edit}
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
}
