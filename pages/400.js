import Link from 'next/link'
import en from '../locales/en'
const t = en
export default function Error400() {
  return (
    <div>
      <h1>{t.errorPage400message}</h1>
      <Link href="/dashboard">
        <a className="text-sm hover:text-bright-blue-solid visited:text-purple-solid underline">
          {t.errorPage400ReturnToDashboard}
        </a>
      </Link>
    </div>
  )
}
