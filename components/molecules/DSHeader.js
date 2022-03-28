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
      searchProps={{ onChange: () => {}, onSubmit: () => {} }}
    />
  )
}
