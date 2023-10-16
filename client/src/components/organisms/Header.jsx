import { Link } from "react-router-dom"
import logo from "../../assets/images/logo-harinas-monisa.svg"
import logoAlt from "../../assets/images/logo-harinas-monisa-alt.svg"
import { Dropdown } from "../molecules/Dropdown"
import { Avatar } from "../atoms/Avatar"
import { Icon } from "../commons/CustomIcons"
import { SwitchControl } from "../atoms/switch"
import { ImageSwitcher } from "../atoms/ImageSwitcher"
import { useState } from "react"
import { Button } from "../atoms/Button"

const logoSources = {
  light: logo,
  dark: logoAlt
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const headerButton = (<Button onClickCallBack={toggleDropdown} className={`caret dropdown-button d-flex justify-content-space-between header-button`}>
  <Avatar size="sm" className="me-2" >DM</Avatar>
  <span className="header-button-text">Darel</span>
  </Button>)
  
  return (
    <header className="main-header bg-container border-bottom">
      <nav className="navbar container py-3">
        <Link to="/" className="navbar-brand">
          {/* <img className="" height="32px" src={logo} alt="logo_monisa_harinas" /> */}
          <ImageSwitcher src={logoSources}>Logotio de Harinas Monisa</ImageSwitcher>
        </Link>

        <Dropdown toggleButton={headerButton} isOpen={isOpen} setIsOpen={setIsOpen} position="bottom">
            <div className="dropdown-item-text mb-3">
              <Avatar size="md" className="me-2" >DM</Avatar>
              <div>
                <div>Darel Masis</div>
                <div title="Analista de Control Interno" className="job-title text-muted small">Analista de Control Interno</div>
              </div>
            </div>
            <a href="#" className="dropdown-item mb-2"><Icon icon="circle-user" classes="me-2" />Perfil</a>
            <a href="#" className="dropdown-item mb-2"><Icon icon="gears" classes="me-2" />Ajustes</a>
            <div className="dropdown-item mb-2">
              <SwitchControl variant="success" switchId="themeChanger"><Icon icon="theme" classes="me-2" /><span>Tema Oscuro</span></SwitchControl>
            </div>
            <hr className="dropdown-divider"></hr>
            <Link to="/" className="dropdown-item text-danger">
              <Icon icon="logout" classes="me-2" /> Cerrar Sesión
            </Link>
        </Dropdown>
      </nav>
    </header>
  )
}