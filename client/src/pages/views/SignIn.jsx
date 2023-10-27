import { useState } from "react"  
import { useUpdatePageTitle } from "../../App"
import { Icon } from "../../components/commons/CustomIcons"
import { ImageSwitcher } from "../../components/atoms/ImageSwitcher"
import logo from "../../assets/images/logo-harinas-monisa.svg"
import logoAlt from "../../assets/images/logo-harinas-monisa-alt.svg"

const logoSources = {
  light: logo,
  dark: logoAlt
}

const Signin = () => {

  useUpdatePageTitle("Iniciar sesión")
  const [showPassword, setShowPassword] = useState(false)
  return (
    <main className="container">
      <section className="bg-container mt-5 rounded border p-3">
        <div className="text-center">
          <ImageSwitcher src={logoSources}>Logotipo de Harinas Monisa</ImageSwitcher>
          <h1 className="">Bienvenido</h1>
        </div>
        <div className="card-body">
          <form action="/" method="POST">
            <div className="mb-3">
              <label className="form-label" htmlFor="signin-email">Correo electrónico</label>
              <input className="form-control" type="email" id="signin-email" placeholder="asistauditor@monisa.com" autoComplete="off"/>
            </div>
            <div className="mb-2">
              <label className="form-label" htmlFor="signin-password">Contraseña</label>
              <div className="password-state">
                <input className="form-control" type={showPassword ? "text" : "password"} id="signin-password" placeholder="••••••••••" autoComplete="off" />
                <div className="password-state-icon" onClick={() => setShowPassword(!showPassword)} >
                  {
                    showPassword ? <Icon icon="eye-slash" classes="me-2" fix="size"/> : <Icon icon="eye" classes="me-2" fix="size"/>
                  }
                </div>
              </div>
            </div>
            <div className="mb-3 text-end">
              <a href="#" className="smaller">¿Olvidaste la contraseña?</a>
            </div>
            <button className="btn btn-primary w-100 btn-lg" type="submit">Inicia sesión</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Signin