import en from '../../locales/en'
import fr from '../../locales/fr'
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
              <h2 className="font-bold text-2xl pb-4">{item.title}</h2>
              {item.fields?.map((field) => (
                <p key={field} className="text-xl">
                  {field}
                </p>
              ))}
              {item.moreInfoURL ? (
                <Link href={item.moreInfoURL} passHref>
                  <a className="text-right underline text-blue-600 cursor-pointer hover:text-blue-800 visited:text-purple-600">
                    {t.moreInfo}
                  </a>
                </Link>
              ) : (
                <ActionButton className="mt-2 py-2 px-3 rounded border-r border-b border-gray-darker bg-gray-lighter text-blue-default cursor-pointer">
                  {t.edit}
                </ActionButton>
              )}
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
