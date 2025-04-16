// src/components/admin/Categories.jsx
import { useEffect, useState } from 'react';
import { Container, Table, Button, Spinner } from 'react-bootstrap';
import api from '../../api/axios';

/**
 * AdminCategories: CRUD de categorías.
 */
const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = id => {
    api.delete(`/categories/${id}`)
      .then(() => setCategories(categories.filter(c => c.id !== id)))
      .catch(err => console.error(err));
  };

  if (loading) return <Spinner animation="border" />;

  return (
    <Container className="py-5">
      <h2>Gestión de Categorías</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2">Editar</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(cat.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminCategories;