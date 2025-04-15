// src/layouts/AdminLayout.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminNavbar from '../components/admin/AdminNavbar';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="admin-layout">
      <AdminNavbar toggleSidebar={toggleSidebar} />
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col md={sidebarOpen ? 3 : 1} className="sidebar-col">
            <AdminSidebar isOpen={sidebarOpen} />
          </Col>
          <Col md={sidebarOpen ? 9 : 11} className="content-col">
            <main className="p-4">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLayout;