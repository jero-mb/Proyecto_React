// src/pages/public/HomePage.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productService, serviceService, companyService } from '../../services/api';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch featured products
        const productsRes = await productService.getAll();
        setProducts(productsRes.data.slice(0, 3)); // Show only first 3 products

        // Fetch services
        const servicesRes = await serviceService.getAll();
        setServices(servicesRes.data.slice(0, 3)); // Show only first 3 services

        // Fetch company info
        const companyRes = await companyService.getInfo();
        setCompany(companyRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Carousel items
  const carouselItems = [
    {
      image: '/api/placeholder/1200/400',
      title: 'Bienvenidos a Caninos SABS',
      description: 'Tu mejor aliado en el cuidado de tus mascotas',
      buttonText: 'Conócenos',
      link: '/about'
    },
    {
      image: '/api/placeholder/1200/400',
      title: 'Productos de Calidad',
      description: 'Ofrecemos los mejores productos para el cuidado de tus mascotas',
      buttonText: 'Ver Productos',
      link: '/products'
    },
    {
      image: '/api/placeholder/1200/400',
      title: 'Servicios Profesionales',
      description: 'Atención personalizada para el bienestar de tus compañeros caninos',
      buttonText: 'Ver Servicios',
      link: '/services'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Carousel Section */}
      <Carousel className="mb-5">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption className="text-center bg-dark bg-opacity-50 rounded p-3">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Link to={item.link}>
                <Button variant="primary">{item.buttonText}</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Welcome Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={6}>
            <h2 className="fw-bold mb-4">Bienvenidos a {company.name || 'Caninos SABS'}</h2>
            <p className="lead mb-4">
              {company.description || 
                'Somos una empresa dedicada al cuidado y bienestar de tus mascotas. Ofrecemos productos de alta calidad y servicios profesionales para asegurar que tus compañeros caninos reciban lo mejor.'}
            </p>
            <div className="d-flex gap-3">
              <Link to="/about">
                <Button variant="primary">Conoce Nuestra Historia</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline-primary">Contáctanos</Button>
              </Link>
            </div>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <img
              src="/api/placeholder/600/400"
              alt="Caninos SABS"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>

      {/* Featured Products Section */}
      <section className="bg-light py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Productos Destacados</h2>
            <p className="text-muted">Descubre nuestra selección de productos para tus mascotas</p>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : (
            <Row>
              {products.map(product => (
                <Col md={4} key={product.id} className="mb-4">
                  <Card className="h-100 shadow-sm hover-card">
                    <Card.Img 
                      variant="top" 
                      src={product.image || "/api/placeholder/300/200"} 
                      alt={product.name}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text className="text-muted">
                        {product.description?.substring(0, 100)}
                        {product.description?.length > 100 ? '...' : ''}
                      </Card.Text>
                      <Card.Text className="fw-bold text-primary">
                        ${product.price?.toFixed(2) || '0.00'}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-white border-0">
                      <Link to={`/products/${product.id}`}>
                        <Button variant="outline-primary" className="w-100">Ver Detalles</Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          <div className="text-center mt-4">
            <Link to="/products">
              <Button variant="primary">Ver Todos los Productos</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Nuestros Servicios</h2>
            <p className="text-muted">Ofrecemos servicios profesionales para el cuidado de tus mascotas</p>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : (
            <Row>
              {services.map(service => (
                <Col md={4} key={service.id} className="mb-4">
                  <Card className="h-100 shadow-sm hover-card">
                    <Card.Img 
                      variant="top" 
                      src={service.image || "/api/placeholder/300/200"} 
                      alt={service.name}
                    />
                    <Card.Body>
                      <Card.Title>{service.name}</Card.Title>
                      <Card.Text className="text-muted">
                        {service.description?.substring(0, 100)}
                        {service.description?.length > 100 ? '...' : ''}
                      </Card.Text>
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

          <div className="text-center mt-4">
            <Link to="/services">
              <Button variant="primary">Ver Todos los Servicios</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Call To Action Section */}
      <section className="bg-primary text-white py-5 my-5">
        <Container className="text-center">
          <h2 className="fw-bold mb-3">¿Listo para darle lo mejor a tu mascota?</h2>
          <p className="lead mb-4">
            En Caninos SABS estamos comprometidos con el bienestar de tus compañeros caninos.
            Contáctanos hoy mismo y descubre todo lo que podemos ofrecerte.
          </p>
          <Link to="/contact">
            <Button variant="light" size="lg">Contáctanos Ahora</Button>
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;