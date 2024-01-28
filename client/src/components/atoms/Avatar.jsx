/**
 * Crea un avatar de 3 tamaños predefinidos en dos modos diferentes imagen y texto
 * si no se agrega un fuente de la imagen se mostrata lo que contenga el comopoente como hijo
 * el texto mostrado se tomará del nombre del usuario ej: John Doe = JD
 */
export const Avatar = ({ src, alt, size, className, children }) => {
  return <div className={`avatar avatar-${size} ${className}`}>{src ? <img src={src} alt={alt} /> : children}</div>
}
