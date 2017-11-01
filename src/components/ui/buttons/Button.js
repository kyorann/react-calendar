import React, {Component} from 'react'
import PropTypes from 'prop-types'

const Button = props => {

  const _defaultOnClick = () => console.log('You clicked ', this)

  const {label, className, onClick, icon, iconClass, name} = props
  const btnClass = className || 'button--default'

  return (
    <div className={`button ${btnClass}`} data-name={name || ''} onClick={onClick || _defaultOnClick}>
      {label || false}
      {icon ? <i data-name={name || ''} className={`fa fa-${icon} ${iconClass ? iconClass : ''}`}></i> : false}
    </div>
  )
}

export default Button
