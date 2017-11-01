import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {WEEK_DAYS} from '../../../constants'

class MonthView extends Component {

  _renderTableHeader = arr => {
    return arr.map(item => {
      return <div key={item} className='th'>{item}</div>
    })
  }
  _renderTableBody = () => {
    const arr = []
    for (let x = 0; x <= 34; x++) {
      arr.push(<div className='td month__day'>{x + 1}</div>)
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
