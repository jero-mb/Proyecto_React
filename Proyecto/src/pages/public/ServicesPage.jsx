// src/pages/public/ServicesPage.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { serviceService } from '../../services/api';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await serviceService.getAll();
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="bg-light py-5 mb-5">
        <Container>
          <h1 className="fw-bold text-center">Nuestros Servicios</h1>
          <p className="lead text-center mb-0">
            Ofrecemos servicios profesionales para el cuidado y bienestar de tus mascotas
          </p>
        </Container>
      </div>

      {/* Services Section */}
      <Container>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-5">
            <h3>No hay servicios disponibles</h3>
            <p>Vuelve pronto para conocer nuestros servicios</p>
          </div>
        ) : (
          <Row>
            {services.map(service => (
              <Col md={6} lg={4} key={service.id} className="mb-4">
                <Card className="h-100 shadow-sm hover-card">
                  <Card.Img 
                    variant="top" 
                    src={service.image || "/api/placeholder/400/300"} 
                    alt={service.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{service.name}</Card.Title>
                    <Card.Text className="text-muted">
                      {service.description}
                    </Card.Text>
                    {service.price && (
                      <Card.Text className="fw-bold text-primary">
                        Desde ${service.price.toFixed(2)}
                      </Card.Text>
                    )}
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <Link to={`/services/${service.id}`}>
                      <Button variant="outline-primary" className="w-100">Ver Detalles</Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Services Benefits Section */}
      <section className="bg-light py-5 my-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Beneficios de Nuestros Servicios</h2>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <div className="text-center">
                <div className="display-5 text-primary mb-3">
                  <i className="fas fa-medal"></i>
                </div>
                <h4 className="fw-bold">Profesionales Calificados</h4>
                <p className="text-muted">
                  Contamos con un equipo de profesionales altamente calificados y con amplia experiencia en el cuidado de mascotas.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <div className="text-center">
                <div className="display-5 text-primary mb-3">
                  <i className="fas fa-heart"></i>
                </div>
                <h4 className="fw-bold">Atención Personalizada</h4>
                <p className="text-muted">
                  Ofrecemos atención personalizada para cada mascota, adaptándonos a sus necesidades específicas y requisitos individuales.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <div className="display-5 text-primary mb-3">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4 className="fw-bold">Garantía de Calidad</h4>
                <p className="text-muted">
                  Garantizamos la calidad de todos nuestros servicios, utilizando productos y técnicas de primera calidad para el bienestar de tu mascota.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <Container className="py-5 text-center">
        <h3 className="fw-bold mb-4">¿Tienes preguntas sobre nuestros servicios?</h3>
        <p className="mb-4">
          Contáctanos para obtener más información o para programar una cita para tu mascota.
        </p>
        <Link to="/contact">
          <Button variant="primary" size="lg">Contáctanos Ahora</Button>
        </Link>
      </Container>
    </div>
  );
};

export default ServicesPage;
