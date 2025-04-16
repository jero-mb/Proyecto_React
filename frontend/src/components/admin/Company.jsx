// src/components/admin/Company.jsx
import {useEffect, useState } from 'react';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import api from '../../api/axios';

/**
 * Company: Formulario para actualizar datos de la empresa.
 */
const Company = () => {
  const [info, setInfo] = useState({ name: '', address: '', phone: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/company')
      .then(res => setInfo(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api.put('/company', info)
      .catch(err => console.error(err));
  };

  if (loading) return <Spinner animation="border" />;

  return (
    <Container className="py-5" style={{ maxWidth: '600px' }}>
      <h2>Información de la Compañía</h2>
      <Form onSubmit={handleSubmit}>
        {['name','address','phone'].map(field => (
          <Form.Group className="mb-3" controlId={field} key={field}>
            <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
            <Form.Control
              type="text"
              name={field}
              value={info[field]}
              onChange={handleChange}
              required
            />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">Guardar</Button>
      </Form>
    </Container>
  );
};

export default Company;