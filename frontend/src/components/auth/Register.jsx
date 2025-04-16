import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../landing/Navbar'; // Asegúrate de importar la NavigationBar
import './Register.css'; // Asegúrate de importar el CSS

const Register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el registro
  };

  return (
    <>
      <NavigationBar /> {/* Incluye la NavigationBar aquí */}
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 custom-bg">
        <div className="wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="title">Registrarse</h1>
            <div className="inp">
              <input
                type="text"
                className="input"
                placeholder="Nombre Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="inp">
              <input
                type="email"
                className="input"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="fa-solid fa-envelope"></i>
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
            <button type="submit" className="submit">
              Registrarse
            </button>
            <p className="footer">
              ¿Ya tienes una cuenta?{' '}
              <a href="/login" className="link">
                Inicia sesión
              </a>
            </p>
          </form>
          <div className="banner">
            <h1 className="wel_text">¡Únete a nosotros!</h1>
            <p className="para"></p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;