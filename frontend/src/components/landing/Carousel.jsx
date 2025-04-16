// src/components/landing/Carousel.jsx
import 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';

const ImageCarousel = () => (
  <Carousel fade>
    <Carousel.Item>
      <img className="d-block w-100" src={slide1} alt="Primer slide" />
      <Carousel.Caption>
        <h3>Bienestar para tus mascotas</h3>
        <p>Ofrecemos servicios integrales para el cuidado de tus amigos peludos.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={slide2} alt="Segundo slide" />
      <Carousel.Caption>
        <h3>Productos de calidad</h3>
        <p>Encuentra los mejores productos para tus mascotas en nuestra tienda.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={slide3} alt="Tercer slide" />
      <Carousel.Caption>
        <h3>Atención personalizada</h3>
        <p>Contamos con profesionales dedicados al bienestar animal.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default ImageCarousel;
