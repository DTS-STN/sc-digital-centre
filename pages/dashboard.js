import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import Greeting from '../components/molecules/Greeting'
import { getNoBenefitCards } from '../contents/NoBenefitCards'
import { getAdvertsingCards } from '../contents/BenefitAdvertisingCards'
import UniversalBenefitCard from '../components/molecules/UniversalBenefitCard'
import { useEffect, useState } from 'react'
import { setCookies, getCookie } from 'cookies-next'
import { TASK_GROUPS } from '../contents/BenefitTasksGroups'
import en from '../locales/en'
import fr from '../locales/fr'
import { StatusColors, StatusCodes } from '../constants/StatusCodes'
import { MapSummary } from '../lib/mapSummaries'
import { getGreeting } from '../lib/Utils'
import queryGraphQL from '../graphql/client'
import getDashboardPage from '../graphql/queries/dashboardQuery.graphql'
import MapCallout from '../lib/mapCallout'
import { AuthIsDisabled, AuthIsValid, Redirect } from '../lib/auth'

export default function Dashboard(props) {
  const t = props.locale === 'en' ? en : fr
  let time = new Date().getHours()
  const userid = getCookie('userid')

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
          setError(`Error fetching ${program} data ${res.status} - ${text}.`)
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
      <Greeting
        greeting={t[getGreeting(time)]}
        name="Mary"
        welcome={t.welcome}
        alert_icon_alt_text={t.alertIconAltText_success}
        alert_icon_id={t.alertIconId_success}
        message_heading={t.messageHeading}
        message_body={t.messageBody}
        myBenefitsAndServices={t.myBenefitsAndServices}
      />
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
                  callout={MapCallout(value.statusCode, value.typeCode, t)}
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
                  callout={MapCallout(value.statusCode, value.typeCode, t)}
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
                  callout={MapCallout(value.statusCode, value.typeCode, t)}
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
                  callout={MapCallout(value.statusCode, value.typeCode, t)}
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
                  callout={MapCallout(value.statusCode, value.typeCode, t)}
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
            callout={MapCallout(sebBenefit.statusCode, sebBenefit.typeCode, t)}
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

        {/* no benefit cards display only on the "all cards" page */}
        {userid == 'default'
          ? noBenefitCards.map((value, index) => {
              return (
                <div key={index} data-testid={'no-benefit-card' + index}>
                  <NoBenefitCard locale={props.locale} benefit={value} />
                </div>
              )
            })
          : null}
      </div>
    </>
  )
}

export async function getServerSideProps({ req, res, locale, query }) {
  if (!AuthIsDisabled() && !(await AuthIsValid(req))) return Redirect()

  const { userid } = query
  setCookies('userid', userid, { req, res, maxAge: 60 * 6 * 24 })

  // const aemContent = await queryGraphQL(getDashboardPage).then((result) => {
  //   return result;
  // });
  // console.log(aemContent)

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
