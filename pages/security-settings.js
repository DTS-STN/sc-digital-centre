import { Heading, Link } from '@dts-stn/decd-design-system'
import ActionButton from '../components/atoms/ActionButton'
import InfoSection from '../components/atoms/InfoSection'
import { AuthIsDisabled, AuthIsValid, Redirect } from '../lib/auth'
import en from '../locales/en'
import fr from '../locales/fr'

export async function getServerSideProps({ req }) {
  if (!AuthIsDisabled() && !(await AuthIsValid(req))) return Redirect()
  
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
  return { props: { metadata, breadCrumbItems, locale } }
}

export default function SecuritySettings(props) {
  const t = props.locale === 'en' ? en : fr

  const mockData = {
    eiAccessBank: 'Scotiabank',
    eiAccessCode: 'XXX-XXXX-123',
  }

  return (
    <div className="pb-20">
      <Heading title={t.securitySettings} id="security-settings" />
      {/* <h1 className="text-3xl font-bold mt-6 pb-2 border-b border-red-light">Security Settings</h1> */}
      <h2 className="text-xl mb-1 mt-2">{t.updateSecuritySettings}</h2>
      <div className="grid md:grid-cols-2 gap-x-4 mb-3">
        <InfoSection
          title={t.mfa}
          info={[t.modifyMfa]}
          editText={t.edit}
          editLink={t.editMfaLink}
        />
        <InfoSection
          title={t.gcKeyPass}
          info={[t.changeGcKeyPass]}
          editText={t.edit}
          editLink={t.editGcKeyPassLink}
        />
        <InfoSection
          title={t.securityQuestions}
          info={[t.changeSecurityQuestions]}
          editText={t.edit}
          editLink={t.editSecurityQuestionsLink}
        />
        <InfoSection
          title={t.eiAccessCode}
          info={[mockData.eiAccessBank, mockData.eiAccessCode]}
          editText={t.edit}
          editLink={t.editEiAccessCodeLink}
        />
        <InfoSection
          title={t.IdentityVerification}
          info={[t.confirmIdentityVerification]}
          editText={t.edit}
          editLink={t.editIdentityVerificationLink}
        />
      </div>
      <h2 className="pt-16 pb-3 font-bold text-4xl">{t.lookingForProfile}</h2>
      <ul className="list-disc list-inside mb-10 ml-5 text-gray-darker">
        <li>
          <Link id="profile-link" text={t.manageProfile} href={'/profile'} />
        </li>
      </ul>
      <ActionButton
        id="back-to-dashboard-link"
        href="/dashboard"
        text={t.backToDashboard}
        secondary
      />
    </div>
  )
}
