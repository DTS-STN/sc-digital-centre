import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import Greeting from '../components/molecules/Greeting'
import { getNoBenefitCards } from '../contents/NoBenefitCards'
import {
  getAdvertisingCards,
  defaultDisplayFlags,
} from '../contents/BenefitAdvertisingCards'
import UniversalBenefitCard from '../components/molecules/UniversalBenefitCard'
import { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import { TASK_GROUPS } from '../contents/BenefitTasksGroups'
import en from '../locales/en'
import fr from '../locales/fr'
import { StatusColors, StatusCodes } from '../constants/StatusCodes'
import { MapSummary } from '../lib/mapSummaries'
import { getGreeting } from '../lib/Utils'
import { determineAdCards } from '../lib/mapAdCards'
import MapCallout from '../lib/mapCallout'
import { AuthIsDisabled, AuthIsValid, Redirect } from '../lib/auth'
import LoadingState from '../components/molecules/LoadingState'
import getDashboardContent from '../lib/aem/mapper'

export default function Dashboard(props) {
  const t = props.locale === 'en' ? en : fr
  let time = new Date().getHours()
  const userid = getCookie('userid')

  const [advertisingCards, setAdvertisingCards] = useState(
    props.advertisingCards
  )
  const [adDisplayFlags, setAdDisplayFlags] = useState(defaultDisplayFlags)
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
      let orderedPaid = []

      newArray.forEach((benefits) => {
        if (benefits != undefined) {
          benefits.forEach((benefit) => {
            //order the benefits
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
              case StatusCodes.paid:
                orderedPaid.push(benefit)
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
            determineAdCards(benefit, defaultDisplayFlags)
          })
        }
      })

      setAdDisplayFlags(defaultDisplayFlags)

      setAllBenefits([
        orderedPaymentHold,
        orderedApplicationReceived,
        orderedDecisionSent,
        orderedBenefitUpdate,
        orderedInPayment,
        orderedPaid,
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
        alert_icon_alt_text={t.alertIconAltText_success}
        alert_icon_id={t.alertIconId_success}
        message_heading={t.messageHeading}
        message_body={t.messageBody}
        myBenefitsAndServices={t.myBenefitsAndServices}
      />
      <div className="mb-8">
        {eiLoaded &&
        cppLoaded &&
        oasLoaded &&
        gisLoaded &&
        cppdLoaded &&
        sebLoaded ? null : (
          <>
            <LoadingState />
            <LoadingState />
          </>
        )}
        {eiError ?? null}
        {cppError ?? null}
        {oasError ?? null}
        {gisError ?? null}
        {cppdError ?? null}
        {sebError ?? null}

        {allBenefits
          ? allBenefits.map((benefits) => {
              return benefits.map((value, index) => {
                //if we don't have these, things break
                if (value.programCode && value.typeCode && value.statusCode) {
                  const tasksGroups =
                    TASK_GROUPS[value.programCode][value.statusCode][
                      props.locale
                    ]
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
                        hidden:
                          value.statusCode === StatusCodes.activeAgreement,
                      }}
                      taskHeading={tasksGroups.taskHeadingKey}
                      taskGroups={tasksGroups.tasksGroups}
                      benefitDurationReached={t.benefitDurationReached}
                      applyForProgram={`${t.applyFor} ${t[value.programCode]}`}
                      summaries={MapSummary(value.summaries, t, props.locale)}
                      callout={MapCallout(value.statusCode, value.typeCode, t)}
                    />
                  )
                }
              })
            })
          : null}

        {/* application or "advertising" cards */}
        {advertisingCards.map((adCard, key) => {
          return !adDisplayFlags[adCard.benefitType][adCard.typeCode] ? null : (
            <div key={key}>
              <BenefitApplicationCard
                locale={props.locale}
                benefitApplication={adCard}
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
  setCookie('userid', userid, { req, res, maxAge: 60 * 6 * 24 })

  // Get mapped content from AEM
  let aemContent
  try {
    aemContent = await getDashboardContent()
  } catch (e) {
    return {
      redirect: {
        destination: '/500',
      },
    }
  }

  const metadata = {
    title: 'Digital Centre (en) + Digital Centre (fr)',
    keywords: 'en + fr keywords',
    description: 'en + fr description',
  }

  return {
    props: {
      advertisingCards: getAdvertisingCards(),
      noBenefitCards: getNoBenefitCards(locale),
      isAuth: true,
      locale,
      metadata,
      aemContent,
    },
  }
}
