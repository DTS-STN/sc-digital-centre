import ProfileInfo from '../components/molecules/ProfileInfo'
import Link from 'next/link'
import en from '../locales/en'
import fr from '../locales/fr'
import { useState } from 'react'
import TabList from '../components/atoms/TabList'

export default function Profile(props) {
  const t = props.locale === 'en' ? en : fr
  const [tabSelected, setTabSelected] = useState(0)
  const [profileTabSelected, setProfileTabSelected] = useState(0)
  const fakeFieldsEI = {
    title: 'Profile Information',
    info: [
      {
        title: 'Address',
        fields: ['123 Main street', 'Montreal (Quebec)', 'A1A 1A1'],
        moreInfoURL: null,
      },
      {
        title: 'Province of residence',
        fields: ['Ontario'],
        moreInfoURL: null,
      },
      {
        title: 'Deposit Details',
        fields: ['Scotiabank', 'XXXXXXX-123'],
        moreInfoURL: null,
      },
      {
        title: 'Phone',
        fields: ['XXX - XXX - 1234'],
        moreInfoURL: null,
      },
    ],
  }
  const fakeFieldsEI2 = {
    title: 'Preferences',
    info: [
      {
        title: 'Language of correspondence',
        fields: ['English'],
        moreInfoURL: null,
      },
      {
        title: 'Alert me',
        fields: [
          'Receive email notifications when new information about your claim is available',
          'Registered',
        ],
        moreInfoURL: null,
      },
    ],
  }
  const fakeFieldsCPP = {
    title: 'Profile Information',
    info: [
      {
        title: 'Address',
        fields: ['123 Main street', 'Montreal, Quebec', '1A1-1A1'],
        moreInfoURL: null,
      },
      {
        title: 'Deposit Details',
        fields: ['Scotiabank', 'XXXXXXX-123'],
        moreInfoURL: null,
      },
      {
        title: 'Phone',
        fields: ['XXX - XXX - 1234'],
        moreInfoURL: null,
      },
      {
        title: 'Preferences',
        fields: ['Give consent to communicate on my behalf'],
        moreInfoURL: null,
      },
    ],
  }
  const fakeFieldsOAS = {
    title: 'Profile Information',
    info: [
      {
        title: 'Address',
        fields: ['123 Main street', 'Montreal, Quebec', '1A1-1A1'],
        moreInfoURL: null,
      },
      {
        title: 'Deposit Details',
        fields: ['Scotiabank', 'XXXXXXX-123'],
        moreInfoURL: null,
      },
      {
        title: 'Phone',
        fields: ['XXX - XXX - 1234'],
        moreInfoURL: null,
      },
      {
        title: 'Preferences',
        fields: ['Give consent to communicate on my behalf'],
        moreInfoURL: null,
      },
    ],
  }
  const fakeSecurityFields = {
    title: 'Security setting information',
    info: [
      {
        title: 'Multi-factor profile',
        fields: ['Reset my multi-factor profil'],
        moreInfoURL: null,
      },
      {
        title: 'Security questions',
        fields: ['Change/update my security questions'],
        moreInfoURL: null,
      },
      {
        title: 'Secure my account',
        fields: [
          "Help secure my account using Passport, Driver's License or PR Card",
        ],
        moreInfoURL: null,
      },
      {
        title: 'GC key password',
        fields: ['Change my GC key password'],
        moreInfoURL: null,
      },
      {
        title: 'EI access code',
        fields: ['Your El access code', 'XXXXXX'],
        moreInfoURL: '#',
      },
    ],
  }
  return (
    <>
      <h1 className="py-4 text-4xl font-bold text-gray-darker">
        {t.profileAndSecuritySettings}
      </h1>
      <TabList
        titles={[t.profileAndPreferences, t.securitySettings]}
        onClick={(index) => setTabSelected(index)}
        tabSelected={tabSelected}
        containerStyle={'flex flex-wrap border-b border-gray-200'}
        selectedTabStyle={
          'bg-gray-100 active border-b-2 border-b-bright-blue-light'
        }
        unselectedTabStyle={
          'text-gray-500 hover:text-gray-600 hover:bg-gray-50'
        }
        genericTabStyle={'inline-block text-lg py-3 px-4 text-center'}
        locale={props.locale}
      />
      {tabSelected === 0 ? (
        <>
          <TabList
            titles={[t.ei, t.cpp, t.oas]}
            onClick={(index) => setProfileTabSelected(index)}
            tabSelected={profileTabSelected}
            containerStyle={'my-4 flex flex-wrap gap-4'}
            selectedTabStyle={'bg-bright-blue-lighter'}
            unselectedTabStyle={'bg-gray-lighter'}
            genericTabStyle={
              'text-center px-10 py-1 whitespace-nowrap rounded-xl hover:bg-bright-blue-lighter '
            }
            locale={props.locale}
          ></TabList>
          {profileTabSelected === 0 || !profileTabSelected ? (
            <ProfileInfo
              fields={[fakeFieldsEI, fakeFieldsEI2]}
              locale={props.locale}
            />
          ) : profileTabSelected === 1 ? (
            <ProfileInfo fields={[fakeFieldsCPP]} locale={props.locale} />
          ) : profileTabSelected === 2 ? (
            <ProfileInfo fields={[fakeFieldsOAS]} locale={props.locale} />
          ) : null}
        </>
      ) : tabSelected === 1 ? (
        <ProfileInfo fields={[fakeSecurityFields]} locale={props.locale} />
      ) : null}

      <Link href="/dashboard" passHref>
        <button className="font-normal text-center font-display w-fit text-base bg-gray-100 p-2 px-4 rounded-md text-blue-default my-10">
          {t.backToDashboard}
        </button>
      </Link>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const authSession = await GetSession(req)
  if (!authSession) return UnauthenticatedRedirect()

  const langToggleLink = locale === 'en' ? '/fr/profile' : '/profile'
  const t = locale === 'en' ? en : fr

  const metadata = {
    title: 'Digital Centre (en) + Digital Centre (fr)',
    keywords: 'en + fr keywords',
    description: 'en + fr description',
  }

  const breadCrumbItems = [
    {
      link: t.url_myBenefitsAndServices,
      text: t.myBenefitsAndServices,
    },
  ]

  return {
    props: {
      locale,
      langToggleLink,
      metadata,
      isAuth: true,
      breadCrumbItems,
    },
  }
}
