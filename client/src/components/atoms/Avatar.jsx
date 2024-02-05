/**
 * Crea un avatar de 3 tamaños predefinidos en dos modos diferentes imagen y texto
 * si no se agrega un fuente de la imagen se mostrata lo que contenga el comopoente como hijo
 * el texto mostrado se tomará del nombre del usuario ej: John Doe = JD
 */

import { useState } from 'react'
import classNames from 'classnames'
import initials from 'initials'

export const Avatar = ({ size, name, src, classes }) => {
  const componentClasses = classNames('avatar', size && `avatar-${size}`, classes && classes)
  const abbr = initials(name)
  const [imageLoaded, setImageLoaded] = useState(true)

  const handleImageLoad = () => {
    // Se ejecuta cuando la imagen se carga correctamente
    setImageLoaded(true)
  }

  const handleImageError = () => {
    // Se ejecuta si hay un error al cargar la imagen
    setImageLoaded(false)
  }

  let inner = ''

  if (src) {
    // Si hay una URL de imagen (src), muestra la imagen
    inner = <img src={src} alt={name} onLoad={handleImageLoad} onError={handleImageError} />
  }

  // Si no hay una URL de imagen o la imagen no se ha cargado aún, muestra las iniciales
  if (!src || !imageLoaded) {
    inner = abbr
  }

  return (
    <div className={componentClasses} style={{ backgroundColor: '#a6d6fa' }}>
      {inner}
    </div>
  )
}
