import PropTypes from 'prop-types'
import FocusTrap from 'focus-trap-react'

export default function ModalElement(props) {
  if (!props.modalShow) {
    return null
  }

  const options = props.options ?? {
    clickOutsideDeactivates: false,
    preventScroll: true,
  }

  return (
    <FocusTrap focusTrapOptions={options}>
      <div
        className={
          'fixed top-0 left-0 px-4 py-6 bg-dark-solid bg-opacity-50 w-full h-full ' +
          props.bgClasses
        }
      >
        <div
          aria-modal="true"
          className={
            'bg-light-solid px-4 py-6 text-dark-solid rounded-sm ' +
            props.modalClasses
          }
        >
          {props.children}
        </div>
      </div>
    </FocusTrap>
  )
}

ModalElement.propTypes = {
  /*
   * Whether modal is currently open and Function to change modal open/close state, respectively
   * There should be a useState() hook in parent that should be passed to these two props
   */
  modalShow: PropTypes.bool.isRequired,
  setModalShow: PropTypes.func.isRequired,

  /*
   * any additional classes for the main modal panel or the background hiding everything, respectively
   */
  modalClasses: PropTypes.string,
  bgClasses: PropTypes.string,

  /*
   * any additional options for the focus trap
   * relevant documentation here: https://github.com/focus-trap/focus-trap#createoptions
   * usage: options={{option1: value1, option2: value2, ... }}
   */
  options: PropTypes.object,
}
