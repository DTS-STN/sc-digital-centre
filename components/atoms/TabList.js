import propTypes from 'prop-types'

/**
 * Displays the TabList on the page
 */

export default function TabList(props) {
  const renderTabs = () => {
    return props.titles.map((title, index) => (
      <li
        className="mr-2 cursor-pointer"
        role="tab"
        key={index}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.onClick(index)
          }
        }}
      >
        <a
          className={
            props.genericTabStyle +
            ` ${
              props.tabSelected === index
                ? props.selectedTabStyle
                : props.unselectedTabStyle
            }`
          }
          onClick={() => props.onClick(index)}
        >
          {title}
        </a>
      </li>
    ))
  }
  return (
    <ul className={props.containerStyle} role="tablist">
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
  /**
   * ul container styling
   */
  containerStyle: propTypes.string,
  /**
   * selected tab styling
   */
  selectedTabStyle: propTypes.string,
  /**
   * unselected tab styling
   */
  unselectedTabStyle: propTypes.string,
  /**
   * default tab styling
   */
  defaultTabStyle: propTypes.string,
}
