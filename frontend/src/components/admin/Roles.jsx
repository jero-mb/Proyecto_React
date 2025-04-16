// src/components/admin/Roles.jsx
import { useEffect, useState } from 'react';
import { Container, Table, Button, Spinner } from 'react-bootstrap';
import api from '../../api/axios';

/**
 * Roles: CRUD de roles.
 */
const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/roles')
      .then(res => setRoles(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = id => {
    api.delete(`/roles/${id}`)
      .then(() => setRoles(roles.filter(r => r.id !== id)))
      .catch(err => console.error(err));
  };

  if (loading) return <Spinner animation="border" />;

  return (
    <Container className="py-5">
      <h2>Gestión de Roles</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2">Editar</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(role.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Roles;