// src/pages/public/AboutPage.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { companyService } from '../../services/api';

const AboutPage = () => {
  const [company, setCompany] = useState({
    name: 'Caninos SABS',
    description: '',
    mission: '',
    vision: '',
    history: '',
    values: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      setLoading(true);
      try {
        const response = await companyService.getInfo();
        setCompany(response.data);
      } catch (error) {
        console.error('Error fetching company info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyInfo();
  }, []);

  // Team members (dummy data for now)
  const teamMembers = [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      position: 'Fundador y CEO',
      image: '/api/placeholder/300/300',
      bio: 'Carlos fundó Caninos SABS con la visión de ofrecer productos y servicios de alta calidad para mascotas.'
    },
    {
      id: 2,
      name: 'María González',
      position: 'Directora de Operaciones',
      image: '/api/placeholder/300/300',
      bio: 'María aporta más de 15 años de experiencia en gestión de empresas de productos para mascotas.'
    },
    {
      id: 3,
      name: 'Juan Pérez',
      position: 'Veterinario Jefe',
      image: '/api/placeholder/300/300',
      bio: 'Juan lidera nuestro equipo de veterinarios, asegurando que todos nuestros servicios cumplan con los más altos estándares.'
    }
  ];

  // Company values (if not provided from API)
  const defaultValues = [
    {
      title: 'Excelencia',
      description: 'Nos esforzamos por ofrecer productos y servicios de la más alta calidad para el bienestar de las mascotas.',
      icon: 'fa-medal'
    },
    {
      title: 'Compromiso',
      description: 'Estamos comprometidos con el bienestar y la salud de todos los animales a los que servimos.',
      icon: 'fa-handshake'
    },
    {
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de mejorar nuestros productos y servicios.',
      icon: 'fa-lightbulb'
    },
    {
      title: 'Servicio al Cliente',
      description: 'Ponemos a nuestros clientes y sus mascotas en el centro de todo lo que hacemos.',
      icon: 'fa-heart'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="bg-light py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="fw-bold mb-4">Quiénes Somos</h1>
              <p className="lead">
                {company.description || 
                  'En Caninos SABS nos dedicamos a proporcionar productos y servicios de alta calidad para el cuidado y bienestar de tus mascotas. Nuestra pasión por los animales nos impulsa a ofrecer soluciones innovadoras y personalizadas.'}
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="/api/placeholder/600/400"
                alt="Sobre Nosotros"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* History Section */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5">Nuestra Historia</h2>
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="bg-light p-4 rounded shadow-sm">
              <p>
                {company.history || 
                  `Caninos SABS nació en 2010 con una simple pero poderosa idea: proporcionar productos y servicios de la más alta calidad para el cuidado de mascotas, con un enfoque especial en los caninos.

                  Lo que comenzó como una pequeña tienda local ha crecido hasta convertirse en una empresa reconocida que ofrece una amplia gama de productos y servicios para el bienestar de las mascotas.
                  
                  A lo largo de los años, hemos ampliado nuestras operaciones y hemos incorporado tecnología de vanguardia para mejorar la experiencia de nuestros clientes y el cuidado de sus mascotas.
                  
                  Hoy, Caninos SABS se enorgullece de ser un referente en el mercado, manteniendo siempre los valores fundamentales que nos han guiado desde el principio: amor por los animales, calidad en todo lo que hacemos y un compromiso inquebrantable con la satisfacción del cliente.`}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Mission & Vision Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="display-4 text-primary mb-3">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <Card.Title className="fw-bold">Nuestra Misión</Card.Title>
                  <Card.Text>
                    {company.mission || 
                      'Proporcionar productos y servicios innovadores de la más alta calidad para el cuidado y bienestar de las mascotas, creando relaciones duraderas con nuestros clientes basadas en la confianza y el compromiso.'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="display-4 text-primary mb-3">
                    <i className="fas fa-eye"></i>
                  </div>
                  <Card.Title className="fw-bold">Nuestra Visión</Card.Title>
                  <Card.Text>
                    {company.vision || 
                      'Ser reconocidos como la empresa líder en el cuidado y bienestar de mascotas, estableciendo estándares de excelencia en la industria y contribuyendo positivamente al bienestar animal en nuestra comunidad.'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5">Nuestros Valores</h2>
        <Row>
          {(company.values && company.values.length > 0 ? company.values : defaultValues).map((value, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 text-center shadow-sm hover-card">
                <Card.Body className="p-4">
                  <div className="display-5 text-primary mb-3">
                    <i className={`fas ${value.icon || 'fa-star'}`}></i>
                  </div>
                  <Card.Title className="fw-bold">{value.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {value.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Nuestro Equipo</h2>
          <Row>
            {teamMembers.map(member => (
              <Col md={4} key={member.id} className="mb-4">
                <Card className="h-100 text-center shadow-sm hover-card">
                  <div className="p-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle img-fluid mx-auto d-block"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">{member.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-primary">{member.position}</Card.Subtitle>
                    <Card.Text className="text-muted">
                      {member.bio}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;