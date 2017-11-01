import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {MonthView} from '../../ui'

class CalendarBody extends Component {

  render() {
    return (
      <div className='calendar__body'>
        <MonthView/>
      </div>
    )
  }
}

export default CalendarBody
