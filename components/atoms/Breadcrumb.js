import PropTypes from 'prop-types'
import Link from 'next/link'

/**
 *  Breadcrumb component
 */
export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumbs">
      <ul className="block text-deep-blue-dark text-base font-body">
        <li className="inline-block min-w-0 max-w-full truncate px-2">
          <Link href="https://www.canada.ca/">
            <a className="text-sm hover:text-blue-hover visited:text-purple-solid underline">
              Canada.ca
            </a>
          </Link>
        </li>

        {props.items
          ? props.items.map((item, key) => {
              return (
                <li
                  key={key}
                  className="inline-block min-w-0 max-w-full truncate px-2"
                >
                  <span className="inline-block align-middle text-deep-blue-dark icon-cheveron-right mx-4" />
                  <Link href={item.link}>
                    <a className="text-sm hover:text-blue-hover text-blue-default visited:text-purple-solid underline">
                      {item.text}
                    </a>
                  </Link>
                </li>
              )
            })
          : null}
      </ul>
    </nav>
  )
}

Breadcrumb.propTypes = {
  /**
   * Array of Items for the breadcrumb
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text for the breadcrumb
       */
      text: PropTypes.string,

      /**
       * Link for the breadcrumb
       */
      link: PropTypes.string,
    })
  ),
}
