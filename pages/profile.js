import DSHeader from '../components/molecules/DSHeader'
import DSFooter from '../components/molecules/DSFooter'
import ProfileInfo from '../components/molecules/ProfileInfo'

export default function Profile(props) {
  return (
    <>
      <DSHeader locale="en" />
      <ProfileInfo />
      <DSFooter />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
