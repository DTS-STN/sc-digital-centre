import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from './HorizontalRule'
import CircleProgressBar from './CircleProgressBar'
import Link from 'next/link'

export default function BenefitCardHeaderActive(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <div className="layout-container">
      <div className="flex mr-12 justify-end">
        <h2
          className={
            'font-bold font-display text-lg px-12 py-1 mb-5 rounded-b-md text-white bg-green-active'
          }
        >
          {props.benefit.applicationStatus}
        </h2>
      </div>
      <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
        <div id="benefitName" className="col-span-1 py-4 sm:px-3">
          <div className="font-bold font-display text-4xl mb-2 w-44">
            {props.benefit.benefitName}
          </div>
        </div>
        <HorizontalRule width="w-1/3" visibility="sm:hidden" />
        <div
          id="paymentStartDate"
          className="font-display col-span-3 py-4 sm:grid grid-cols-3 sm:pl-10"
        >
          <div id="nextPaymentAmount">
            <p className="text-base">{t.paymentAmount}</p>
            <p className="font-bold text-4xl mt-1">
              {props.benefit.nextPaymentAmount}
            </p>
            <Link href="./dashboard">
              <a className="text-sm mt-1 text-bright-blue-solid underline">
                {t.viewPaymentHistory}
              </a>
            </Link>
          </div>

          <div id="nextPaymentDueDate" className="relative mb-20">
            <p>{t.daysUntilNextPayment}</p>
            <CircleProgressBar progress={11} steps={22} />
          </div>

          <div id="lastUpdates">
            <p className="font-display">{t.latestUpdate}</p>
            <p className="font-bold text-lg mt-1">{t.documentReviewed}</p>
            <p className="font-bold text-lg">
              {props.benefit.lastUpdates[0]?.description}
            </p>
            <Link href="./dashboard">
              <a className="text-sm mt-1 text-bright-blue-solid underline">
                {t.viewMyStatusAndMessages}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
