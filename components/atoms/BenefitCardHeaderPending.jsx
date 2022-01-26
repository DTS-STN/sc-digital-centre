import en from '../../locales/en'
import fr from '../../locales/fr'

export default function PendingHeader(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <div className="layout-container">
      <div className="flex mr-12 justify-end">
        <h2
          className={
            'font-bold font-display text-lg ml-2 px-5 py-1 ml-8 mb-5 rounded-b-md bg-orange-400'
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
            <p className="text-base">{t.applicationSubmitted}</p>
            <p className="font-bold text-lg">{props.benefit.applicationDate}</p>
          </div>

          <div id="paymentEndDate" className="pl-10 py-4">
            <p className="text-base w-44">
              {t.estimatedDateOfReviewCompletion}
            </p>
            <p className="font-bold text-lg">
              {props.benefit.estimatedReviewCompletionDate}
            </p>
          </div>

          {/* Progressbar Placeholder */}
          <div id="paymentEndDate" className="pl-10 py-4">
            <p className="font-display font-bold text-lg">{'Progressbar'}</p>
            <p className="font-display text-base">4 out of 6 review</p>
            <p className="font-display text-base">steps complete</p>
          </div>
        </div>
      </div>
    </div>
  )
}
