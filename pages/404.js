import { ErrorPage } from '@dts-stn/decd-design-system'

export default function Error404() {
  return (
    <div>
      <ErrorPage
        errType="404"
        lang="en"
        accountPageLink="/dashboard"
        isAuth={true}
      />
    </div>
  )
}
