// Styled horizontal line component
// Must receive a width prop & optional color or visibility modifier that follows tailwind styling

export default function HorizontalRule(props) {
  if (props.colour && props.visibility) {
    return (
      <div
        className={`${props.visibility} ${props.width} bg-${props.colour} h-px`}
      ></div>
    )
  } else if (props.colour) {
    return <div className={`${props.width} bg-${props.colour} h-px`}></div>
  } else if (props.visibility) {
    return (
      <div
        className={`${props.visibility} ${props.width} bg-gray-light h-px`}
      ></div>
    )
  } else {
    return (
      <div className={`${props.width} bg-gray-light h-px mx-4 sm:mx-0`}></div>
    )
  }
}
