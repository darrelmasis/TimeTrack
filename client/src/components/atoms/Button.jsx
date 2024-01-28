import classNames from 'classnames'

export const Button = ({ size, variant, isSquare, children, onClick, classes }) => {
  const buttonClasses = classNames('btn', size && `btn-${size}`, variant && `btn-${variant}`, isSquare && 'btn-square', classes)

  const handleOnclick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button type="button" className={buttonClasses} onClick={handleOnclick}>
      {children}
    </button>
  )
}
