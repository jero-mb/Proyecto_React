// src/components/common/Footer.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Caninos SABS</h5>
            <p className="text-muted">
              Somos tu mejor opción para el cuidado y productos para tus mascotas.
              Nuestro compromiso es brindar servicios de calidad para el bienestar
              de tus compañeros caninos.
            </p>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-muted">Inicio</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-muted">Quiénes Somos</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-decoration-none text-muted">Productos</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-decoration-none text-muted">Servicios</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Contacto</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i> Calle Principal #123
              </li>
              <li className="mb-2">
                <i className="fas fa-phone me-2"></i> (123) 456-7890
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope me-2"></i> info@caninossabs.com
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Síguenos</h5>
            <div className="social-links">
              <a href="#" className="text-light me-2">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="mt-4" />
        <div className="text-center text-muted">
          <small>&copy; {currentYear} Caninos SABS. Todos los derechos reservados.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;