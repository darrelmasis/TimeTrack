import React from 'react'
import classNames from 'classnames'
import { Icon } from '../commons/CustomIcons'

export const Button = ({ size = 'medium', variant, onClick, disabled, icon, label, children, classes }) => {
  const sizeToIconClass = {
    small: 'me-1',
    medium: 'me-2',
    large: 'me-2',
  }

  const childrenExist = React.Children.count(children) > 0
  const labelExist = label ? true : false
  const iconClasses = classNames((childrenExist || labelExist) && sizeToIconClass[size])

  const buttonType = !labelExist && !childrenExist ? 'btn-square' : false
  const buttonClasses = classNames('btn', buttonType && buttonType, size && `btn-${size}`, variant && `btn-${variant}`, classes)
  const isDisabled = disabled ? true : false

  const iconComponent = icon ? <Icon icon={icon} classes={iconClasses} /> : null
  const handleOnclick = () => {
    if (onClick && !isDisabled) {
      onClick()
    }
  }
  
  const buttonContent = (
    <>
      {iconComponent}
      {childrenExist ? children : label}
    </>
  )

  return (
    <button type="button" disabled={isDisabled} className={buttonClasses} onClick={handleOnclick}>
      {buttonContent}
    </button>
  )
}
