import propTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Meta({ locale, aemPage }) {
  const title = aemPage.title[locale]
  const currentUrl = useRouter().asPath
  const keywords = aemPage.meta.keywords[locale]
  const owner = aemPage.meta.owner?.[locale]
  const description = aemPage.meta.description[locale]
  const dcTerms = aemPage.meta?.dcTerms || []
  const audience = aemPage.meta.audience
  const type = aemPage.meta.type
  const img = aemPage.meta.img?.[locale]

  return (
    <Head prefix="og:http://ogp.me/ns#">
      <title>{title} - Canada.ca</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
      <meta name="dcterms.title" content={title} />
      <meta name="dcterms.description" content={description} />
      <meta name="dcterms.creator" content={owner} />
      <meta
        name="dcterms.language"
        title="ISO639-2/T"
        content={locale === 'en' ? 'eng' : 'fra'}
      />
      {dcTerms.map((term, i) => (
        <meta
          key={`dc-term-${i}`}
          name="dcterms.subject"
          title="gccore"
          content={term}
        />
      ))}
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="author" content={owner} />
      <meta name="robots" content="noindex,nofollow" />
      <meta name="dcterms.issued" title="W3CDTF" content="2017-01-23" />
      <meta name="dcterms.audience" content={audience} />
      <meta name="dcterms.spatial" content="Canada" />
      <meta name="dcterms.type" content={type} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      {img?.src && (
        <>
          <meta name="twitter:title" content={img.title} />
          <meta name="twitter:image" content={img.src} />
          <meta name="twitter:image:alt" content={img.alt} />
          <meta name="twitter:description" content={img.description} />
          <meta property="og:image" content={img.src} />
          <meta property="og:image:alt" content={img.alt} />
          <meta property="og:description" content={img.description} />
        </>
      )}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" /> 
      <meta property="og:url" content={currentUrl} />
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
