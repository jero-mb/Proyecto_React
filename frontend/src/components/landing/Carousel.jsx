// src/components/landing/CarouselComponent.jsx
import 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';

const CarouselComponent = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={slide1} alt="Primer slide" />
      <Carousel.Caption>
        <h3>Primer Slide</h3>
        <p>Descripción del primer slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={slide2} alt="Segundo slide" />
      <Carousel.Caption>
        <h3>Segundo Slide</h3>
        <p>Descripción del segundo slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={slide3} alt="Tercer slide" />
      <Carousel.Caption>
        <h3>Tercer Slide</h3>
        <p>Descripción del tercer slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselComponent;
