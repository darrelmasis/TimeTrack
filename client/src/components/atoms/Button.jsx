import classNames from 'classnames'

export const Button = ({ size, variant, isSquare, children, onClick, classes, disabled }) => {
  const buttonClasses = classNames('btn', size && `btn-${size}`, variant && `btn-${variant}`, isSquare && 'btn-square', classes)

  const isDisabled = disabled ? true : false

  const handleOnclick = () => {
    if (onClick && !isDisabled) {
      onClick()
    }
  }

  return (
    <button type="button" disabled={isDisabled} className={buttonClasses} onClick={handleOnclick}>
      {children}
    </button>
  )
}

