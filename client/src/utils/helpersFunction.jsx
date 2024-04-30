import { useEffect, useState } from 'react'

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

const isOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine)

  useEffect(() => {
    const handleConnectionChange = () => {
      setOnlineStatus(navigator.onLine)
    }

    window.addEventListener('online', handleConnectionChange)
    window.addEventListener('offline', handleConnectionChange)

    return () => {
      window.removeEventListener('online', handleConnectionChange)
      window.removeEventListener('offline', handleConnectionChange)
    }
  }, [])

  console.log(onlineStatus)
  // return onlineStatus
}

export { usePageTitle, isOnline }
