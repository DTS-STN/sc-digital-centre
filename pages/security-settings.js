import { Heading, Link } from '@dts-stn/decd-design-system'
import en from '../locales/en'
import fr from '../locales/fr'
import ActionButton from '../components/atoms/ActionButton'
import InfoSection from '../components/atoms/InfoSection'

export function getStaticProps({ locale }) {
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
  return { props: { metadata, breadCrumbItems } }
}

export default function SecuritySettings() {
  return (
    <div className="pb-20">
      <Heading title="Security Settings" id="security-settings" />
      {/* <h1 className="text-3xl font-bold mt-6 pb-2 border-b border-red-light">Security Settings</h1> */}
      <h2 className="text-xl mb-1 mt-2">Update your security settings</h2>
      <div className="grid md:grid-cols-2 mb-3">
        <InfoSection
          title="Multi-factor authentication"
          info={['Modify multi-factor authentication settings']}
          editText="Edit"
          editLink="/"
        />
        <InfoSection
          title="Multi-factor authentication"
          info={['Modify multi-factor authentication settings']}
          editText="Edit"
          editLink="/"
        />
        <InfoSection
          title="Multi-factor authentication"
          info={['Modify multi-factor authentication settings']}
          editText="Edit"
          editLink="/"
        />
        <InfoSection
          title="Multi-factor authentication"
          info={['Modify multi-factor authentication settings']}
          editText="Edit"
          editLink="/"
        />
        <InfoSection
          title="Multi-factor authentication"
          info={['Modify multi-factor authentication settings']}
          editText="Edit"
          editLink="/"
        />
      </div>
      <h2 className="pt-16 pb-3 font-bold text-4xl">
        Looking for profile settings?
      </h2>
      <ul className="list-disc list-inside mb-10 ml-5 text-gray-darker">
        <li>
          <Link
            id="profile-link"
            text="Manage my profile settings"
            href={'/profile'}
          />
        </li>
      </ul>
      <ActionButton href="/dashboard" text="Back to my Dashboard" secondary />
    </div>
  )
}
