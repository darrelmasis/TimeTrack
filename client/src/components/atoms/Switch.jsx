import { useState, useEffect} from "react";
import { useTheme } from "../commons/ThemeContext";

export const SwitchControl = ({ switchId, variant, classes, children }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isChecked, setIsChecked] = useState(isDarkMode); // Inicializa el estado con el valor de isDarkMode

  // Función para manejar el cambio de estado del switch
  const toggleSwitch = () => {
    const newIsDarkMode = !isChecked;
    setIsChecked(newIsDarkMode);
    toggleDarkMode();
    localStorage.setItem("isDarkMode", JSON.stringify(newIsDarkMode))
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Recupera el estado del modo oscuro desde localStorage al cargar la página
    const storedIsDarkMode = localStorage.getItem("isDarkMode");
    if (storedIsDarkMode !== null) {
      setIsChecked(JSON.parse(storedIsDarkMode));
      if (JSON.parse(storedIsDarkMode)) {
        document.body.classList.add("dark");
      }
    }
  }, []);
  
  return (
    <div className={`switch ${variant ? `switch-${variant}` : ""} ${classes ? classes : ""} ${isChecked ? "on" : ""}`}>
      <label htmlFor={switchId} className="switch-label">
        <div className="switch-label-text">
          {children}
          <input type="checkbox" id={switchId} checked={isChecked} onChange={toggleSwitch}/>
        </div>
        <div className="switch-slider"></div>
      </label>
    </div>
  );
};
