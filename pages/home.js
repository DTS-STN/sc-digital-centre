import Layout from '../components/organisms/Layout'
import { getLocalTopics } from './api/getData'
import TopTasks from '../components/molecules/TopTasks'
import { MostRequestedList } from '../components/molecules/MostRequestedList'
import { ServiceCanada } from '../components/molecules/ServiceCanada'
import { ContactUs } from '../components/molecules/ContactUs'

import en from '../locales/en'
import fr from '../locales/fr'

export default function Home(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <Layout locale={props.locale} title="home">
      <ServiceCanada
        title="My Service Canada Account"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        signInHref="/"
        signInText="Sign into My Account"
        createAccountHref="/"
        createAccountText="Create an Account"
      />
      <MostRequestedList
        requestedList={[
          {
            id: 1,
            title: 'Lorem Ipsum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            callToActionText: 'Lorem Ipsum',
            callToActionHref: '/home',
            btnId: 'btn1',
          },
          {
            id: 2,
            title: 'Lorem Ipsum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            callToActionText: 'Lorem Ipsum',
            callToActionHref: '/home',
            btnId: 'btn2',
          },
          {
            id: 3,
            title: 'Lorem Ipsum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            callToActionText: 'Lorem Ipsum',
            callToActionHref: '/home',
            btnId: 'btn3',
          },
          {
            id: 4,
            title: 'Lorem Ipsum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            callToActionText: 'Lorem Ipsum',
            callToActionHref: '/home',
            btnId: 'btn4',
          },
        ]}
      />
      <TopTasks
        topTasksHeader="Top Tasks"
        topTasksDescription="Lorem ipsum dolor ipsum lorem ipsum dolor ipsum. Lorem ipsum dolor ipsum."
        topTasksList={[
          { taskName: 'Apply for Employment Insurance', taskURL: '/home' },
          {
            taskName: 'Access an ROE (Record of Employment)',
            taskURL: '/home',
          },
          {
            taskName: 'Activate my Service Canada Access Code (PAC)',
            taskURL: '/home',
          },
          {
            taskName: 'Update my address and contact information',
            taskURL: '/home',
          },
        ]}
      />

      <ContactUs mainTitle={t.contactUs} contactList={t.contactInfo} />
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
