import propTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Meta(props) {
  return (
    <Head>
      <title>{props.metadata.title} - Canada.ca</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
      <meta name="dcterms.title" content={props.metadata.title} />
      <meta name="dcterms.description" content={props.metadata.description} />
      <meta name="dcterms.creator" content={props.metadata.owner} />
      <meta
        name="dcterms.language"
        title="ISO639-2/T"
        content={props.locale === 'en' ? 'eng' : 'fra'}
      />
      <meta name="dcterms.issued" title="W3CDTF" content="2017-01-23" />
      <meta name="dcterms.audience" content={props.metadata.audience} />
      <meta name="dcterms.spatial" content="Canada" />
      <meta name="dcterms.type" content={props.metadata.type} />
      {props.metadata.dcTerms?.map((term, i) => (
        <meta
          key={`dc-term-${i}`}
          name="dcterms.subject"
          title="gccore"
          content={term}
        />
      ))}
      <meta name="keywords" content={props.metadata.keywords} />
      <meta name="description" content={props.metadata.description} />
      <link rel="canonical" href={props.useRouter()?.asPath} />
      <meta name="author" content={props.metadata.owner} />
      <meta name="robots" content="noindex,nofollow" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      {props.metadata.img?.src && (
        <>
          <meta name="twitter:title" content={props.metadata.img.title} />
          <meta name="twitter:image" content={props.metadata.img.src} />
          <meta name="twitter:image:alt" content={props.metadata.img.alt} />
          <meta name="twitter:description" content={props.metadata.img.description} />
          <meta property="og:image" content={props.metadata.img.src} />
          <meta property="og:image:alt" content={props.metadata.img.alt} />
          <meta property="og:description" content={props.metadata.img.description} />
        </>
      )}
      <meta property="og:title" content={props.metadata.title} />
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
