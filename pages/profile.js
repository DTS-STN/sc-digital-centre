import DSHeader from '../components/molecules/DSHeader'
import DSFooter from '../components/molecules/DSFooter'
import ProfileInfo from '../components/molecules/ProfileInfo'
import { LayoutContainer } from '@dts-stn/decd-design-system'
import SettingsNavButton from '../components/atoms/SettingsNavButton'
import Link from 'next/link'
import en from '../locales/en'
import fr from '../locales/fr'
import { useState } from 'react'
import TabList from '../components/atoms/tabList'
import Layout from '../components/organisms/Layout'

export default function Profile(props) {
  const t = props.locale === 'en' ? en : fr
  const [tabSelected, setTabSelected] = useState(0)
  const fakeFields = {
    title: 'Profile Information',
    info: [
      {
        title: 'Address',
        fields: ['123 Fake street', 'Ontario, Canada', '1A1-1A1'],
      },
      {
        title: 'Province of residence',
        fields: ['Ontario'],
      },
      {
        title: 'Bank Details',
        fields: ['Direct deposit', 'Scotiabank 8510231'],
      },
      {
        title: 'Phone',
        fields: ['XXX - XXX - 1234'],
      },
    ],
  }
  const fakeFields2 = {
    title: 'Preferences',
    info: [
      {
        title: 'Written Language',
        fields: ['English'],
      },
      {
        title: 'Alert me',
        fields: [
          'Sign up to get an email when important new is available',
          'Registered',
        ],
      },
    ],
  }
  return (
    <>
      <Layout
        locale={props.locale}
        displayPhase={false}
        displayHeader={true}
        displayDSFooter={true}
        metadata={props.metadata}
        langToggleLink={props.langToggleLink}
      >
        <LayoutContainer>
          <div className="col-span-12">
            <h1 className="py-4 text-4xl font-bold text-gray-darker">
              {t.profileAndSecuritySettings}
            </h1>
            <TabList
              titles={[t.profileAndPreferences, t.securitySettings]}
              onClick={(index) => setTabSelected(index)}
              tabSelected={tabSelected}
            />
            {tabSelected === 0 ? (
              <>
                <div className="my-4 gap-4 flex flex-row sm:flex-row xs:flex-col">
                  <SettingsNavButton text={t.ei} active></SettingsNavButton>
                  <SettingsNavButton text={t.cpp}></SettingsNavButton>
                  <SettingsNavButton text={t.oas}></SettingsNavButton>
                </div>
                <ProfileInfo fields={[fakeFields, fakeFields2]} />{' '}
              </>
            ) : tabSelected === 1 ? (
              <p>Security Settings</p>
            ) : null}

            <Link href="/dashboard" passHref>
              <button className="font-normal text-center font-display w-fit text-base bg-gray-100 p-2 px-4 rounded-md text-link-blue-button my-10">
                {t.backToDashboard}
              </button>
            </Link>
          </div>
        </LayoutContainer>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const langToggleLink = locale === 'en' ? '/fr/profile' : '/profile'
  const metadata = {
    title: 'Digital Centre (en) + Digital Centre (fr)',
    keywords: 'en + fr keywords',
    description: 'en + fr description',
  }
  return {
    props: { locale, langToggleLink, metadata },
  }
}
