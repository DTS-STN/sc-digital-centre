import InfoSection from '../components/atoms/InfoSection'

export function getStaticProps() {
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
