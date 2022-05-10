import propTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import Link from 'next/link'

export default function ProfileInfoSection(props) {
  const t = props.locale === 'en' ? en : fr
  return (
    <>
      <h3 className="border-b border-gray-300 font-bold w-full">
        {props.title}
      </h3>
      <div className="max-w-lg">
        <div className="grid sm:grid-cols-2 gap-y-8 gap-x-40 py-8">
          {props.info.map((item) => {
            return (
              <div key={item.title}>
                <span className="flex justify-between">
                  <h2 className="font-bold">{item.title}</h2>
                  {item.moreInfoURL ? (
                    <Link href={item.moreInfoURL} passHref>
                      <a className="text-right underline text-blue-600 cursor-pointer hover:text-blue-800 visited:text-purple-600">
                        {t.moreInfo}
                      </a>
                    </Link>
                  ) : (
                    <button className="underline text-blue-600 cursor-pointer hover:text-blue-800 visited:text-purple-600">
                      {t.edit}
                    </button>
                  )}
                </span>
                {item.fields?.map((field) => (
                  <p key={field}>{field}</p>
                ))}
              </div>
            )
          })}
        </div>
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
