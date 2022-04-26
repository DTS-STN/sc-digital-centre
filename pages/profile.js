import DSHeader from '../components/molecules/DSHeader'
import DSFooter from '../components/molecules/DSFooter'
import ProfileInfo from '../components/molecules/ProfileInfo'
import { LayoutContainer } from '@dts-stn/decd-design-system'

export default function Profile(props) {
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
          <ProfileInfo fields={[fakeFields, fakeFields2]} />
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
