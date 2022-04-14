import en from '../../locales/en'
import fr from '../../locales/fr'

export default function Greeting(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <div>
      <div className="grid grid-cols-1 divide-y divide-red-600 font-display">
        <div className="py-4 text-4xl font-bold">{`${t.greeting} ${props.name}`}</div>
        <div className="pt-4 text-xl">{t.welcome}</div>
      </div>
      <div className="text-3xl font-bold mt-10">{t.myBenefitsAndServices}</div>
    </div>
  )
}
