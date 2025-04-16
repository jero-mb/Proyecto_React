// src/components/landing/Categories.jsx
import { useEffect, useState } from 'react';
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import api from '../../api/axios';

const Categories = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/categories')
      .then(res => setCats(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner animation="border" className="d-block mx-auto my-5" />;

  return (
    <Container className="py-5">
      <h2>Categorías</h2>
      <ListGroup>
        {cats.map(c => <ListGroup.Item key={c.id}>{c.name}</ListGroup.Item>)}
      </ListGroup>
    </Container>
  );
};

export default Categories;