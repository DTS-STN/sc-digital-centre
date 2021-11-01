export default function FormElement(props) {
  return (
    <div className={'mb-4' + props.divClasses}>
      <label
        id={props.name + '-label'}
        className={'block font-bold ' + props.labelClasses}
      >
        {' '}
        {props.labelText}{' '}
      </label>
      {props.children}
    </div>
  )
}
