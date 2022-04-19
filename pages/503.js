import { ErrorPage } from '@dts-stn/decd-design-system'
export default function Error503() {
  return (
    <ErrorPage
      errType="503"
      lang="en"
      accountPageLink="/dashboard"
      isAuth={true}
    />
  )
}
