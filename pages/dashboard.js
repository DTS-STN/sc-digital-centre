import BenefitCard from '../components/molecules/BenefitCard'
import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import Greeting from '../components/molecules/Greeting'
import { getBenefitCards } from '../contents/BenefitCards'
import { getNoBenefitCards } from '../contents/NoBenefitCards'
import {
  APPLICATION_CARD_OAS,
  APPLICATION_CARD_GIS,
  APPLICATION_CARD_CPPD,
  APPLICATION_CARD_CPP,
  getAdvertsingCards,
} from '../contents/BenefitAdvertisingCards'
import { getSession } from 'next-auth/react'
import UniversalBenefitCard from '../components/molecules/UniversalBenefitCard'
import { StatusCodes } from '../constants/StatusCodes'
import { ProgramCodes } from '../constants/ProgramCodes'
import { TypeCodes } from '../constants/ProgramTypeCodes'
import { useCallback, useEffect, useState } from 'react'

export default function Dashboard(props) {
  const [benefitCards, setBenefitCards] = useState(props.benefitCards)
  const [advertisingCards, setAdvertisingCards] = useState(
    props.advertisingCards
  )
  const [noBenefitCards, setNoBenefitCards] = useState(props.noBenefitCards)
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
    fetch(`/api/programData/cpp`)
      .then((res) => res.json())
      .then((data) => {
        usersBenefits.push(data)
        setAdvertisingCards(FilterAdvertisingCards(usersBenefits))
      })
      .catch((error) => {
        setCppError(error)
      })
      .finally(() => setCppLoaded(true))

    fetch(`/api/programData/ei`)
      .then((res) => res.json())
      .then((data) => {
        usersBenefits.push(data)
        setAdvertisingCards(FilterAdvertisingCards(usersBenefits))
      })
      .catch((error) => {
        setEiError(error)
      })
      .finally(() => setEiLoaded(true))
  }, [])

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
      {benefitCards.map((value, index) => {
        return <BenefitCard locale={props.locale} benefit={value} />
      })}

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

      {noBenefitCards.map((value, index) => {
        return <NoBenefitCard locale={props.locale} benefit={value} />
      })}
    </>
  )
}

export async function getServerSideProps({ req, locale }) {
  let isAuth = false

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

  const langToggleLink = locale === 'en' ? '/fr/dashboard' : '/dashboard'

  return {
    props: {
      benefitCards: getBenefitCards(),
      advertisingCards: getAdvertsingCards(),
      noBenefitCards: getNoBenefitCards(),
      isAuth: true,
      locale,
      langToggleLink,
      metadata,
    },
  }
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
