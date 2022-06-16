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

export default function Dashboard(props) {
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
      <Greeting locale={props.locale} name="Mary" />
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
                  benefit={value}
                  taskHeading={tasksGroups.taskHeadingKey}
                  taskGroups={tasksGroups.tasksGroups}
                />
              )
            })
          : null}

        {cppdLoaded ? null : 'Loading CPPD User Benefit Data...'}
        {cppdError ?? null}
        {cppdBenefit
          ? cppdBenefit.map((value, index) => {
              return (
                <UniversalBenefitCard
                  key={index}
                  locale={props.locale}
                  benefit={value}
                  taskGroups={value.taskGroups}
                />
              )
            })
          : null}

        {eiLoaded ? null : 'Loading EI User Benefit Data...'}
        {eiError ?? null}
        {eiBenefit
          ? eiBenefit.map((value, index) => {
              return (
                <UniversalBenefitCard
                  key={index}
                  locale={props.locale}
                  benefit={value}
                  taskGroups={value.taskGroups}
                />
              )
            })
          : null}

        {oasLoaded ? null : 'Loading OAS User Benefit Data...'}
        {oasError}
        {oasBenefit
          ? oasBenefit.map((value, index) => {
              return (
                <UniversalBenefitCard
                  key={index + 3}
                  locale={props.locale}
                  benefit={value}
                  taskGroups={value.taskGroups}
                />
              )
            })
          : null}

        {gisLoaded ? null : 'Loading User Benefit Data...'}
        {gisError}
        {gisBenefit
          ? gisBenefit.map((value, index) => {
              return (
                <UniversalBenefitCard
                  key={index + 3}
                  locale={props.locale}
                  benefit={value}
                  taskGroups={value.taskGroups}
                />
              )
            })
          : null}

        {sebLoaded ? null : 'Loading User Benefit Data...'}
        {sebError}
        {sebBenefit ? (
          <UniversalBenefitCard
            locale={props.locale}
            benefit={sebBenefit}
            taskGroups={value.taskGroups}
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
