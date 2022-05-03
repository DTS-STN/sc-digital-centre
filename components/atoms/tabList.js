import propTypes from 'prop-types'

/**
 * Displays the TabList on the page
 */

export default function TabList(props) {
  const renderTabs = () => {
    return props.titles.map((title, index) => (
      <li className="mr-2" role="tab" key={index}>
        <button
          className={`inline-block  text-lg py-3 px-4 text-center ${
            props.tabSelected === index
              ? 'bg-gray-100 active border-b-2 border-b-bright-blue-lighthover'
              : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50'
          } `}
          onClick={() => props.onClick(index)}
        >
          {title}
        </button>
      </li>
    ))
  }
  return (
    <ul className="flex flex-wrap border-b border-gray-200" role="tablist">
      {renderTabs()}
    </ul>
  )
}

TabList.propTypes = {
  /**
   * Phase stage in the TabList
   */
  titles: propTypes.array,
  /**
   * Callback for a click event on the button
   */
  onClick: propTypes.func,
  /**
   * Current tab selected
   */
  tabSelected: propTypes.number,
}
