import propTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Meta({ locale, metadata }) {
  return (
    <Head>
      <title>{metadata.title} - Canada.ca</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
      <meta name="dcterms.title" content={metadata.title} />
      <meta name="dcterms.description" content={metadata.description} />
      <meta name="dcterms.creator" content={metadata.owner} />
      <meta
        name="dcterms.language"
        title="ISO639-2/T"
        content={locale === 'en' ? 'eng' : 'fra'}
      />
      <meta name="dcterms.issued" title="W3CDTF" content="2017-01-23" />
      <meta name="dcterms.audience" content={metadata.audience} />
      <meta name="dcterms.spatial" content="Canada" />
      <meta name="dcterms.type" content={metadata.type} />
      {metadata.dcTerms?.map((term, i) => (
        <meta
          key={`dc-term-${i}`}
          name="dcterms.subject"
          title="gccore"
          content={term}
        />
      ))}
      <meta name="keywords" content={metadata.keywords} />
      <meta name="description" content={metadata.description} />
      <link rel="canonical" href={useRouter()?.asPath} />
      <meta name="author" content={metadata.owner} />
      <meta name="robots" content="noindex,nofollow" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      {metadata.img?.src && (
        <>
          <meta name="twitter:title" content={metadata.img.title} />
          <meta name="twitter:image" content={metadata.img.src} />
          <meta name="twitter:image:alt" content={metadata.img.alt} />
          <meta name="twitter:description" content={metadata.img.description} />
          <meta property="og:image" content={metadata.img.src} />
          <meta property="og:image:alt" content={metadata.img.alt} />
          <meta property="og:description" content={metadata.img.description} />
        </>
      )}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={useRouter()?.asPath} />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Digital Service SC',
  keywords: 'Canada, Service Canada, Digital Centre, Alpha',
  description: 'Canada - Service Canada Digital Centre - Alpha',
}

Meta.propTypes = {
  // locale of the page
  locale: propTypes.string,

  // metadata for the page/site
  metadata: propTypes.shape({
    title: propTypes.string,
    description: propTypes.string,
    owner: propTypes.string,
    audience: propTypes.array,
    type: propTypes.array,
    dcTerms: propTypes.array,
    keywords: propTypes.string,
    img: propTypes.shape({
      title: propTypes.string,
      src: propTypes.string,
      alt: propTypes.string,
      description: propTypes.string,
    }),
  }),
}
