import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import Greeting from '../components/molecules/Greeting'
import { getNoBenefitCards } from '../contents/NoBenefitCards'
import { getAdvertsingCards } from '../contents/BenefitAdvertisingCards'
import { getSession } from 'next-auth/react'
import UniversalBenefitCard from '../components/molecules/UniversalBenefitCard'
import { useEffect, useState } from 'react'
import { setCookies } from 'cookies-next'

export default function Dashboard(props) {
  const [advertisingCards, setAdvertisingCards] = useState(
    props.advertisingCards
  )
  const [noBenefitCards, setNoBenefitCards] = useState(props.noBenefitCards)

  const [cppBenefit, setCppBenefit] = useState()
  const [cppLoaded, setCppLoaded] = useState(false)
  const [cppError, setCppError] = useState(false)

  const [cppdBenefit, setCppdBenefit] = useState()
  const [cppdLoaded, setCppdLoaded] = useState(false)
  const [cppdError, setCppdError] = useState(false)

  const [eiBenefit, setEiBenefit] = useState()
  const [eiLoaded, setEiLoaded] = useState(false)
  const [eiError, setEiError] = useState(false)

  const [oasBenefit, setOasBenefit] = useState()
  const [oasLoaded, setOasLoaded] = useState(false)
  const [oasError, setOasError] = useState(false)

  const [sebBenefit, setSebBenefit] = useState()
  const [sebLoaded, setSebLoaded] = useState(false)
  const [sebError, setSebError] = useState(false)

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

    fetch(`/api/programData/cppd`)
      .then((res) => res.json())
      .then((data) => {
        setCppdBenefit(data)
      })
      .catch((error) => {
        setCppdError(error)
      })
      .finally(() => setCppdLoaded(true))

    fetch(`/api/programData/ei`)
      .then((res) => res.json())
      .then((data) => {
        setEiBenefit(data)
      })
      .catch((error) => {
        setEiError(error)
      })
      .finally(() => setEiLoaded(true))

    fetch(`/api/programData/oas`)
      .then((res) => res.json())
      .then((data) => {
        setOasBenefit(data)
      })
      .catch((error) => {
        setOasError(error)
      })
      .finally(() => setOasLoaded(true))

    fetch(`/api/programData/seb`)
      .then((res) => res.json())
      .then((data) => {
        setSebBenefit(data)
      })
      .catch((error) => {
        setSebError(error)
      })
      .finally(() => setSebLoaded(true))
  }, [])

  return (
    <>
      <Greeting locale={props.locale} name="Mary" />
      <div className="mb-8">
        {cppLoaded ? null : 'Loading User Benefit Data...'}
        {cppBenefit
          ? cppBenefit.map((value, index) => {
              return (
                <UniversalBenefitCard
                  key={index}
                  locale={props.locale}
                  benefit={value}
                />
              )
            })
          : null}

        {cppdLoaded ? null : 'Loading User Benefit Data...'}
        {cppdBenefit
          ? cppdBenefit.map((value, index) => {
              return (
                <UniversalBenefitCard
                  key={index}
                  locale={props.locale}
                  benefit={value}
                />
              )
            })
          : null}

        {eiLoaded ? null : 'Loading User Benefit Data...'}
        {eiBenefit
          ? eiBenefit.map((value, index) => {
              return (
                <UniversalBenefitCard
                  key={index}
                  locale={props.locale}
                  benefit={value}
                />
              )
            })
          : null}

        {oasLoaded ? null : 'Loading User Benefit Data...'}
        {oasBenefit
          ? oasBenefit.map((value, index) => {
              return (
                <UniversalBenefitCard
                  key={index + 3}
                  locale={props.locale}
                  benefit={value}
                />
              )
            })
          : null}

        {sebLoaded ? null : 'Loading User Benefit Data...'}
        {sebBenefit ? (
          <UniversalBenefitCard
            key={4}
            locale={props.locale}
            benefit={sebBenefit}
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

        {noBenefitCards.map((value, index) => {
          return (
            <div key={index}>
              <NoBenefitCard locale={props.locale} benefit={value} />
            </div>
          )
        })}
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

  const langToggleLink = locale === 'en' ? '/fr/dashboard' : '/dashboard'

  return {
    props: {
      advertisingCards: getAdvertsingCards(),
      noBenefitCards: getNoBenefitCards(),
      isAuth: true,
      locale,
      langToggleLink,
      metadata,
    },
  }
}
