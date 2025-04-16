import NavigationBar from './Navbar';
import ImageCarousel from './Carousel';
import { Container, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => (
  <>
    <NavigationBar />
    <ImageCarousel />
    <Container fluid className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="hero-title">Bienvenidos a Caninos SABS</h1>
      <p className="hero-subtitle">
        Soluciones integrales para el cuidado y bienestar de tus mascotas.
      </p>
      <Button variant="primary" size="lg" href="/register" className="hero-button">
        Regístrate Ahora
      </Button>
    </Container>
  </>
);

export default Home;
