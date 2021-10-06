import Layout from '../components/organisms/Layout'
import { getLocalTopics } from './api/getData'
import FeatureBlock from '../components/molecules/FeatureBlock'

export default function Home(props) {
  return (
    <Layout locale={props.locale}>
      <h1 className="text-center text-blue-800  font-extrabold text-4xl my-36">
        Home page -- place holder
      </h1>

      <h2 className="text-center text-blue-800 font-extrabold text-3xl mb-24">
        current language is :{' '}
        <span className="text-red-800">{props.locale}</span>
      </h2>

      <FeatureBlock
        title="Featured Component Life Journeys"
        body="blah blah blah blah blah blahblah blah blahblah blah blahblah blah blahblah blah blah"
      ></FeatureBlock>
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  let topicsData = []
  let errorCode = false

  console.log('current language is:', locale)
  //
  // IF content enabled get the data from the api
  //

  if (!process.env.NEXT_CONTENT_API) {
    // const { apiData, error } = await getTopics(locale);

    let topics = []

    // extract data from apiData then add it to the array topics

    topicsData = topics
    // errorCode = error;
    errorCode = false
  } else {
    //
    // Else get the content from the local file
    //
    const { localData } = getLocalTopics()

    topicsData = localData
    errorCode = false
  }

  return {
    props: {
      topicsData,
      errorCode,
      locale,
    },
  }
}
