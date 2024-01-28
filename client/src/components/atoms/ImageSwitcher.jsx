import { useTheme } from '../commons/useTheme'

export const ImageSwitcher = ({ src, children }) => {
  const { isDarkMode } = useTheme()
  return <img height="40px" src={isDarkMode && src.dark ? src.dark : src.light} alt={children} />
}
