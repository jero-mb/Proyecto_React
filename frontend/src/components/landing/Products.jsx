import NavigationBar from './Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';

const products = [
  { id: 1, name: 'Croquetas Premium', description: 'Alimento balanceado para perros adultos.', image: '/assets/slide1.png' },
  { id: 2, name: 'Pelota de Juguete', description: 'Pelota resistente para horas de diversión.', image: '/assets/slide2.png' },
  { id: 3, name: 'Collar Ajustable', description: 'Collar cómodo y seguro para tu mascota.', image: '/assets/slide3.png' },
];

const Products = () => (
  <>
    <NavigationBar />
    <Container className="my-5 pt-5">
      <h2 className="mb-4 text-center">Nuestros Productos</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default Products;
