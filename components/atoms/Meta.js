import propTypes from 'prop-types'
import Head from 'next/head'

export default function Meta({ title, keywords, description, lang }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="robots" content="noindex,nofollow" />
      <meta name="dcterms.title" content="Home Page" />
      <meta name="dcterms.language" content={lang == 'en' ? 'eng' : 'fra'} />
      <meta
        name="dcterms.creator"
        content="Employment and Social Development Canada/Emploi et Développement social Canada"
      />
      <meta name="dcterms.accessRights" content="2" />
      <meta name="dcterms.service" content="ESDC-EDSC_DC-CD" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Digital Service SC',
  keywords: 'Canada, Service Canada, Digital Centre, Alpha',
  description: 'Canada - Service Canada Digital Centre - Alpha',
}

Meta.propTypes = {
  // Title of the page
  title: propTypes.string,

  // Keywords for the page/site
  keywords: propTypes.string,

  //page description
  description: propTypes.string,
}
