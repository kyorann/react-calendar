import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {WEEK_DAYS} from '../../../constants'
import {getDaysOffset, getDaysNumber} from '../../../utils'

class MonthView extends Component {

  componentDidMount() {
    console.log('OFFSET IS ================>', getDaysOffset(), ' DAYS')
    console.log('THIS MONTH CONTAINS==================>', getDaysNumber(), ' DAYS')
  }

  _renderTableHeader = arr => {
    return arr.map(item => {
      return <div key={item} className='th'>{item}</div>
    })
  }
  _renderTableBody = () => {
    const arr = []
    const now = new Date()
    const offset = getDaysOffset()
    const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    console.log('PREVIOUS MONTH CONTAINS===========>', prevMonthDays, ' DAYS')
    for (let x = 1; x <=35; x++) {
        if(x<offset){

        }
    }
    return arr
  }

  render() {
    const header = this._renderTableHeader(WEEK_DAYS)
    const body = this._renderTableBody()
    return (
      <div className='month'>
        <div className='table'>
          <div className='thead'>
            <div className='tr'>
              {header}
            </div>
          </div>
          <div className='tbody'>
            {body}
          </div>
        </div>
      </div>
    )
  }
}

export default MonthView
