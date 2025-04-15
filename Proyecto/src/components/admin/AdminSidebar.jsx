// src/components/admin/AdminSidebar.jsx
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminSidebar = ({ isOpen }) => {
  const { currentUser } = useAuth();
  const isAdmin = currentUser?.role?.name === 'admin';

  return (
    <div className={`sidebar bg-light ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Nav className="flex-column py-3">
        <Nav.Link as={NavLink} to="/admin/dashboard" className="sidebar-link">
          <i className="fas fa-tachometer-alt me-2"></i>
          {isOpen && 'Dashboard'}
        </Nav.Link>
        
        <Nav.Link as={NavLink} to="/admin/products" className="sidebar-link">
          <i className="fas fa-box me-2"></i>
          {isOpen && 'Productos'}
        </Nav.Link>
        
        <Nav.Link as={NavLink} to="/admin/services" className="sidebar-link">
          <i className="fas fa-concierge-bell me-2"></i>
          {isOpen && 'Servicios'}
        </Nav.Link>
        
        <Nav.Link as={NavLink} to="/admin/categories" className="sidebar-link">
          <i className="fas fa-tags me-2"></i>
          {isOpen && 'Categorías'}
        </Nav.Link>
        
        {isAdmin && (
          <>
            <Nav.Link as={NavLink} to="/admin/users" className="sidebar-link">
              <i className="fas fa-users me-2"></i>
              {isOpen && 'Usuarios'}
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/admin/roles" className="sidebar-link">
              <i className="fas fa-user-tag me-2"></i>
              {isOpen && 'Roles'}
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/admin/company" className="sidebar-link">
              <i className="fas fa-building me-2"></i>
              {isOpen && 'Empresa'}
            </Nav.Link>
          </>
        )}
      </Nav>
    </div>
  );
};

export default AdminSidebar;