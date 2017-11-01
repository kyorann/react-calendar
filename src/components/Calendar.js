import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {CalendarControls} from './ui'


class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='calendar'>
        <CalendarControls/>
        <div className='side-block'>

        </div>
        <div className='main-block'>

        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {}
}, {})(Calendar)
