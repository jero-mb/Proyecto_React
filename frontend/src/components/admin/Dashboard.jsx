// src/components/admin/Dashboard.jsx
import 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * Dashboard: Panel de navegación interna para módulos.
 */
const Dashboard = () => (
  <Container className="py-5">
    <h2>Panel Administrativo</h2>
    <Row className="mt-4">
      {[
        { to: '/admin/users', label: 'Usuarios' },
        { to: '/admin/roles', label: 'Roles' },
        { to: '/admin/products', label: 'Productos' },
        { to: '/admin/categories', label: 'Categorías' },
        { to: '/admin/company', label: 'Compañía' }
      ].map(item => (
        <Col key={item.to} md={4} className="mb-3">
          <Card>
            <Card.Body className="text-center">
              <Card.Title>{item.label}</Card.Title>
              <Button as={Link} to={item.to} variant="outline-primary">
                Ir
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Dashboard;