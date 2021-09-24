import Link from 'next/link'

export default function Splash() {
  return (
    <section className="flex h-screen bg-cover bg-center bg-splash-page">
      <div className="flex flex-col justify-center items-center m-auto">
        <div className="z-10 bg-white h-auto w-[18.75rem] xl:w-[31.25rem]">
          <img
            className="h-auto w-64 mx-auto pt-6 xl:w-2/3 xl:mx-0 xl:px-6"
            src="/sig-blk-en.svg"
            alt="Government of Canada / Gouvernement du Canada logo"
          />

          <div className="flex w-max container py-11 mx-auto font-display">
            <Link href="/home">
              <a
                className="
                                        focus:ring-1 focus:ring-black focus:ring-offset-2
                                        px-4
                                        bg-blue-primary-deep
                                        text-white
                                        border border-blue-primary-deep
                                        active:bg-blue-dull
                                        hover:bg-blue-secondary-deep
                                        text-center text-md
                                        h-11
                                        xl:h-10
                                        w-28
                                        xl:w-36
                                        py-3
                                        mr-6
                                        rounded
                                        leading-3
                                        shadow-md
                                      "
                id="english-button"
                data-cy="english-button"
                role="button"
                draggable="false"
                lang="en"
              >
                English
              </a>
            </Link>

            <Link href="/fr/accueil">
              <a
                className="
                                        focus:ring-1 focus:ring-black focus:ring-offset-2
                                        px-4
                                        bg-blue-primary-deep
                                        text-white
                                        border border-blue-primary-deep
                                        active:bg-blue-dull
                                        hover:bg-blue-secondary-deep
                                        text-center text-md
                                        h-11
                                        xl:h-10
                                        w-28
                                        xl:w-36
                                        py-3
                                        rounded
                                        leading-3
                                        shadow-md
                                      "
                id="french-button"
                data-cy="french-button"
                role="button"
                draggable="false"
                lang="fr"
              >
                Français
              </a>
            </Link>
          </div>
        </div>

        <div
          className="
            relative
            py-8
            bg-gray-light
            text-p
            h-auto
            min-w-[18.75rem]
            w-[18.75rem]
            flex
            justify-between
            p-6
            xl:w-[31.25rem] xl:items-center
          "
        >
          <div className="w-28 text-base xl:text-p xl:w-max font-body text-blue-secondary-deep">
            <Link href="https://www.canada.ca/en/transparency/terms.html">
              <a
                className="
                                            inline-block
                                            w-28
                                            xl:w-max
                                            mr-0
                                            hover:underline
                                            splash-a
                                            text-lg
                                          "
                lang="en"
              >
                Terms &amp; conditions
              </a>
            </Link>
            <span> • </span>
            <Link href="https://www.canada.ca/fr/transparence/avis.html">
              <a
                className="
                                            inline-block
                                            hover:underline
                                            font-body
                                            text-lg
                                          "
                lang="fr"
              >
                Avis
              </a>
            </Link>
          </div>
          <img className="h-auto w-24 xl:w-28" src="/wmms-blk.svg" alt="" />
        </div>
      </div>
    </section>
  )
}
