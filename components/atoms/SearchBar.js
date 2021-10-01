import PropTypes from 'prop-types'

export default function SearchBar() {
  return (
    <div className="flex flex-row m-4">
      <input
        placeholder="Search Canada.ca"
        className="flex placeholder-gray-600 border border-gray-300 rounded-l-lg p-2"
      ></input>
      <button className="flex rounded-r-lg text-white text-center w-12 h-12 bg-blue-primary-deep">
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  )
}
