import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
/**
 * Menu component
 */
export function Menu(props) {
  //Router
  const { asPath } = useRouter()
  const router = useRouter()

  return (
    <nav
      title="Menu"
      className="md:flex md:justify-between"
      data-cy="menu"
      role="navigation"
      aria-labelledby="mainSiteNav"
    >
      <div className="flex justify-between">
        <h1 className="text-2xl">Service Canada</h1>
        <h3 className="sr-only" id="mainSiteNav">
          Menu
        </h3>
        <Link href="/">
          <a className="border rounded bg-blue-700 text-white py-2 px-6 md:hidden">
            Login
          </a>
        </Link>
      </div>

      <div className="md:flex">
        <ul
          id="menuDropdown"
          className="flex items-center justify-evenly"
          role="menu"
        >
          {props.items.map((item, key) => {
            const exactURL = asPath === item.link // it's exactly this url

            return (
              <li
                key={key}
                className={`flex items-center justify-evenly cursor-pointer text-center h-14 w-1/3 ${
                  key === 0 || key === props.items.length - 1
                    ? 'border-t border-b '
                    : 'border'
                } border-gray-400 md:w-auto md:border-none md:px-5 md:h-12`}
                role="menuitem"
                aria-current={exactURL ? 'page' : null}
              >
                <Link href={item.link}>
                  <a className={`font-body text-base`}>{item.text}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <Link href="/">
          <a className="border rounded bg-blue-700 text-white py-2 px-6 hidden md:inline-block">
            Login
          </a>
        </Link>
      </div>
    </nav>
  )
}

Menu.propTypes = {
  /**
   * Menu title for small screens
   */
  menuButtonTitle: PropTypes.string.isRequired,

  /**
   * text for sign up button
   */
  signUpText: PropTypes.string.isRequired,

  /**
   * Array of Items for the menu
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text for the menu
       */
      text: PropTypes.string,

      /**
       * Link for the menu
       */
      link: PropTypes.string,
    })
  ).isRequired,
}
