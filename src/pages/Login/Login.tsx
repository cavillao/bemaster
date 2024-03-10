import { useState } from 'react'
import './Login.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className="login-container">
      <div className="login-input">
        <input type="text" placeholder="Usuario" />
      </div>
      <div className="login-input">
        <input
          type={showPassword === false ? 'password' : 'text'}
          placeholder="Contraseña"
        />
        {showPassword === false ? (
          <FaEye onClick={() => setShowPassword(!showPassword)} />
        ) : (
          <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
        )}
      </div>
      <div className="button-container">
        <button className="submit-button">Iniciar Sesión</button>
      </div>
    </div>
  )
}

export default Login
