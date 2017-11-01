import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button} from '../../ui'

class CalendarControls extends Component {

  render() {
    return (
      <div className='calendar__controls'>
        <div className='calendar__header'>Календарь</div>
        <div className='controls'><Button label='Сегодня'/></div>
      </div>
    )
  }
}

export default connect(state => {
  return {}
}, {})(CalendarControls)
