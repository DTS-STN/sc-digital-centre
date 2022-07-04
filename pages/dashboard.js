import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import Greeting from '../components/molecules/Greeting'
import { getNoBenefitCards } from '../contents/NoBenefitCards'
import { getAdvertsingCards } from '../contents/BenefitAdvertisingCards'
import { getSession } from 'next-auth/react'
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
  const [gisError, setGisError] = useState()

  const [sebBenefit, setSebBenefit] = useState()
  const [sebLoaded, setSebLoaded] = useState(false)
  const [sebError, setSebError] = useState()

  const [allBenefits, setAllBenefits] = useState()

  useEffect(() => {
    if (
      !cppLoaded &&
      !cppdLoaded &&
      !eiLoaded &&
      !oasLoaded &&
      !gisLoaded &&
      !sebLoaded
    ) {
      async function fetchProgramData(program, setData, setError, setLoaded) {
        try {
          const res = await fetch(`/api/programData/${program}`)
          console.log(program)
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
    }
  }, [cppLoaded, cppdLoaded, eiLoaded, gisLoaded, oasLoaded, sebLoaded])

  useEffect(() => {
    if (
      cppLoaded &&
      cppdLoaded &&
      eiLoaded &&
      oasLoaded &&
      gisLoaded &&
      sebLoaded
    ) {
      const newArray = [
        eiBenefit,
        cppBenefit,
        oasBenefit,
        gisBenefit,
        cppdBenefit,
        sebBenefit,
      ]

      let orderedPaymentHold = []
      let orderedApplicationReceived = []
      let orderedDecisionSent = []
      let orderedBenefitUpdate = []
      let orderedInPayment = []
      let orderedExhausted = []
      let orderedInactive = []
      let orderedActiveAgreement = []

      newArray.forEach((benefits) => {
        if (benefits != undefined) {
          console.log(benefits)
          benefits.forEach((benefit) => {
            switch (benefit.statusCode) {
              case StatusCodes.paymentHold:
                orderedPaymentHold.push(benefit)
                break
              case StatusCodes.applicationReceived:
                orderedApplicationReceived.push(benefit)
                break
              case StatusCodes.decisionSent:
                orderedDecisionSent.push(benefit)
                break
              case StatusCodes.benefitUpdate:
                orderedBenefitUpdate.push(benefit)
                break
              case StatusCodes.inPayment:
                orderedInPayment.push(benefit)
                break
              case StatusCodes.exhausted:
                orderedExhausted.push(benefit)
                break
              case StatusCodes.inactive:
                orderedInactive.push(benefit)
                break
              case StatusCodes.activeAgreement:
                orderedActiveAgreement.push(benefit)
                break
            }
          })
        }
      })

      setAllBenefits([
        orderedPaymentHold,
        orderedApplicationReceived,
        orderedDecisionSent,
        orderedBenefitUpdate,
        orderedInPayment,
        orderedExhausted,
        orderedInactive,
        orderedActiveAgreement,
      ])
    }
  }, [
    cppBenefit,
    cppdBenefit,
    eiBenefit,
    oasBenefit,
    gisBenefit,
    sebBenefit,
    cppLoaded,
    cppdLoaded,
    eiLoaded,
    oasLoaded,
    gisLoaded,
    sebLoaded,
  ])

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
        {allBenefits
          ? allBenefits.map((benefits) => {
              return benefits.map((value, index) => {
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
            })
          : null}

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
