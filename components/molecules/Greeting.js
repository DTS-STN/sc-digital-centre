import { Message, Heading } from '@dts-stn/service-canada-design-system'

export default function Greeting(props) {
  return (
    <div>
      <div className="grid grWid-cols-1 divide-y divide-red-600 font-display">
        <Heading
          id="benefits-services-header"
          title={props.myBenefitsAndServices}
        />
        <p className="py-4 text-3xl font-bold">{`${props.greeting} ${props.name}`}</p>
      </div>
      <Message
        type="success"
        id="success"
        alert_icon_alt_text={props.alert_icon_alt_text}
        alert_icon_id={props.alert_icon_id}
        message_heading={props.message_heading}
        message_body={props.message_body}
      />
    </div>
  )
}
