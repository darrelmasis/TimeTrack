import { useEffect } from 'react'

const appName = 'TimeTrack'

const usePageTitle = pageTitle => {
  useEffect(() => {
    document.title = `${appName} | ${pageTitle}`

    // Función de limpieza
    return () => {
      document.title = appName // Restablecer el título al desmontar el componente o al cambiar el título
    }
  }, [pageTitle])
}

export { usePageTitle }
