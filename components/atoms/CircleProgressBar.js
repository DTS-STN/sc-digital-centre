import ProgressBar from 'react-customizable-progressbar'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CircleProgressBar extends Component {
  render() {
    return (
      <div>
        <ProgressBar
          progress={this.props.progress}
          steps={this.props.steps}
          radius={60}
          strokeColor={'#259F46'}
          strokeWidth={8}
          trackStrokeWidth={8}
        >
          <div className="circle-progress-indicator">
            <div>{this.props.progress}</div>
          </div>
        </ProgressBar>
      </div>
    )
  }
}
CircleProgressBar.propTypes = {
  progress: PropTypes.number,
  steps: PropTypes.number,
}
export default CircleProgressBar
