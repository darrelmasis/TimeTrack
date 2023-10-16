import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();


export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children, initialThemeState }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialThemeState)

  useEffect(() => {

    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    // Actualiza el valor en localStorage cuando cambia el estado del tema
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
