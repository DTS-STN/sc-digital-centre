import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActionButton } from '../atoms/ActionButton'

/**
 * Menu component
 */
export default function Menu(props) {
  //Router
  const { asPath } = useRouter()

  return (
    <nav
      title="Menu"
      className="md:flex md:justify-between layout-container"
      data-cy="menu"
      role="navigation"
      aria-labelledby="mainSiteNav"
    >
      <div className="flex w-full justify-between py-6  md:py-1 mb-14 md:mb-0 lg:px-0">
        <div className="h-10 w-full sticky my-auto">
          <Link href="/home">
            <a
              className="text-2xl pt-1 font-bold font-display "
              data-cy="homeButton"
            >
              <h1>Service Canada</h1>
            </a>
          </Link>
          <h2 className="sr-only" id="mainSiteNav">
            Menu
          </h2>
        </div>
        <div className="flex self-baseline absolute w-full left-0 mt-12 md:relative md:w-full md:mt-1">
          <ul
            id="menuDropdown"
            className="flex items-center justify-evenly w-full"
            role="menu"
          >
            {props.items.map((item, key) => {
              const exactURL = asPath === item.link // it's exactly this url

              return (
                <li
                  key={key}
                  className={`flex items-center justify-evenly cursor-pointer text-center h-14 w-full border-gray-400 sm:whitespace-pre md:w-auto md:border-none md:px-4 md:h-12 lg:pr-0 ${
                    key === 0 || key === props.items.length - 1
                      ? 'border-t border-b '
                      : 'border'
                  }`}
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
        </div>

        <div className="h-10 sticky my-auto">
          <ActionButton
            id="loginBtn"
            href="/"
            className="border rounded font-body bg-deep-blue-solid text-white py-1 px-4 xs:px-6 h-10 flex items-center"
          >
            {props.loginText}
          </ActionButton>
        </div>
      </div>
    </nav>
  )
}

Menu.propTypes = {
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
  /**
   * Translated text
   */
  loginText: PropTypes.string.isRequired,
}
