import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import Greeting from '../components/molecules/Greeting'
import { getNoBenefitCards } from '../contents/NoBenefitCards'
import { getAdvertsingCards } from '../contents/BenefitAdvertisingCards'
import { getSession } from 'next-auth/react'
import UniversalBenefitCard from '../components/molecules/UniversalBenefitCard'
import { useEffect, useState } from 'react'
import { setCookies } from 'cookies-next'
import BenefitCard from '../components/organisms/BenefitCard'
import en from '../locales/en'
import fr from '../locales/fr'

export default function Dashboard(props) {
  const t = props.locale === 'en' ? en : fr
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

  let cppBenefitCard = {
    id: 'cpp-CPPRetirement-inPayment',
    code: 'cpp',
    name: t.cpp,
    summary:
      props.locale === 'en' ? (
        <>
          {t.cpp}
          <span className="sr-only">{t.summary}</span>
        </>
      ) : (
        <>
          <span className="sr-only">{t.summary}</span>
          {t.cpp}
        </>
      ),
    status: {
      text: (
        <>
          <span className="sr-only">{props.program} </span>
          {t['inPayment']}
        </>
      ),
      className: 'bg-status-inPayment',
    },
    typeCode: 'CPPRetirement',
    summaries: [
      {
        type: 'ActiveBenefit',
        value: 'CPPRetirement',
      },
      {
        type: 'LastPaymentDate',
        value: '2021-02-21',
      },
      {
        type: 'NextPayment',
        value: 1616281200000,
      },
      {
        type: 'LastPayment',
        value: 30.32,
      },
    ],
    taskGroups: [
      {
        header: 'paymentTasks',
        tasks: [
          {
            task: 'allPaymentsTask',
            taskIcon: '/images/dashboard/oas-payment-icon.svg',
            taskLink: 'allPaymentsTaskLink',
          },
          {
            task: 'taxSlipTask',
            taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
            taskLink: 'taxSlipTaskLink',
          },
          {
            task: 'cppContributionTask',
            taskIcon: '/images/dashboard/oas-cpp-contributions-icon.svg',
            taskLink: 'cppContributionTaskLink',
          },
          {
            task: 'taxDeductionsTask',
            taskIcon: '/images/dashboard/oas-federal-tax-deductions-icon.svg',
            taskLink: 'taxDeductionsTaskLink',
          },
          {
            task: 'retirementIncomeTask',
            taskIcon: '/images/dashboard/oas-retirement-income-icon.svg',
            taskLink: 'retirementIncomeTaskLink',
          },
        ],
      },
      {
        header: 'changeTasks',
        tasks: [
          {
            task: 'reconsiderationTask',
            taskIcon:
              '/images/dashboard/oas-request-for-reconsideration-icon.svg ',
            taskLink: 'reconsiderationLink',
          },
          {
            task: 'delayOasPensionTask',
            taskIcon: '/images/dashboard/oas-delay-receiving-pension-icon.svg',
            taskLink: 'delayOasPensionTaskLink',
          },
          {
            task: 'giveConsentTask',
            taskIcon: '/images/dashboard/oas-consent-icon.svg',
            taskLink: 'giveConsentTaskLink',
          },
          {
            task: 'updateAccountInfoTask',
            taskIcon: '/images/dashboard/account-info-icon.svg',
            taskLink: 'updateAccountInfoTaskLink',
          },
        ],
      },
    ],
    moreLessCaption: t['paymentsTaxesAccount'],
  }

  return (
    <>
      <Greeting locale={props.locale} name="Mary" />

      <BenefitCard
        benefit={cppBenefitCard}
        benefitDurationReached={t.benefitDurationReached}
        applyFor={t.applyFor}
      />

      <div className="mb-8">
        {cppLoaded ? null : 'Loading CPP User Benefit Data...'}
        {cppError ?? null}
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

        {cppdLoaded ? null : 'Loading CPPD User Benefit Data...'}
        {cppdError ?? null}
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

        {eiLoaded ? null : 'Loading EI User Benefit Data...'}
        {eiError ?? null}
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

        {oasLoaded ? null : 'Loading OAS User Benefit Data...'}
        {oasError}
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

        {gisLoaded ? null : 'Loading User Benefit Data...'}
        {gisError}
        {gisBenefit
          ? gisBenefit.map((value, index) => {
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
        {sebError}
        {sebBenefit ? (
          <UniversalBenefitCard locale={props.locale} benefit={sebBenefit} />
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
