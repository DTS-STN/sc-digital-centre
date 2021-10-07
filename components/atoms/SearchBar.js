import PropTypes from 'prop-types'

/*
 *  Search Bar component
 */
export default function SearchBar(props) {
  return (
    <div className="flex flex-row">
      <input
        placeholder={props.placeholderText}
        type="text"
        className="flex placeholder-gray-600 border border-gray-300 py-1 px-3 w-48 xs:w-auto text-black"
      ></input>
      <button
        type="submit"
        aria-label={props.placeholderText}
        className={
          'flex text-white py-1 bg-blue-primary-deep border border-white ' +
          props.btnClasses
        }
      >
        {/* search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 block my-auto mx-[0.375rem]"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
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

  /*
   * Text for the placeholder/btn label text
   */
  placeholderText: PropTypes.string,
}
