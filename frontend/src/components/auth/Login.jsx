import { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import NavigationBar from '../landing/Navbar'; // Asegúrate de importar la NavigationBar
import './Login.css'; // Asegúrate de importar el CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-url.com/login', { email, password });
      localStorage.setItem('token', response.data.token);
      // Redirigir o actualizar la interfaz según sea necesario
    } catch (err) {
      setError('Correo electrónico o contraseña incorrectos');
      console.log(err);
    }
  };

  return (
    <>
      <NavigationBar /> {/* Incluye la NavigationBar aquí */}
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 custom-bg">
        <div className="wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="title">Inicio</h1>
            <div className="inp">
              <input
                type="text"
                className="input"
                placeholder="Usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="inp">
              <input
                type="password"
                className="input"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit">
              Iniciar sesión
            </button>
            <p className="footer">
              ¿No tienes cuenta?{' '}
              <a href="/register" className="link">
                Por favor, Regístrate
              </a>
            </p>
          </form>
          <div className="banner">
            <h1 className="wel_text">Bienvenid@</h1>
            <p className="para"></p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;