import NavigationBar from './Navbar';
import { Container } from 'react-bootstrap';

const About = () => (
  <>
    <NavigationBar />
    <Container className="my-5 pt-5">
      <h2 className="mb-4 text-center">Acerca de Caninos SABS</h2>
      <p>
        Caninos SABS es una empresa dedicada a ofrecer productos y servicios de alta calidad para el cuidado y bienestar de tus mascotas. Nuestro compromiso es brindar soluciones integrales que garanticen la salud, felicidad y comodidad de tus animales de compañía.
      </p>
      <p>
        Contamos con un equipo de profesionales apasionados por los animales, que trabajan constantemente para innovar y mejorar nuestra oferta, asegurando la satisfacción de nuestros clientes y el bienestar de sus mascotas.
      </p>
      <p>
        Gracias por confiar en Caninos SABS. Estamos aquí para ayudarte a cuidar lo que más amas.
      </p>
    </Container>
  </>
);

export default About;
