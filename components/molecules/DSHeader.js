import { Header } from '@dts-stn/decd-design-system'

export default function DSHeader() {
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
            link: '/',
            text: 'Canada.ca',
          },
          {
            link: '/',
            text: 'Service Canada',
          },
          {
            link: '/',
            text: 'My Benefits and Services',
          },
        ],
      }}
      searchProps={{ onChange: () => {}, onSubmit: () => {} }}
    />
  )
}
