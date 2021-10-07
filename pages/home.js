import Layout from '../components/organisms/Layout'
import SearchBar from '../components/atoms/SearchBar'
import SearchCard from '../components/molecules/SearchCard'
import CardWithImageLayout from '../components/molecules/CardWithImageLayout'
import { getLocalTopics } from './api/getData'

export default function Home(props) {
  return (
    <Layout locale={props.locale}>
      <h1 className="text-center text-blue-800  font-extrabold text-4xl my-36">
        Home page -- place holder
      </h1>

      <CardWithImageLayout
        card={
          <SearchCard
            headerText="Find benefits and services"
            viewBenefitsServices="View all benefits and services"
            paraText="Service Canada Digital Centre is a single point of access connecting you to a wide range of government services and benefits"
          />
        }
        cardClasses="w-full sm:w-1/2 sm:min-w-[26.25rem]"
        image={<div className="bg-green-forest w-full" />}
        imageClasses=" w-full h-60 sm:h-auto sm:w-1/2"
      />

      <h2 className="text-center text-blue-800 font-extrabold text-3xl mb-24">
        current language is :{' '}
        <span className="text-red-800">{props.locale}</span>
      </h2>
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
