import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useState } from 'react'

/*
 *  Search Bar component
 */
export default function SearchBar(props) {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const submitSearch = (e) => {
    e.preventDefault()

    //This is to redirect user
    if (props.onSubmitHref) {
      router.push({
        pathname: props.onSubmitHref,
        query: { q: encodeURIComponent(search) },
      })
    }

    // Here is where we would emit the search to parent component in order to filter the content fragments.
  }

  return (
    <form className="flex" onSubmit={submitSearch}>
      <input
        placeholder={props.placeholderText}
        type="text"
        defaultValue={props.inputText}
        className="block placeholder-gray-dark py-1 px-3 w-36 xs:w-48 sm:w-auto text-black"
        onChange={(e) => setSearch(e.target.value)}
        data-cy={props.dataCyInput}
      />
      <button
        type="submit"
        aria-label={props.placeholderText}
        className={
          'inline-block align-middle text-white w-auto py-1 pr-2 bg-deep-blue-solid ' +
          props.btnClasses
        }
        data-cy={props.dataCyButton}
      >
        {/* search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block my-auto mx-[0.375rem]"
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
    </form>
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

  /*
   * Page to send the user after on submit. Defaults to none
   */
  onSubmitHref: PropTypes.string,

  /*
   * Any text that should exist in the input beforehand
   */
  inputText: PropTypes.string,
  /**
   * Test id for e2e test
   */
  dataCyInput: PropTypes.string,
  /**
   * Test id for e2e test
   */
  dataCyButton: PropTypes.string,
}
