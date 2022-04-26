import DSHeader from '../components/molecules/DSHeader'
import DSFooter from '../components/molecules/DSFooter'
import ProfileInfo from '../components/molecules/ProfileInfo'
import { LayoutContainer } from '@dts-stn/decd-design-system'
import SettingsNavButton from '../components/atoms/SettingsNavButton'
import BackButton from '../components/atoms/BackButton'
import en from '../locales/en'
import fr from '../locales/fr'

export default function Profile(props) {
  const t = en
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
      <DSHeader locale="en" />
      <LayoutContainer>
        <div className="col-span-12">
          <h1 className="py-4 text-4xl font-bold text-gray-darker">
            {t.profileAndSecuritySettings}
          </h1>
          <div className="my-4 gap-4 flex flex-row sm:flex-row xs:flex-col">
            <SettingsNavButton text={t.ei} active={true}></SettingsNavButton>
            <SettingsNavButton text={t.cpp}></SettingsNavButton>
            <SettingsNavButton text={t.oas}></SettingsNavButton>
          </div>
          <ProfileInfo fields={[fakeFields, fakeFields2]} />
          <BackButton text={t.backToDashboard} />
        </div>
      </LayoutContainer>
      <DSFooter />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
