// src/components/landing/About.jsx
import 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => (
  <Container className="py-5">
    <h2>Quiénes Somos</h2>
    <Row>
      <Col md={6}>
        <p>Caninos SABS nace en 2020 con el propósito de brindar productos y servicios de alta calidad para el cuidado de las mascotas.</p>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Misión</Card.Title>
            <Card.Text>Proveer soluciones innovadoras y confiables para la salud y bienestar animal.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default About;