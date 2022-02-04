// Styled horizontal line component
// Must receive a width prop & optional color or visibility modifier that follows tailwind styling

export default function HorizontalRule(props) {
  if (props.colour && props.visibility) {
    return (
      <div
        className={`${props.visibility} ${props.width} border-${props.colour} flex-grow border-t`}
      ></div>
    )
  } else if (props.colour) {
    return (
      <div
        className={`${props.width} border-${props.colour} flex-grow border-t`}
      ></div>
    )
  } else if (props.visibility) {
    return (
      <div
        className={`${props.visibility} ${props.width} flex-grow border-t border-gray-light`}
      ></div>
    )
  } else {
    return (
      <div
        className={`${props.width} flex-grow border-t border-gray-light mx-4 sm:mx-0`}
      ></div>
    )
  }
}
