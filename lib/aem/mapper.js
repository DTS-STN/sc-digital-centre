import queryGraphQL from '../../graphql/client'
import getDashboardPage from '../../graphql/queries/dashboardQuery.graphql'

export default async function getDashboardContent() {
  // TODO: Add a caching method to see if AEM has already been called.
  const aemContent = await queryGraphQL(getDashboardPage).then((result) => {
    return result
  })
  const returnedQuery = aemContent.data.alphaSCHPageByPath.item
  return {
    en: {
      pageName: returnedQuery.scPageNameEn,
      pageTitle: returnedQuery.scTitleEn,
    },
    fr: {
      pageName: returnedQuery.scPageNameFr,
      pageTitle: returnedQuery.scTitleFr,
    },
  }
}
