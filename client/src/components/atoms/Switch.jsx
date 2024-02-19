import { useState, useEffect } from 'react'
import { useTheme } from '../commons/useTheme'
import classNames from 'classnames'

export const SwitchControl = ({ switchId, classes, children }) => {
  const { isDarkMode, toggleDarkMode } = useTheme()
  const [isChecked, setIsChecked] = useState(isDarkMode) // Inicializa el estado con el valor de isDarkMode

  // Función para manejar el cambio de estado del switch
  const toggleSwitch = () => {
    const newIsDarkMode = !isChecked
    setIsChecked(newIsDarkMode)
    toggleDarkMode()
    localStorage.setItem('isDarkMode', JSON.stringify(newIsDarkMode))
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    // Recupera el estado del modo oscuro desde localStorage al cargar la página
    const storedIsDarkMode = localStorage.getItem('isDarkMode')
    if (storedIsDarkMode !== null) {
      setIsChecked(JSON.parse(storedIsDarkMode))
      if (JSON.parse(storedIsDarkMode)) {
        document.body.classList.add('dark')
      }
    }
  }, [])

  const componentClasses = classNames('switch', classes && classes, isChecked && 'on')

  return (
    <label htmlFor={switchId} className={componentClasses}>
      <input type="checkbox" id={switchId} checked={isChecked} onChange={toggleSwitch} />
      <div className="switch-text">{children}</div>
      <div className="switch-slider" tabIndex="0"></div>
    </label>
  )
}
