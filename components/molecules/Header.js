import React from 'react'
import propTypes from 'prop-types'
import Link from 'next/link'
import Menu from '../molecules/Menu'
import { useRouter } from 'next/router'

export default function Header(props) {
  const router = useRouter()
  const currentRouteQueryParams = router.query
  const { t } = props

  const [langToggleLink, setLangToggleLink] = React.useState()
  React.useEffect(() => {
    let updatedLangToggleLink
    if (props.toggleLangLink && router?.route && router.locale) {
      updatedLangToggleLink = {
        pathname: props.toggleLangLink,
      }
    }
    setLangToggleLink(updatedLangToggleLink)
  }, [router?.route, router.locale, router.query, props.toggleLangLink])

  return (
    <>
      <nav
        role="navigation"
        aria-label={t.skipToMainContent}
        className="skip-main"
      >
        <a
          id="skipToMainContent"
          className="bg-custom-blue-dark text-white px-2 focus:outline-black-solid hover:bg-gray-dark"
          href="#wb-cont"
          draggable="false"
        >
          {t.skipToMainContent}
        </a>
      </nav>

      <header>
        <div className="layout-container flex-col flex md:flex md:flex-row justify-between">
          <div className="flex flex-row justify-between items-center lg:mt-7">
            <a href={t.gocLink}>
              <img
                className="h-5 w-auto xs:h-6 sm:h-8 md:h-8 lg:h-7 xl:h-8 "
                src={
                  props.language === 'en'
                    ? '/sig-blk-en.svg'
                    : '/sig-blk-fr.svg'
                }
                alt={
                  props.language === 'en'
                    ? 'Government of Canada'
                    : 'Gouvernement du Canada'
                }
              />
            </a>

            {/* Language selector for small screens */}
            <Link
              key={props.language}
              href={langToggleLink || '/'}
              locale={props.language === 'en' ? 'fr' : 'en'}
            >
              <a
                className="block md:hidden md:text-sm ml-6 pb-2 sm:ml-16 underline font-body font-bold text-canada-footer-font  text-base hover:text-canada-footer-hover-font-blue"
                // onClick={() => setLanguage(language)}
                lang={props.language === 'en' ? 'fr' : 'en'}
              >
                {props.language === 'en' ? 'FR' : 'EN'}
              </a>
            </Link>
          </div>

          <div className="flex-col flex">
            {/* Language selector for mid to larger screens */}
            <Link
              key={props.language}
              href={langToggleLink || '/'}
              locale={props.language === 'en' ? 'fr' : 'en'}
            >
              <a
                className="md:block hidden pb-0 lg:pb-4 self-end underline font-body text-canada-footer-font hover:text-canada-footer-hover-font-blue "
                data-cy="toggle-language-link"
                // onClick={() => setLanguage(language)}
                lang={props.language === 'en' ? 'fr' : 'en'}
              >
                {props.language === 'en' ? 'Français' : 'English'}
              </a>
            </Link>

            {/* Placeholder for SearchBar in case is back in ver 4??? */}
            {/* <SearchBar /> */}
          </div>
        </div>

        {/* Border */}
        <div className="mb-2 border-t pb-2 mt-4"></div>

        <Menu
          loginText={t.login}
          items={[
            {
              link: '/search',
              text: t.serviceAndBenefits,
            },
            {
              link: '/',
              text: t.tools,
            },
            {
              link: '/',
              text: t.contactUs,
            },
          ]}
        />

        {/* Place Holder for the breadcrumbs 

        <div className="layout-container my-2">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        */}
      </header>
    </>
  )
}

Header.propTypes = {
  // Title of the page
  title: propTypes.string,

  /**
   * current locale in the address
   */
  locale: propTypes.string,

  /**
   * Translated text
   */
  t: propTypes.object,

  /**
   * Link to change locals
   */
  toggleLangLink: propTypes.string,

  /**
   * Array of Items for the breadcrumb
   */
  // breadcrumbItems: propTypes.arrayOf(
  //   propTypes.shape({
  //     /**
  //      * Text for the breadcrumb
  //      */
  //     text: propTypes.string,

  //     /**
  //      * Link for the breadcrumb
  //      */
  //     link: propTypes.string,
  //   })
  // ),
}
