import ActionButton from '../atoms/ActionButton'
import Image from 'next/image'
import Link from 'next/link'

export default function SplashLanguageSelect() {
  return (
    <div className="flex flex-col justify-center items-center m-auto">
      <div className="z-10 bg-white h-auto w-[18.75rem] xl:w-[31.25rem]">
        <h1 className="sr-only">service.canada.ca-digital-center</h1>

        <div className="h-auto w-64 mx-auto pt-6 xl:w-2/3 xl:mx-0 xl:px-6">
          <Image
            src="/sig-blk-en.svg"
            alt="Government of Canada / Gouvernement du Canada logo"
            width={10}
            height={1}
            layout="responsive"
            objectFit="scale-down"
          ></Image>
        </div>
        <div className="flex w-max container py-11 mx-auto font-display">
          <div className="grid grid-cols-2 gap-2 xl:gap-6">
            <ActionButton
              lang="en"
              href="/dashboard"
              id="english-button"
              data-cy="english-button"
              role="button"
              draggable="false"
            >
              English
            </ActionButton>
            <ActionButton
              lang="fr"
              href="/fr/dashboard"
              id="french-button"
              data-cy="french-button"
              role="button"
              draggable="false"
            >
              Français
            </ActionButton>
          </div>
        </div>
      </div>

      <div className="relative py-8 bg-gray-light text-p h-auto min-w-[18.75rem] w-[18.75rem] flex justify-between p-6 xl:w-[31.25rem] xl:items-center">
        <div className="w-28 text-base xl:text-p xl:w-max font-body text-bright-blue-dark">
          <Link href="https://www.canada.ca/en/transparency/terms.html">
            <a
              className="inline-block w-28 xl:w-max mr-0 hover:underline splash-a text-lg"
              lang="en"
              data-cy="terms"
            >
              Terms &amp; conditions
            </a>
          </Link>
          <span> • </span>
          <Link href="https://www.canada.ca/fr/transparence/avis.html">
            <a
              className="inline-block hover:underline font-body text-lg"
              lang="fr"
              data-cy="avis"
            >
              Avis
            </a>
          </Link>
        </div>
        <Image src="/wmms-blk.svg" width="112" height="27" alt="" />
      </div>
    </div>
  )
}
