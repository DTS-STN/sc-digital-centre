import PropTypes from 'prop-types'

import SearchBar from './SearchBar'

export default function SearchCard(props) {
  return (
    <div className="flex flex-col sm:flex-row w-full mx-12">
      <div className="flex flex-col w-1/2 p-12 text-white bg-blue-primary-deep">
        <h3 className="text-xl"> insert Header text right here </h3>

        <p>
          {' '}
          some paragraph text some paragraph text some paragraph text some
          paragraph text some paragraph text some paragraph text some paragraph
          text some paragraph text some paragraph text some paragraph text some
          paragraph text some paragraph text some paragraph text some paragraph
          text some paragraph text{' '}
        </p>

        <SearchBar placeholderText="Service Canada Labs" btnText="Search" />

        <a className="text-sm underline">
          {' '}
          A link to all benefits and services
        </a>
      </div>
      <img className="h-full w-1/2" src="/landscape.png" alt="Generic Image" />
    </div>
  )
}

SearchCard.PropTypes = {}
