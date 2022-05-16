import BenefitCard from '../components/molecules/BenefitCard'
import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import Greeting from '../components/molecules/Greeting'
import {
  SUBMITTED_CPP,
  ACTIVE_CPP,
  SUBMITTED_CPPD,
  ACTIVE_CPPD,
  INACTIVE_CPPD,
  SUBMITTED_OAS,
  ACTIVE_OAS,
  SUBMITTED_EI,
  ACTIVE_EI,
  INACTIVE_EI,
  ACTIVE_SEB,
} from '../contents/DashboardBenefitCardConstants'
import {
  NO_BENEFIT_CPP,
  NO_BENEFIT_GIS,
  NO_BENEFIT_OAS,
  NO_BENEFIT_EI,
} from '../contents/DashboardNoBenefitCardConstants'
import {
  SUBMITTED_CPP_ESTIMATE_TASKS,
  SUBMITTED_CPP_CHANGE_TASKS,
  ACTIVE_CPP_PAYMENT_TASKS,
  ACTIVE_CPP_CHANGE_TASKS,
  INACTIVE_CPP_TASKS,
  SUBMITTED_CPPD_TASKS,
  ACTIVE_CPPD_TASKS,
  SUBMITTED_OAS_TASKS,
  ACTIVE_OAS_TASKS,
  SUBMITTED_EI_TASKS,
  ACTIVE_EI_COMMON_TASKS,
  ACTIVE_EI_PAYMENT_TASKS,
  ACTIVE_EI_DOCS_TASKS,
  INACTIVE_EI_TASKS,
  NO_BENEFIT_CPP_TASKS,
  NO_BENEFIT_GIS_TASKS,
  NO_BENEFIT_OAS_TASKS,
  NO_BENEFIT_EI_TASKS,
  ACTIVE_SEB_TASKS,
} from '../contents/DashboardBenefitTasksConstants'
import {
  APPLICATION_CARD_OAS,
  APPLICATION_CARD_GIS,
  APPLICATION_CARD_CPPD,
  APPLICATION_CARD_EI,
  APPLICATION_CARD_CPP,
  APPLICATION_CARD_CPP_CHILDS_BENEFIT_AGED_18_25,
  APPLICATION_CARD_CPP_SURVIVOR_PENSION_AND_CHILD_BENEFITS,
  APPLICATION_CARD_CPP_ALLOWANCE_OR_ALLOWANCE_FOR_SURVIVOR,
  APPLICATION_CARD_CPP_PENSION_SHARING,
  APPLICATION_CARD_CPP_CREADIT_SPLIT,
  APPLICATION_CARD_CPP_CHILD_REARING_PROVISION,
  APPLICATION_CARD_CPP_DEATH_BENEFIT,
} from '../contents/DashboardBenefitApplicationCards'
import { getSession } from 'next-auth/react'
import Layout from '../components/organisms/Layout'
import UniversalBenefitCard from '../components/molecules/UniversalBenefitCard'
import { StatusCodes } from '../constants/StatusCodes'
import { ProgramCodes } from '../constants/ProgramCodes'
import { TypeCodes } from '../constants/ProgramTypeCodes'
import { useCallback, useEffect, useState } from 'react'

