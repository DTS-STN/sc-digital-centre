import DSHeader from '../components/molecules/DSHeader'
import DSFooter from '../components/molecules/DSFooter'
import { LayoutContainer } from '@dts-stn/decd-design-system'

export default function Profile(props) {
  return (
    <>
      <DSHeader locale="en" />
      <LayoutContainer>
        <div>Profile</div>
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
