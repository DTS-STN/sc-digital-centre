import InfoMessage from '../atoms/InfoMessage'
import en from '../../locales/en'
import fr from '../../locales/fr'

export default function Greeting(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <div>
      <div className="grid grid-cols-1 divide-y divide-red-600 font-display">
        <div className="py-4 text-4xl font-bold">{`${t.greeting} ${props.name}`}</div>
        <div className="py-4 text-xl">{t.welcome}</div>
      </div>
      <InfoMessage
        type="success"
        id="success"
        alertIconAltText={t.alertIconAltText_success}
        alertIconId={t.alertIconId_success}
        messageHeading={t.messageHeading}
        messageBody={t.messageBody}
      />

      <div className="text-3xl font-bold mt-10">{t.myBenefitsAndServices}</div>
    </div>
  )
}
