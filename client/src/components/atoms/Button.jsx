export const Button = ({ size, variant, isSquare, children, onClickCallBack }) => {
  
  const buttonClasses = `btn ${variant ? `btn-${variant}` : ''} ${size ? `btn-${size}` : ''} ${isSquare ? 'btn-square' : ''}`;

  return (
    <button type="button" className={buttonClasses.trim()} onClick={onClickCallBack}>{ children }</button>
  )
}
