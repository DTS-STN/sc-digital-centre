import InfoSection from '../components/atoms/InfoSection'
import { AuthIsDisabled, AuthIsValid, Redirect } from '../lib/auth'

export async function getStaticProps({ req }) {
  if (!AuthIsDisabled() && !(await AuthIsValid(req))) return Redirect()

  const metadata = {
    title: 'Digital Centre (en) + Digital Centre (fr)',
    keywords: 'en + fr keywords',
    description: 'en + fr description',
  }
  return { props: { metadata } }
}

export default function SecuritySettings() {
  return (
    <>
      <h1>Security Settings</h1>
      <h2>Update your security settings</h2>
      <InfoSection
        title="Multi-factor authentication"
        info={['Modify multi-factor authentication settings']}
        editText="Edit"
        editLink="/"
      />
    </>
  )
}
