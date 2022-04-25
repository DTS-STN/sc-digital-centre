import ProfileInfoSection from '../atoms/ProfileInfoSection'

export default function ProfileInfo(props) {
  const fakeFields = [
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
  ]
  const fakeFields2 = [
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
  ]
  return (
    <div className="max-w-lg px-8 py-4 bg-gray-100">
      <ProfileInfoSection title="Profile Information" info={fakeFields} />
      <ProfileInfoSection title="Preferences" info={fakeFields2} />
    </div>
  )
}
