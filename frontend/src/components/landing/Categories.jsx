import NavigationBar from './Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';

const categories = [
  { id: 1, name: 'Alimentos', description: 'Comida nutritiva y balanceada para tus mascotas.' },
  { id: 2, name: 'Juguetes', description: 'Diversión garantizada con nuestros juguetes seguros.' },
  { id: 3, name: 'Accesorios', description: 'Collares, correas y más para el estilo de tu mascota.' },
  { id: 4, name: 'Salud', description: 'Productos para el cuidado y bienestar de tus mascotas.' },
];

const Categories = () => (
  <>
    <NavigationBar />
    <Container className="my-5 pt-5">
      <h2 className="mb-4 text-center">Categorías de Productos</h2>
      <Row>
        {categories.map(category => (
          <Col key={category.id} md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default Categories;
