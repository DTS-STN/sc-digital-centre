import { Header } from '@dts-stn/decd-design-system'
import en from '../../locales/en'
import fr from '../../locales/fr'

export default function DSHeader(props) {
  const t = props.locale === 'en' ? en : fr
  const menuItems = [
    {
      link: '/dashboard',
      text: 'Services',
    },
    {
      link: '/dashboard',
      text: 'Life Events',
    },
    {
      link: '/dashboard',
      text: 'Contact us',
    },
  ]
  return (
    <Header
      menuItems={menuItems}
      breadCrumbItems={{
        id: 'breadcrumbID',
        items: [
          {
            link: t.url_canada_ca,
            text: t.canada_ca,
          },
          {
            link: t.url_serviceCanada,
            text: t.serviceCanada,
          },
          {
            link: t.url_myBenefitsAndServices,
            text: t.myBenefitsAndServices,
          },
        ],
      }}
      searchProps={{ onChange: () => {}, onSubmit: () => {} }}
    />
  )
}
