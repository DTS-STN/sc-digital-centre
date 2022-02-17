import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from './HorizontalRule'

export default function BenefitCardHeaderPending(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <div className="layout-container">
      <div className="flex mr-12 justify-end">
        <h2
          className={
            'font-bold font-display text-lg px-5 py-1 ml-8 mb-5 rounded-b-md bg-orange-pending'
          }
        >
          {props.benefit.applicationStatus}
        </h2>
      </div>
      <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
        <div id="benefitName" className="col-span-1 py-4 md:px-0 lg:px-3">
          <div className="font-bold font-display text-4xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 w-44 sm:w-32 lg:w-44">
            {props.benefit.benefitName}
          </div>
        </div>
        <HorizontalRule width="w-1/3" visibility="sm:hidden" />
        <div
          id="paymentStartDate"
          className="font-display col-span-3 sm:grid grid-cols-3"
        >
          <div id="paymentEndDate" className="py-4 sm:pl-10">
            <p className="text-base">{t.applicationSubmitted}</p>
            <p className="font-bold text-lg">{props.benefit.applicationDate}</p>
          </div>

          <div id="paymentEndDate" className="py-4 sm:pl-10">
            <p className="text-base w-44">{t.estimatedDateOfDecision}</p>
            <p className="font-bold text-lg">
              {props.benefit.estimatedDateOfDecision}
            </p>
          </div>

          {/* Progressbar Placeholder */}
          <div id="paymentEndDate" className="py-4 sm:pl-10">
            <p className="font-display font-bold text-lg">{'Progressbar'}</p>
            <p className="font-display text-base">4 out of 6 review</p>
            <p className="font-display text-base">steps complete</p>
          </div>
        </div>
      </div>
    </div>
  )
}
