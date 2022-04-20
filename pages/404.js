import { ErrorPage } from '@dts-stn/decd-design-system'
import DSHeader from '../components/molecules/DSHeader'

export default function Error404() {
  return (
    <>
      <DSHeader locale="en" />
      <ErrorPage
        errType="404"
        lang="en"
        accountPageLink="/dashboard"
        isAuth={true}
      />
    </>
  )
}
