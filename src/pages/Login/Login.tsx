import { useState } from 'react';
import './Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import usuarios from '../../data/usuarios.json';

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userNotLoggedIn, setUserNotLoggedIn] = useState<boolean | null>(null);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email()
        .required('El nombre de usuario es obligatorio'),
      password: Yup.string().required('La contraseña es obligatoria'),
    }),
    onSubmit: (values) => {
      const usuario = usuarios.users.find(
        (user: any) =>
          user.username === values.username && user.password === values.password
      );
      if (usuario) {
        navigate('/home');
      } else {
        setUserNotLoggedIn(true);
      }
    },
  });

  return (
    <form className="login-container" onSubmit={formik.handleSubmit}>
      {userNotLoggedIn && (
        <div className="credentials-error">
          <p>Usuario o Contraseña incorrectos</p>
        </div>
      )}
      <div className="login-input">
        <input
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          placeholder="Usuario"
        />
        {formik.errors.username && (
          <div className="form-error">{formik.errors.username}</div>
        )}
      </div>
      <div className="login-input">
        <input
          type={showPassword === false ? 'password' : 'text'}
          placeholder="Contraseña"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {showPassword === false ? (
          <FaEye onClick={() => setShowPassword(!showPassword)} />
        ) : (
          <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
        )}
        {formik.errors.password && (
          <div className="form-error">{formik.errors.password}</div>
        )}
      </div>
      <div className="button-container">
        <button type="submit" className="submit-button">
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
}

export default Login;
