import { useTheme } from "../commons/ThemeContext"

export const ImageSwitcher = ({ src, children }) => {
  const {isDarkMode} = useTheme()
  return (
    <img height="40px" src={isDarkMode && src.dark ? src.dark : src.light} alt={children} />
  )
}
