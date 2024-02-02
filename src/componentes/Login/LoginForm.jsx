/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import './LoginForm.css';
import {FaUser, FaLock} from 'react-icons/fa'

const LoginForm = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setErrorMessage(''); // Limpiar mensaje de error al cambiar el nombre de usuario
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage(''); // Limpiar mensaje de error al cambiar la contraseña
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica para verificar si se ingresó un nombre de usuario y una contraseña
    if (!username || !password) {
      setErrorMessage('Por favor, ingrese tanto el nombre de usuario como la contraseña.');
      return;
    }

    // Simulando la autenticación (puedes reemplazar esto con una llamada a tu backend)
    if (username === 'usuario' && password === 'contraseña') {
      alert('¡Inicio de sesión exitoso!');
      onLogin();
      // Aquí podrías redirigir a la siguiente página, almacenar token, etc.
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');
    }
  };

  //Inicio
  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>LogIn</h1>
        <div className="input-container">
          <div className='input-box'>
            <input
              type="text"
              placeholder='Usuario'
              className='user'
              value={username}
              onChange={handleUsernameChange}
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              type="password"
              placeholder='Contraseña'
              className='password'
              value={password}
              onChange={handlePasswordChange}
            />
            <FaLock className='icon' />
          </div>
        </div><br></br>
        <div className='remember-forgot'>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Recordarme
          </label>
          <a href=" ">¿Olvidaste tu contraseña?</a>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type='submit'>Ingresar</button>
      </form>
    </div>
  );
};

export default LoginForm;