export default function Dashboard(props) {
  const [advertisingCards, setAdvertisingCards] = useState(
    props.advertisingCards
  )
  const [usersBenefits, setUsersBenefits] = useState([])
  const [cppLoaded, setCppLoaded] = useState(false)
  const [eiLoaded, setEiLoaded] = useState(false)
  //no requirements to do anything with the errors yet
  const [cppError, setCppError] = useState(false)
  const [eiError, setEiError] = useState(false)

  const FilterAdvertisingCards = useCallback(
    (benefits) => {
      //determine which advertising cards to remove
      const cardsToRemove = []
      if (benefits && benefits.length) {
        if (
          !CheckAllBenefitsForAdvertising(
            benefits,
            [StatusCodes.inPayment, StatusCodes.Pending],
            ProgramCodes.CPP,
            TypeCodes.CPPRetirement
          )
        ) {
          cardsToRemove.push(APPLICATION_CARD_CPP)
        }
        if (
          !CheckAllBenefitsForAdvertising(
            benefits,
            [StatusCodes.inPayment, StatusCodes.Pending],
            ProgramCodes.OAS
          )
        ) {
          cardsToRemove.push(APPLICATION_CARD_OAS)
        }
        if (
          !CheckAllBenefitsForAdvertising(
            benefits,
            [StatusCodes.inPayment, StatusCodes.Pending],
            ProgramCodes.GIS
          )
        ) {
          cardsToRemove.push(APPLICATION_CARD_GIS)
        }
        if (
          !CheckAllBenefitsForAdvertising(
            benefits,
            [StatusCodes.inPayment, StatusCodes.Pending],
            ProgramCodes.CPP,
            TypeCodes.CPPDisability
          )
        ) {
          cardsToRemove.push(APPLICATION_CARD_CPPD)
        }
      }

      //now remove them if they should be removed
      return cardsToRemove.length
        ? props.advertisingCards.filter((c) =>
            cardsToRemove.find((r) => r.benefitType !== c.benefitType)
          )
        : props.advertisingCards
    },
    [props.advertisingCards]
  )

  useEffect(() => {
    async function FetchProgramData(program, isLoaded, setLoading, setError) {
      if (!isLoaded) {
        fetch(`api/programData/${program}`)
          .then((res) => res.json())
          .then((data) => {
            const currData = usersBenefits
            currData.push(data)
            setUsersBenefits(currData)
            setAdvertisingCards(FilterAdvertisingCards(currData))
          })
          .catch((error) => {
            setError(error)
          })
          .finally(() => setLoading(true))
      }
    }

    FetchProgramData('cpp', cppLoaded, setCppLoaded, setCppError)
    FetchProgramData('ei', eiLoaded, setEiLoaded, setEiError)
  }, [cppLoaded, eiLoaded, usersBenefits])

  return (
    <>
      <Greeting locale={props.locale} name="Mary" />

      {/* todo, design to create loading */}
      {cppLoaded && eiLoaded ? null : 'Loading User Benefit Data...'}
      {!usersBenefits || !usersBenefits.length
        ? null
        : usersBenefits.map((value, index) => {
            return (
              <UniversalBenefitCard
                key={index}
                locale={props.locale}
                benefit={value}
              />
            )
          })}

      {/* Old Benefit Cards, to be removed once mocks are generated with new cards */}
      <BenefitCard
        locale={props.locale}
        benefit={SUBMITTED_CPP}
        tasks={[SUBMITTED_CPP_ESTIMATE_TASKS, SUBMITTED_CPP_CHANGE_TASKS]}
        taskGroups={true}
      />
      <BenefitCard
        locale={props.locale}
        benefit={ACTIVE_CPP}
        tasks={[ACTIVE_CPP_PAYMENT_TASKS, ACTIVE_CPP_CHANGE_TASKS]}
        taskGroups={true}
      />
      <BenefitCard
        locale={props.locale}
        benefit={SUBMITTED_OAS}
        tasks={SUBMITTED_OAS_TASKS}
      />
      <BenefitCard
        locale={props.locale}
        benefit={ACTIVE_OAS}
        tasks={ACTIVE_OAS_TASKS}
      />
      <BenefitCard
        locale={props.locale}
        benefit={SUBMITTED_EI}
        tasks={SUBMITTED_EI_TASKS}
      />
      <BenefitCard
        locale={props.locale}
        benefit={ACTIVE_EI}
        tasks={[
          ACTIVE_EI_COMMON_TASKS,
          ACTIVE_EI_PAYMENT_TASKS,
          ACTIVE_EI_DOCS_TASKS,
        ]}
        taskGroups={true}
      />
      <BenefitCard
        locale={props.locale}
        benefit={INACTIVE_EI}
        tasks={INACTIVE_EI_TASKS}
      />
      <BenefitCard
        locale={props.locale}
        benefit={SUBMITTED_CPPD}
        tasks={SUBMITTED_CPPD_TASKS}
      />
      <BenefitCard
        locale={props.locale}
        benefit={ACTIVE_CPPD}
        tasks={ACTIVE_CPPD_TASKS}
      />
      <BenefitCard
        locale={props.locale}
        benefit={INACTIVE_CPPD}
        tasks={INACTIVE_CPP_TASKS}
      />
      <BenefitCard
        locale={props.locale}
        benefit={ACTIVE_SEB}
        tasks={[ACTIVE_SEB_TASKS]}
        taskGroups={true}
      />

      {/* application or "advertising" cards */}
      {advertisingCards.map((value, index) => {
        return (
          <div key={index}>
            <BenefitApplicationCard
              locale={props.locale}
              benefitApplication={value}
            />
          </div>
        )
      })}

      {/* application or "advertising" cards */}
      {props.advertisingCards.map((value, index) => {
        return (
          <div key={index}>
            <BenefitApplicationCard
              locale={props.locale}
              benefitApplication={value}
            />
          </div>
        )
      })}

      <NoBenefitCard
        locale={props.locale}
        benefit={NO_BENEFIT_CPP}
        tasks={NO_BENEFIT_CPP_TASKS}
      />
      <NoBenefitCard
        locale={props.locale}
        benefit={NO_BENEFIT_EI}
        tasks={NO_BENEFIT_EI_TASKS}
      />
      <NoBenefitCard
        locale={props.locale}
        benefit={NO_BENEFIT_GIS}
        tasks={NO_BENEFIT_GIS_TASKS}
      />
      <NoBenefitCard
        locale={props.locale}
        benefit={NO_BENEFIT_OAS}
        tasks={NO_BENEFIT_OAS_TASKS}
      />
    </>
  )
}

