import { Message } from '@dts-stn/decd-design-system'
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
      <Message
        type="success"
        id="success"
        alert_icon_alt_text={t.alertIconAltText_success}
        alert_icon_id={t.alertIconId_success}
        message_heading={t.messageHeading}
        message_body={t.messageBody}
      />
      <div className="text-3xl font-bold mt-10">{t.myBenefitsAndServices}</div>
    </div>
  )
}
