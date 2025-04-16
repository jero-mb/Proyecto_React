// src/components/common/PrivateRoute.jsx
import 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

/**
 * PrivateRoute: Protege rutas que requieren autenticación.
 * Si no hay token en localStorage, redirige a /login.
 */
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};


PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


export default PrivateRoute;
