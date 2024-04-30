import classNames from 'classnames'
import { createContext, useContext, useRef } from 'react'

const FormContext = createContext()
const useFormContext = () => useContext(FormContext)

const Form = ({ children, onSubmit, className, id }) => {
  const componentClasses = classNames('form', className)
  const formRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit()
      formRef.current.reset()
    }
  }

  return (
    <form ref={formRef} id={id} onSubmit={handleSubmit} className={componentClasses}>
      {children}
    </form>
  )
}

const FormField = ({ children, className }) => {
  const componentClasses = classNames('form-field', className)

  return <div className={componentClasses}>{children}</div>
}

const FormItem = ({ children, className, name, id }) => {
  const componentClasses = classNames('form-item', className)

  const contextValue = { name, id }

  return (
    <FormContext.Provider value={contextValue}>
      <div className={componentClasses}>{children}</div>
    </FormContext.Provider>
  )
}

const FormLabel = ({ children, className }) => {
  const componentClasses = classNames('form-label', className)
  const { id } = useFormContext()
  return (
    <label htmlFor={id} className={componentClasses}>
      {children}
    </label>
  )
}

const FormControl = ({ children, className, ...rest }) => {
  const componentClasses = classNames('form-control', className)
  const { name, id } = useFormContext()

  return (
    <input className={componentClasses} name={name} id={id} {...rest}>
      {children}
    </input>
  )
}

const FormMessage = ({ children, className }) => {
  const componentClasses = classNames('form-message', className)

  return <span className={componentClasses}>{children}</span>
}

export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage }
