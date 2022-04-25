import PropTypes from 'prop-types'
import { Message } from '@dts-stn/decd-design-system'

export default function InfoMessage(props) {
  return (
    // the message types can be one of warning, info, success or danger"
    // alertIconAltText/Id translation can be done with _info etc (alertIconId_info)
    <Message
      type={props.type}
      id={props.id}
      alert_icon_alt_text={props.alertIconAltText}
      alert_icon_id={props.alertIconId}
      message_heading={props.messageHeading}
      message_body={props.messageBody}
    />
  )
}

InfoMessage.propTypes = {
  // type of message to be displayed
  type: PropTypes.string.isRequired,

  // icon alt text
  alertIconAltText: PropTypes.string.isRequired,

  // icon id
  alertIconId: PropTypes.string.isRequired,

  // id of the element
  id: PropTypes.string.isRequired,

  // text to be displayed for the message heading
  messageHeading: PropTypes.string.isRequired,

  // text to be displayed for the message body
  messageBody: PropTypes.string.isRequired,
}
