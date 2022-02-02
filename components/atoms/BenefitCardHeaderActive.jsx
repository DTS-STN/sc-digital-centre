import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from './HorizontalRule'

export default function BenefitCardHeaderActive(props) {
  const t = props.locale === 'en' ? en : fr

  function viewPaymentHistory() {
    console.log('View payment history button is Clicked')
  }

  function viewAllActivityAndBenefitHistory() {
    console.log('View all activity and benefit history button is Clicked')
  }

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
        <div id="paymentStartDate" className="col-span-1 py-4 sm:px-3">
          <div className="font-bold font-display text-5xl mb-2">
            {props.benefit.benefitType}
          </div>
          <p className="font-display font-bold text-lg">
            {props.benefit.benefitName}
          </p>
        </div>
        <HorizontalRule width="w-1/3" visibility="sm:hidden" />
        <div
          id="paymentStartDate"
          className="font-display col-span-3 sm:grid grid-cols-3 sm:pl-10"
        >
          <div id="paymentEndDate" className="py-4">
            <p className="text-base">{t.paymentAmount}</p>
            <p className="font-bold text-4xl mt-1">
              {props.benefit.nextPaymentAmount}
            </p>
            <button onClick={viewPaymentHistory}>
              <a
                href={'./dashboard'}
                className="text-sm mt-1 text-bright-blue-solid underline"
              >
                {t.viewPaymentHistory}
              </a>
            </button>
          </div>

          <div id="paymentEndDate" className="py-4">
            <p className="text-base">{t.daysUntilNextPayment}</p>
            <p className="font-bold text-lg">Placeholder for</p>
            <p className="font-bold text-lg">circle progress</p>
          </div>

          {/* Progressbar Placeholder */}
          <div id="paymentEndDate" className="py-4">
            <p className="text-base">{t.latestUpdate}</p>
            <p className="font-bold text-lg mt-1">{t.documentReviewed}</p>
            <p className="font-bold text-lg">
              {props.benefit.lastUpdates[0]?.description}
            </p>
            <button onClick={viewAllActivityAndBenefitHistory}>
              <a
                href={'./dashboard'}
                className="text-sm mt-1 text-bright-blue-solid underline"
              >
                {t.viewAllActivityButton}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
