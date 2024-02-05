import { Link } from 'react-router-dom'
import { Dropdown, DropdownMenu, DropdownItem, DropdownItemText, DropdownTrigger, DropdownDivider } from '../molecules/Dropdown'
import { Avatar } from '../atoms/Avatar'
import { Icon } from '../commons/CustomIcons'
import { SwitchControl } from '../atoms/Switch'
import { Button } from '../atoms/Button'

export const Header = () => {
  const avatar = {
    name: 'Darel Masis',
    src: 'src/assets/images/d46112842.png',
  }
  return (
    <header className="main-header bg-container border-bottom">
      <nav className="navbar container py-3">
        <Link to="/" className="navbar-brand">
          TimeTrack
        </Link>
        <Dropdown>
          <DropdownTrigger>
            <Button classes={`caret d-flex justify-content-space-between header-button dropdown-button`}>
              <Avatar size="sm" name={avatar.name} src={avatar.src} classes="me-2">
                DM
              </Avatar>
              <span className="header-button-text">Darel</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItemText>
              <Avatar size="md" name={avatar.name} src={avatar.src} classes="me-2">
                DM
              </Avatar>
              <div>
                <div>Darel Masis</div>
                <div title="Analista de Control Interno" className="job-title text-muted small">
                  Analista de Control Interno
                </div>
              </div>
            </DropdownItemText>
            <DropdownItem>
              <Icon icon="circle-user" classes="me-2" />
              <span>Perfil</span>
            </DropdownItem>

            <DropdownItem>
              <Icon icon="gears" classes="me-2" />
              <span>Ajustes</span>
            </DropdownItem>

            <DropdownItem>
              <SwitchControl variant="success" switchId="themeChanger">
                <Icon icon="theme" classes="me-2" />
                <span>Tema Oscuro</span>
              </SwitchControl>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem>
              <Link to="/" className="text-danger">
                <Icon icon="logout" classes="me-2" /> Cerrar Sesión
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </nav>
    </header>
  )
}
