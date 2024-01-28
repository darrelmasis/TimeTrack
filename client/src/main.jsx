import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.scss' // Importa los estilos SCSS consolidados
import { ThemeProvider } from './components/commons/ThemeContext.jsx'

const getInitialDarkModeState = () => {
  const storedIsDarkMode = localStorage.getItem('isDarkMode')
  return storedIsDarkMode ? JSON.parse(storedIsDarkMode) : false
}

const initialDarkModeState = getInitialDarkModeState()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider initialThemeState={initialDarkModeState}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
