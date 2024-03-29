import classNames from "classnames";

const Form = ({ onSubmit, className }) => {
  const componentClasses = classNames('form', className && className)
  return (
    <Form onSubmit={onSubmit} className={componentClasses}>

    </Form>
  )
}

const FormInput = ({ type = 'text', className, attribs, label,formText }) => {  
  const componentClasses = classNames('form-control', className && className)
  const wrapperClasses = classNames('mb-3 d-flex flex-direction-column')
  const labelClasses = classNames('mb-2')

  return (
    <div className={ wrapperClasses }>
      <label htmlFor="" className={labelClasses}>{label}</label>
      <input type={type} className={componentClasses} {...attribs} placeholder="Describe la actividad desarrollada"/>
      <span className={ 'small mt-1 text-danger' }>Soy un texto de apoyo para mostrar mensajes de error</span>
    </div>
  )
}

export { Form, FormInput }