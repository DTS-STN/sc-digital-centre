import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActionButton } from '../atoms/ActionButton'
import en from '../../locales/en'
import fr from '../../locales/fr'
/**
 * Menu component
 */
export function Menu(props) {
  //Router
  const { asPath } = useRouter()

  const t = props.language === 'en' ? en : fr

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
        <h2 className="sr-only" id="mainSiteNav">
          Menu
        </h2>
        {/* Mobile login button */}
        <ActionButton
          id="mobileLoginBtn"
          href="/"
          className="border rounded bg-deep-blue-solid text-white py-2 px-6 md:hidden"
        >
          {t.login}
        </ActionButton>
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
        {/* Desktop login button */}
        <ActionButton
          id="desktopLoginBtn"
          href="/"
          className="border rounded bg-deep-blue-solid text-white px-6 hidden md:flex md:items-center"
        >
          {t.login}
        </ActionButton>
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
   * Current locale
   */
  language: PropTypes.string.isRequired,
}
