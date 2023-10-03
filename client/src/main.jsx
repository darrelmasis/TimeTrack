import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap' // Importa los archivos JS de Bootstrap
import './styles/styles.scss' // Importa los estilos SCSS consolidados

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)