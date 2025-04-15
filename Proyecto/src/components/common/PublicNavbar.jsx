// src/components/common/PublicNavbar.jsx
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { companyService } from '../../services/api';

const PublicNavbar = () => {
  const [company, setCompany] = useState({
    name: 'Caninos SABS',
    logo: ''
  });

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await companyService.getInfo();
        setCompany(response.data);
      } catch (error) {
        console.error('Error fetching company info:', error);
      }
    };

    fetchCompanyInfo();
  }, []);

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              height="30"
              className="me-2"
            />
          ) : (
            <i className="fas fa-paw me-2"></i>
          )}
          {company.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              Quiénes Somos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              Nuestros Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services">
              Nuestros Servicios
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categories">
              Nuestras Categorías
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" className="btn btn-outline-primary ms-2">
              Ingresar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PublicNavbar;