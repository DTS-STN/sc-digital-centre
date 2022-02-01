import en from '../../locales/en'
import fr from '../../locales/fr'
import CircleProgressBar from './CircleProgressBar'

export default function ActiveHeader(props) {
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

      <div className="sm:flex sm:justify-around sm:grid sm:grid-cols-4 divide-x-2 sm:mx-auto">
        <div id="paymentStartDate" className="col-span-1 px-3 py-4">
          <div className="font-bold font-display text-5xl mb-2">
            {props.benefit.benefitType}
          </div>
          <p className="font-display font-bold text-lg">
            {props.benefit.benefitName}
          </p>
        </div>

        <div
          id="paymentStartDate"
          className="font-display col-span-3 sm:grid grid-cols-3"
        >
          <div id="paymentEndDate" className="pl-10 py-4">
            <p className="text-base">{t.paymentAmount}</p>
            <p className="font-bold text-4xl mt-1">
              {props.benefit.nextPaymentAmount}
            </p>
            <button onClick={viewPaymentHistory}>
              <p className="mt-1 text-sm">{t.viewPaymentHistory}</p>
            </button>
          </div>

          <div id="nextPaymentDueDate" className="pl-10 py-4 relative">
            <p className="text-base">{t.daysUntilNextPayment}</p>
            <div className="pl-10 py-6">
              <CircleProgressBar progress={11} steps={22} />
            </div>
          </div>

          {/* Progressbar Placeholder */}
          <div id="paymentEndDate" className="pl-10 py-4">
            <p className="text-base">{t.latestUpdate}</p>
            <p className="font-bold text-lg mt-1">{t.documentReviewed}</p>
            <p className="font-bold text-lg">
              {props.benefit.lastUpdates[0]?.description}
            </p>
            <button onClick={viewAllActivityAndBenefitHistory}>
              <p className="text-sm mt-1">{t.viewAllActivityButton}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
