import BenefitCard from '../components/molecules/BenefitCard'
import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import Greeting from '../components/molecules/Greeting'
import { getBenefitCards } from '../contents/BenefitCards'
import { getNoBenefitCards } from '../contents/NoBenefitCards'
import { getAdvertsingCards } from '../contents/BenefitAdvertisingCards'
import { getSession } from 'next-auth/react'
import UniversalBenefitCard from '../components/molecules/UniversalBenefitCard'
import { useEffect, useState } from 'react'

export default function Dashboard(props) {
  const [benefitCards, setBenefitCards] = useState(props.benefitCards)
  const [advertisingCards, setAdvertisingCards] = useState(
    props.advertisingCards
  )
  const [noBenefitCards, setNoBenefitCards] = useState(props.noBenefitCards)
  const [cppBenefit, setCppBenefit] = useState()
  const [eiBenefit, setEiBenefit] = useState()
  const [cppLoaded, setCppLoaded] = useState(false)
  const [eiLoaded, setEiLoaded] = useState(false)
  //no requirements to do anything with the errors yet
  const [cppError, setCppError] = useState(false)
  const [eiError, setEiError] = useState(false)

  useEffect(() => {
    fetch(`/api/programData/cpp`)
      .then((res) => res.json())
      .then((data) => {
        setCppBenefit(data)
      })
      .catch((error) => {
        setCppError(error)
      })
      .finally(() => setCppLoaded(true))

    fetch(`/api/programData/ei`)
      .then((res) => res.json())
      .then((data) => {
        setEiBenefit(data)
      })
      .catch((error) => {
        setEiError(error)
      })
      .finally(() => setEiLoaded(true))
  }, [])

  return (
    <>
      <Greeting locale={props.locale} name="Mary" />

      {cppLoaded ? null : 'Loading User Benefit Data...'}
      {cppBenefit ? (
        <UniversalBenefitCard
          key={0}
          locale={props.locale}
          benefit={cppBenefit}
        />
      ) : null}

      {eiLoaded ? null : 'Loading User Benefit Data...'}
      {eiBenefit ? (
        <UniversalBenefitCard
          key={1}
          locale={props.locale}
          benefit={eiBenefit}
        />
      ) : null}

      {/* Old Benefit Cards, to be removed once mocks are generated with new cards */}
      {benefitCards.map((value, index) => {
        return <BenefitCard locale={props.locale} benefit={value} />
      })}

      {/* application or "advertising" cards */}
      {advertisingCards.map((value, index) => {
        if (value.benefitType === 'CPP' && cppBenefit) {
          console.log(value)
          console.log(cppBenefit)
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
