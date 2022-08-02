import queryGraphQL from '../../graphql/client'
import getDashboardPage from '../../graphql/queries/dashboardQuery.graphql'

export default async function MapDashboard() {
  try {
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
  } catch (e) {
    return {
      status: 'Error fetching AEM',
      message: e,
    }
  }
}
