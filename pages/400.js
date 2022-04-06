import { ErrorPage } from '@dts-stn/decd-design-system'
export default function Error400() {
  return (
    <ErrorPage
      errType="400"
      lang="en"
      accountPageLink="/dashboard"
      isAuth={true}
    />
  )
}
