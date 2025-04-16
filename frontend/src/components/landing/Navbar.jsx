// src/components/landing/Navbar.jsx
import 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo.png'; // Asegúrate de tener un logo en esta ruta

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top rounded-circle"
          alt="Caninos SABS"
        />{' '}
        Caninos SABS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#servicios">Servicios</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
          <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
