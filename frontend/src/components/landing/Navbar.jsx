import 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/logo.png';

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
          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/categories">
            <Nav.Link>Categorías</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link>Productos</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>Acerca de</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Iniciar Sesión</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
