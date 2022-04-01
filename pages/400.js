import Link from 'next/link'

export default function Error400() {
  return (
    <div>
      <h1>400 Error - Bad request error occurred</h1>
      <Link href="/dashboard">
        <a className="text-sm hover:text-bright-blue-solid visited:text-purple-solid underline">
          Return to dashboard main page
        </a>
      </Link>
    </div>
  )
}
