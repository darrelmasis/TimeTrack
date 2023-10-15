export const Button = ({ size, variant, isSquare, children, onClickCallBack, className}) => {
  
  const buttonClasses = `btn ${variant ? `btn-${variant}` : ''} ${size ? `btn-${size}` : ''} ${isSquare ? 'btn-square' : ''}`.trim() + ` ${className ? className : ''}`;

  return (
    <button type="button" className={buttonClasses.trim()} onClick={onClickCallBack}>{ children }</button>
  )
}
