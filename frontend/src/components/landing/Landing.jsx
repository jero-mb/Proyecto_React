// src/components/landing/Landing.jsx
import 'react';
import NavBarLanding from './Navbar';
import Home from './Home';
import About from './About';
import Products from './Products';
import Categories from './Categories';

/**
 * Landing: Combina todas las secciones en una sola vista scrollable.
 */
const Landing = () => (
  <>
    <NavBarLanding />
    <div id="home"><Home /></div>
    <div id="about"><About /></div>
    <div id="products"><Products /></div>
    <div id="categories"><Categories /></div>
  </>
);

export default Landing;