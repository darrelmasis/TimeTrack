import { Link } from 'react-router-dom'
import { Dropdown, DropdownMenu, DropdownItem, DropdownTrigger, DropdownDivider } from '../molecules/Dropdown'
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
            <DropdownItem type="text" classes={'mb-3'}>
              <Avatar size="md" name={avatar.name} src={avatar.src} classes="me-2">
                DM
              </Avatar>
              <div>
                <div>Darel Masis</div>
                <div title="Analista de Control Interno" className="job-title text-muted small">
                  Analista de Control Interno
                </div>
              </div>
            </DropdownItem>
            <DropdownItem href={'/me'} icon={'circle-user'} label={'Perfil'} />
            <DropdownItem href={'/settings'} icon={'gears'} label={'Ajustes'} />
            <DropdownItem type="content">
              <SwitchControl variant="success" switchId="themeChanger" classes={'content-wrapper'}>
                <Icon icon="theme" classes="me-2" />
                <span>Tema Oscuro</span>
              </SwitchControl>
            </DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem href={'/logout'} icon={'logout'} label={'Cerrar Sesión'} />
          </DropdownMenu>
        </Dropdown>
      </nav>
    </header>
  )
}
