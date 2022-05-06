import DSHeader from '../components/molecules/DSHeader'
import DSFooter from '../components/molecules/DSFooter'
import ProfileInfo from '../components/molecules/ProfileInfo'
import { LayoutContainer } from '@dts-stn/decd-design-system'
import Link from 'next/link'
import en from '../locales/en'
import fr from '../locales/fr'
import { useState } from 'react'
import TabList from '../components/atoms/TabList'

export default function Profile(props) {
  const t = props.locale === 'en' ? en : fr
  const [tabSelected, setTabSelected] = useState(0)
  const [profileTabSelected, setProfileTabSelected] = useState(0)
  const fakeFields = {
    title: 'Profile Information',
    info: [
      {
        title: 'Address',
        fields: ['123 Fake street', 'Ontario, Canada', '1A1-1A1'],
        moreInfoURL: null,
      },
      {
        title: 'Province of residence',
        fields: ['Ontario'],
        moreInfoURL: null,
      },
      {
        title: 'Bank Details',
        fields: ['Direct deposit', 'Scotiabank 8510231'],
        moreInfoURL: null,
      },
      {
        title: 'Phone',
        fields: ['XXX - XXX - 1234'],
        moreInfoURL: null,
      },
    ],
  }
  const fakeFields2 = {
    title: 'Preferences',
    info: [
      {
        title: 'Written Language',
        fields: ['English'],
        moreInfoURL: null,
      },
      {
        title: 'Alert me',
        fields: [
          'Sign up to get an email when important new is available',
          'Registered',
        ],
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
      <DSHeader locale={props.locale} langToggleLink={props.langToggleLink} />
      <LayoutContainer>
        <div className="col-span-12">
          <h1 className="py-4 text-4xl font-bold text-gray-darker">
            {t.profileAndSecuritySettings}
          </h1>
          <TabList
            titles={[t.profileAndPreferences, t.securitySettings]}
            onClick={(index) => setTabSelected(index)}
            tabSelected={tabSelected}
            containerStyle={'flex flex-wrap border-b border-gray-200'}
            selectedTabStyle={
              'bg-gray-100 active border-b-2 border-b-bright-blue-lighthover'
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
                selectedTabStyle={'bg-bright-blue-lighthover'}
                unselectedTabStyle={''}
                genericTabStyle={
                  'bg-gray-lighter text-center px-10 py-1 whitespace-nowrap rounded-xl hover:bg-bright-blue-lighthover '
                }
                locale={props.locale}
              ></TabList>
              <ProfileInfo
                fields={[fakeFields, fakeFields2]}
                locale={props.locale}
              />{' '}
            </>
          ) : tabSelected === 1 ? (
            <ProfileInfo fields={[fakeSecurityFields]} locale={props.locale} />
          ) : null}

          <Link href="/dashboard" passHref>
            <button className="font-normal text-center font-display w-fit text-base bg-gray-100 p-2 px-4 rounded-md text-link-blue-button my-10">
              {t.backToDashboard}
            </button>
          </Link>
        </div>
      </LayoutContainer>
      <DSFooter />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const langToggleLink = locale === 'en' ? '/fr/profile' : '/profile'
  return {
    props: { locale, langToggleLink },
  }
}
