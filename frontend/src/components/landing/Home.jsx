import NavigationBar from './Navbar';
import ImageCarousel from './Carousel';
import About from './About';
import Products from './Products';
import Categories from './Categories';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => (
  <>
    <NavigationBar />
    <ImageCarousel />
    <Container className="my-5 text-center">
      <h1 className="mb-4">Bienvenidos a Caninos SABS</h1>
      <p className="mb-4 lead">
        En Caninos SABS, nos dedicamos a brindar soluciones integrales para el cuidado y bienestar de tus mascotas. Descubre nuestros servicios y productos diseñados especialmente para ellos.
      </p>
      <Button variant="primary" size="lg" href="/register">
        Regístrate Ahora
      </Button>
    </Container>
    <About />
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Categories />
        </Col>
        <Col md={8}>
          <Products />
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;
