import { Message } from '@dts-stn/decd-design-system'

export default function Greeting(props) {
  return (
    <div>
      <div className="grid grid-cols-1 divide-y divide-red-600 font-display">
        <div className="py-4 text-4xl font-bold">{`${props.greeting} ${props.name}`}</div>
        <div className="py-4 text-xl">{props.welcome}</div>
      </div>
      <Message
        type="success"
        id="success"
        alert_icon_alt_text={props.alert_icon_alt_text}
        alert_icon_id={props.alert_icon_id}
        message_heading={props.message_heading}
        message_body={props.message_body}
      />
      <h1 className="text-3xl font-bold mt-10">
        {props.myBenefitsAndServices}
      </h1>
    </div>
  )
}
