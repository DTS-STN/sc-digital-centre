import PropTypes from 'prop-types'

import en from '../../locales/en'
import fr from '../../locales/fr'

/*
 *  Search Bar component
 */
export default function SearchBar(props) {
  const t = locale === 'en' ? en : fr
  const btnWidthClass = props.btnText ? ' w-24 ' : ' w-8 '
  return (
    <div className="flex flex-row m-4">
      <input
        placeholder={t.searchPlaceholder}
        type="text"
        className="flex placeholder-gray-600 border border-gray-300 rounded-l py-1 px-3"
      ></input>
      <button
        type="submit"
        aria-label={t.searchPlaceholder}
        className={
          'flex rounded-r text-white py-1 bg-blue-primary-deep ' + btnWidthClass
        }
      >
        {/* search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 block my-auto mx-[0.375rem]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        {props.btnText ?? ''}
      </button>
    </div>
  )
}

SearchBar.propTypes = {
  /*
   * Text for the button
   */
  btnText: PropTypes.string,
}
