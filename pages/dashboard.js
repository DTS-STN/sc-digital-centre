import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import Greeting from '../components/molecules/Greeting'
import { getNoBenefitCards } from '../contents/NoBenefitCards'
import { getAdvertsingCards } from '../contents/BenefitAdvertisingCards'
import { getSession } from 'next-auth/react'
import UniversalBenefitCard from '../components/molecules/UniversalBenefitCard'
import { useEffect, useState } from 'react'
import { setCookies } from 'cookies-next'
import { TASK_GROUPS } from '../contents/BenefitTasksGroups'
import en from '../locales/en'
import fr from '../locales/fr'
import { StatusColors, StatusCodes } from '../constants/StatusCodes'
import { MapSummary } from '../lib/mapSummaries'

export default function Dashboard(props) {
  const t = props.locale === 'en' ? en : fr
  let time = new Date().getHours()

  const [advertisingCards, setAdvertisingCards] = useState(
    props.advertisingCards
  )
  const [noBenefitCards, setNoBenefitCards] = useState(props.noBenefitCards)

  const [cppBenefit, setCppBenefit] = useState()
  const [cppLoaded, setCppLoaded] = useState(false)
  const [cppError, setCppError] = useState()

  const [cppdBenefit, setCppdBenefit] = useState()
  const [cppdLoaded, setCppdLoaded] = useState(false)
  const [cppdError, setCppdError] = useState()

  const [eiBenefit, setEiBenefit] = useState()
  const [eiLoaded, setEiLoaded] = useState(false)
  const [eiError, setEiError] = useState()

  const [oasBenefit, setOasBenefit] = useState()
  const [oasLoaded, setOasLoaded] = useState(false)
  const [oasError, setOasError] = useState()

  const [gisBenefit, setGisBenefit] = useState()
  const [gisLoaded, setGisLoaded] = useState(false)
  const [gisError, setGisError] = useState(false)

  const [sebBenefit, setSebBenefit] = useState()
  const [sebLoaded, setSebLoaded] = useState(false)
  const [sebError, setSebError] = useState()

  useEffect(() => {
    async function fetchProgramData(program, setData, setError, setLoaded) {
      try {
        const res = await fetch(`/api/programData/${program}`)
        if (res.ok) {
          if (res.status === 200) {
            setData(await res.json())
          }
        } else {
          const text = await res.text()
          setError(`Error fetching ${program} data ${res.status} - ${text}.\n`)
        }
      } catch (error) {
        setError(`Something went wrong fetching ${program} data.`)
        console.log(error)
      } finally {
        setLoaded(true)
      }
    }

    fetchProgramData('cpp', setCppBenefit, setCppError, setCppLoaded)
    fetchProgramData('cppd', setCppdBenefit, setCppdError, setCppdLoaded)
    fetchProgramData('ei', setEiBenefit, setEiError, setEiLoaded)
    fetchProgramData('oas', setOasBenefit, setOasError, setOasLoaded)
    fetchProgramData('gis', setGisBenefit, setGisError, setGisLoaded)
    fetchProgramData('seb', setSebBenefit, setSebError, setSebLoaded)
  }, [])

  return (
    <>
      <Greeting locale={props.locale} time={time} name="Mary" />
      <div className="mb-8">
        {cppLoaded ? null : 'Loading CPP User Benefit Data...'}
        {cppError ?? null}
        {cppBenefit
          ? cppBenefit.map((value, index) => {
              const tasksGroups =
                TASK_GROUPS[value.programCode][value.statusCode][props.locale]
              return (
                <UniversalBenefitCard
                  key={index}
                  locale={props.locale}
                  program={t[value.programCode]}
                  summary={t.summary}
                  benefitUniqueId={`${value.programCode}-${value.typeCode}-${value.statusCode}`}
                  statusBadge={{
                    status: t[value.statusCode],
                    srDescription: t[value.programCode],
                    color: StatusColors[value.statusCode],
                    hidden: value.statusCode === StatusCodes.activeAgreement,
                  }}
                  taskHeading={tasksGroups.taskHeadingKey}
                  taskGroups={tasksGroups.tasksGroups}
                  benefitDurationReached={t.benefitDurationReached}
                  applyForProgram={`${t.applyFor} ${t[value.programCode]}`}
                  summaries={MapSummary(value.summaries, t, props.locale)}
                />
              )
            })
          : null}

        {cppdLoaded ? null : 'Loading CPPD User Benefit Data...'}
        {cppdError ?? null}
        {cppdBenefit
          ? cppdBenefit.map((value, index) => {
              const tasksGroups =
                TASK_GROUPS[value.programCode][value.statusCode][props.locale]
              return (
                <UniversalBenefitCard
                  key={index}
                  locale={props.locale}
                  program={t[value.programCode]}
                  summary={t.summary}
                  benefitUniqueId={`${value.programCode}-${value.typeCode}-${value.statusCode}`}
                  statusBadge={{
                    status: t[value.statusCode],
                    srDescription: t[value.programCode],
                    color: StatusColors[value.statusCode],
                    hidden: value.statusCode === StatusCodes.activeAgreement,
                  }}
                  taskHeading={tasksGroups.taskHeadingKey}
                  taskGroups={tasksGroups.tasksGroups}
                  benefitDurationReached={t.benefitDurationReached}
                  applyForProgram={`${t.applyFor} ${t[value.programCode]}`}
                  summaries={MapSummary(value.summaries, t, props.locale)}
                />
              )
            })
          : null}

        {eiLoaded ? null : 'Loading EI User Benefit Data...'}
        {eiError ?? null}
        {eiBenefit
          ? eiBenefit.map((value, index) => {
              const tasksGroups =
                TASK_GROUPS[value.programCode][value.statusCode][props.locale]
              return (
                <UniversalBenefitCard
                  key={index}
                  locale={props.locale}
                  program={t[value.programCode]}
                  summary={t.summary}
                  benefitUniqueId={`${value.programCode}-${value.typeCode}-${value.statusCode}`}
                  statusBadge={{
                    status: t[value.statusCode],
                    srDescription: t[value.programCode],
                    color: StatusColors[value.statusCode],
                    hidden: value.statusCode === StatusCodes.activeAgreement,
                  }}
                  taskHeading={tasksGroups.taskHeadingKey}
                  taskGroups={tasksGroups.tasksGroups}
                  benefitDurationReached={t.benefitDurationReached}
                  applyForProgram={`${t.applyFor} ${t[value.programCode]}`}
                  summaries={MapSummary(value.summaries, t, props.locale)}
                />
              )
            })
          : null}

        {oasLoaded ? null : 'Loading OAS User Benefit Data...'}
        {oasError}
        {oasBenefit
          ? oasBenefit.map((value, index) => {
              const tasksGroups =
                TASK_GROUPS[value.programCode][value.statusCode][props.locale]
              return (
                <UniversalBenefitCard
                  key={index + 3}
                  locale={props.locale}
                  program={t[value.programCode]}
                  summary={t.summary}
                  benefitUniqueId={`${value.programCode}-${value.typeCode}-${value.statusCode}`}
                  statusBadge={{
                    status: t[value.statusCode],
                    srDescription: t[value.programCode],
                    color: StatusColors[value.statusCode],
                    hidden: value.statusCode === StatusCodes.activeAgreement,
                  }}
                  taskHeading={tasksGroups.taskHeadingKey}
                  taskGroups={tasksGroups.tasksGroups}
                  benefitDurationReached={t.benefitDurationReached}
                  applyForProgram={`${t.applyFor} ${t[value.programCode]}`}
                  summaries={MapSummary(value.summaries, t, props.locale)}
                />
              )
            })
          : null}

        {gisLoaded ? null : 'Loading User Benefit Data...'}
        {gisError}
        {gisBenefit
          ? gisBenefit.map((value, index) => {
              const tasksGroups =
                TASK_GROUPS[value.programCode][value.statusCode][props.locale]
              return (
                <UniversalBenefitCard
                  key={index + 3}
                  locale={props.locale}
                  program={t[value.programCode]}
                  summary={t.summary}
                  benefitUniqueId={`${value.programCode}-${value.typeCode}-${value.statusCode}`}
                  statusBadge={{
                    status: t[value.statusCode],
                    srDescription: t[value.programCode],
                    color: StatusColors[value.statusCode],
                    hidden: value.statusCode === StatusCodes.activeAgreement,
                  }}
                  taskHeading={tasksGroups.taskHeadingKey}
                  taskGroups={tasksGroups.tasksGroups}
                  benefitDurationReached={t.benefitDurationReached}
                  applyForProgram={`${t.applyFor} ${t[value.programCode]}`}
                  summaries={MapSummary(value.summaries, t, props.locale)}
                />
              )
            })
          : null}

        {sebLoaded ? null : 'Loading User Benefit Data...'}
        {sebError}
        {sebBenefit ? (
          <UniversalBenefitCard
            locale={props.locale}
            program={t[sebBenefit.programCode]}
            summary={t.summary}
            benefitUniqueId={`${sebBenefit.programCode}-${sebBenefit.typeCode}-${sebBenefit.statusCode}`}
            statusBadge={{
              status: t[sebBenefit.statusCode],
              srDescription: t[sebBenefit.programCode],
              color: StatusColors[sebBenefit.statusCode],
              hidden: sebBenefit.statusCode === StatusCodes.activeAgreement,
            }}
            taskHeading={
              TASK_GROUPS[sebBenefit.programCode][sebBenefit.statusCode][
                props.locale
              ].taskHeadingKey
            }
            taskGroups={
              TASK_GROUPS[sebBenefit.programCode][sebBenefit.statusCode][
                props.locale
              ].tasksGroups
            }
            benefitDurationReached={t.benefitDurationReached}
            applyForProgram={`${t.applyFor} ${t[sebBenefit.programCode]}`}
            summaries={MapSummary(sebBenefit.summaries, t, props.locale)}
          />
        ) : null}

        {/* application or "advertising" cards */}
        {advertisingCards.map((value, index) => {
          if (value.benefitType === 'CPP' && cppBenefit) {
            return
          } else if (value.benefitType === 'EI' && eiBenefit) {
            return
          }
          return (
            <div key={index}>
              <BenefitApplicationCard
                locale={props.locale}
                benefitApplication={value}
              />
            </div>
          )
        })}

        {/* {noBenefitCards.map((value, index) => {
          return (
            <div key={index}>
              <NoBenefitCard locale={props.locale} benefit={value} />
            </div>
          )
        })} */}
      </div>
    </>
  )
}

export async function getServerSideProps({ req, res, locale, query }) {
  let isAuth = false

  const { userid } = query
  setCookies('userid', userid, { req, res, maxAge: 60 * 6 * 24 })

  if (
    !process.env.AUTH_DISABLED ||
    process.env.AUTH_DISABLED.toLowerCase() !== 'true'
  ) {
    const session = await getSession({ req })
    isAuth = session ? true : false

    if (!isAuth) {
      return {
        redirect: {
          permanent: false,
          destination: '/api/auth/signin',
        },
      }
    }
  }

  const metadata = {
    title: 'Digital Centre (en) + Digital Centre (fr)',
    keywords: 'en + fr keywords',
    description: 'en + fr description',
  }

  return {
    props: {
      advertisingCards: getAdvertsingCards(),
      noBenefitCards: getNoBenefitCards(locale),
      isAuth: true,
      locale,
      metadata,
    },
  }
}
