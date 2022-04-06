import { ErrorPage } from '@dts-stn/decd-design-system'
export default function Error500() {
  return (
    <ErrorPage
      errType="500"
      lang="en"
      accountPageLink="/dashboard"
      isAuth={true}
    />
  )
}
