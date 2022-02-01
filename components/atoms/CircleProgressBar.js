import ProgressBar from 'react-customizable-progressbar'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CircleProgressBar extends Component {
  render() {
    return (
      <div className="absolute inset-x-6 top-9 h-16">
        <ProgressBar
          progress={this.props.progress}
          steps={this.props.steps}
          radius={28}
          strokeColor={'#259F46'}
          strokeWidth={4}
          trackStrokeWidth={4}
        >
          <div className="relative">
            <p className="px-9 -py-20 absolute -top-24 h-24 grid content-center text-green-600 font-bold font-display text-lg">
              {this.props.progress}
            </p>
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
