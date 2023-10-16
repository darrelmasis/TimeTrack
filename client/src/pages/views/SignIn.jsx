import { useState } from "react"  
import { useUpdatePageTitle } from "../../App"
import { Icon } from "../../components/commons/CustomIcons"
import logo from "../../assets/images/logo-harinas-monisa.svg"

const Signin = () => {

  useUpdatePageTitle("Iniciar sesión")
  const [showPassword, setShowPassword] = useState(false)
  return (
    <main className="container">
      <section className="card bg-container border-0 shadow-lg mt-5 signin-screen rounded-4">
        <div className="card-header bg-transparent border-bottom-0 text-center">
          <img className="mb-3" width="100px" src={logo} alt="logo_monisa_harinas" />
          <h1 className="h4 text-dark">Bienvenido</h1>
        </div>
        <div className="card-body">
          <form action="" id="signin-form">
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
                    showPassword ? <Icon icon="eye-slash" classes="me-2" fixedWidth/> : <Icon icon="eye" classes="me-2" fixedWidth/>
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