export async function getServerSideProps({ req, locale }) {
  let isAuth = false

  if (
    !process.env.AUTH_DISABLED ||
    process.env.AUTH_DISABLED.toLowerCase() === 'false'
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

  const langToggleLink = locale === 'en' ? '/fr/dashboard' : '/dashboard'

  return {
    props: {
      advertisingCards: BuildAdvertisingCards(),
      isAuth: true,
      locale,
      langToggleLink,
      metadata,
    },
  }
}

function BuildAdvertisingCards() {
  // the order of these matters
  const advertisingCards = []

  advertisingCards.push(APPLICATION_CARD_EI)
  advertisingCards.push(APPLICATION_CARD_CPP)
  advertisingCards.push(APPLICATION_CARD_OAS)
  advertisingCards.push(APPLICATION_CARD_GIS)
  advertisingCards.push(APPLICATION_CARD_CPPD)
  advertisingCards.push(APPLICATION_CARD_CPP_CHILDS_BENEFIT_AGED_18_25)
  advertisingCards.push(
    APPLICATION_CARD_CPP_SURVIVOR_PENSION_AND_CHILD_BENEFITS
  )
  advertisingCards.push(
    APPLICATION_CARD_CPP_ALLOWANCE_OR_ALLOWANCE_FOR_SURVIVOR
  )
  advertisingCards.push(APPLICATION_CARD_CPP_PENSION_SHARING)
  advertisingCards.push(APPLICATION_CARD_CPP_CREADIT_SPLIT)
  advertisingCards.push(APPLICATION_CARD_CPP_CHILD_REARING_PROVISION)
  advertisingCards.push(APPLICATION_CARD_CPP_DEATH_BENEFIT)

  return advertisingCards
}

/// return: the benefit can be advertised
/// benefit: the benefit to be checked
/// program: the program to match to
/// type: the type to match to
/// status: status' that the advertising card can't be shown with
function CheckAllBenefitsForAdvertising(benefits, status, program, type) {
  var matchingBenefit
  if (typeof type === 'undefined')
    //overloaded function handling
    matchingBenefit = benefits.find((b) => b.programCode == program)
  else
    matchingBenefit = benefits.find(
      (b) => b.programCode == program && b.typeCode == type
    )

  if (matchingBenefit == null) return true
  //check if there is a status to evaluate
  //if (typeof status === 'undefined' || status.length == 0) return false
  //evaluate for a matching status
  return !status.find((s) => s == matchingBenefit.statusCode)
}
