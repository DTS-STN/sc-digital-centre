import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import Greeting from '../components/molecules/Greeting'
import { getNoBenefitCards } from '../contents/NoBenefitCards'
import { getAdvertisingCards } from '../contents/BenefitAdvertisingCards'
import UniversalBenefitCard from '../components/molecules/UniversalBenefitCard'
import { useEffect, useState } from 'react'
import { setCookies, getCookie } from 'cookies-next'
import { TASK_GROUPS } from '../contents/BenefitTasksGroups'
import { ProgramCodes } from '../constants/ProgramCodes'
import { TypeCodes } from '../constants/ProgramTypeCodes'
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

      //deep clone advertisingCards, set displayFlag for true for now
      const newAdCards = {}
      for (let key in advertisingCards) {
        newAdCards[key] = { ...advertisingCards[key] }
        newAdCards[key].displayFlag = true
      }

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

            //determine what benefits to advertise
            if (
              benefit.programCode === ProgramCodes.EI &&
              benefit.statusCode === StatusCodes.inactive
            ) {
              newAdCards.EI.displayFlag = false
            }
            if (
              benefit.programCode === ProgramCodes.CPP &&
              benefit.typeCode === TypeCodes.CPPRetirement
            ) {
              //retirement benefit
              newAdCards.CPP.displayFlag = false
            }
            if (benefit.typeCode === TypeCodes.OASRetirement) {
              newAdCards.OAS.displayFlag = false
            }
            if (benefit.typeCode === TypeCodes.GISRetirement) {
              newAdCards.GIS.displayFlag = false
            }
            if (benefit.programCode === ProgramCodes.CPPD) {
              newAdCards.CPPD.displayFlag = false
            }
            if (false) {
              //No CPP benefit card with Child's Benefit implemented
              newAdCards.CPP_child_benefit_aged_18_25.displayFlag = false
            }
            if (
              benefit.programCode === ProgramCodes.CPP &&
              benefit.typeCode === TypeCodes.CPPSurvivor
            ) {
              newAdCards.CPP_survivors_pension_and_childrens_benefits.displayFlag = false
            }
            if (false) {
              //No GIS benefit card with Allowance or Allowance for the Survivor benefit implemented
              newAdCards.CPP_allowance_or_allowance_for_survivor.displayFlag = false
            }
          })
        }
      })

      setAdvertisingCards(newAdCards)

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
        alert_icon_alt_text={t.alertIconAltText_success}
        alert_icon_id={t.alertIconId_success}
        message_heading={t.messageHeading}
        message_body={t.messageBody}
        myBenefitsAndServices={t.myBenefitsAndServices}
      />
      <div className="mb-8">
        {eiLoaded ? null : <p>Loading EI User Benefit Data...</p>}
        {eiError ?? null}

        {cppLoaded ? null : <p>Loading CPP User Benefit Data...</p>}
        {cppError ?? null}

        {oasLoaded ? null : <p>Loading OAS User Benefit Data...</p>}
        {oasError ?? null}

        {gisLoaded ? null : <p>Loading GIS User Benefit Data...</p>}
        {gisError ?? null}
        {cppdLoaded ? null : <p>Loading CPPD User Benefit Data...</p>}
        {cppdError ?? null}

        {sebLoaded ? null : <p>Loading SEB User Benefit Data...</p>}
        {sebError ?? null}

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
        {Object.entries(advertisingCards).map(([key, benefit]) => {
          if (!benefit.displayFlag) {
            return
          }
          return (
            <div key={key}>
              <BenefitApplicationCard
                locale={props.locale}
                benefitApplication={benefit.adCard}
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
      advertisingCards: getAdvertisingCards(),
      noBenefitCards: getNoBenefitCards(locale),
      isAuth: true,
      locale,
      metadata,
    },
  }
}
