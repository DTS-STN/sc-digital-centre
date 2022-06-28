import propTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import Link from 'next/link'

export default function ProfileInfoSection(props) {
  const t = props.locale === 'en' ? en : fr
  return (
    <>
      <div className="grid gap-y-8 gap-x-40 py-8 w-full md:grid-cols-2 ">
        {props.info.map((item) => {
          return (
            <div key={item.title}>
              <span className="flex">
                <h2 className="font-bold text-2xl pb-4">{item.title}</h2>
              </span>
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
                <button className="mt-2 py-2 px-3 rounded border-r border-b border-gray-darker bg-gray-lighter  text-blue-default cursor-pointer">
                  {t.edit}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

ProfileInfoSection.propTypes = {
  /*
   *  Section Title
   */
  title: propTypes.string,
  /*
   *  Information
   */
  info: propTypes.array,
  /**
   * page locale
   */
  locale: propTypes.string,
}
