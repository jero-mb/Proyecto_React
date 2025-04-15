// src/pages/public/CategoriesPage.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { categoryService, productService } from '../../services/api';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [categoriesRes, productsRes] = await Promise.all([
          categoryService.getAll(),
          productService.getAll()
        ]);
        setCategories(categoriesRes.data);
        setProducts(productsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Count products per category
  const getProductCount = (categoryId) => {
    return products.filter(product => product.categoryId === categoryId).length;
  };

  return (
    <div className="categories-page">
      {/* Hero Section */}
      <div className="bg-light py-5 mb-5">
        <Container>
          <h1 className="fw-bold text-center">Nuestras Categorías</h1>
          <p className="lead text-center mb-0">
            Explora nuestras categorías de productos para encontrar exactamente lo que necesitas
          </p>
        </Container>
      </div>

      {/* Categories Section */}
      <Container>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center py-5">
            <h3>No hay categorías disponibles</h3>
            <p>Vuelve pronto para explorar nuestras categorías</p>
          </div>
        ) : (
          <Row>
            {categories.map(category => (
              <Col md={6} lg={4} key={category.id} className="mb-4">
                <Card className="h-100 shadow-sm hover-card">
                  <Card.Img 
                    variant="top" 
                    src={category.image || "/api/placeholder/400/200"} 
                    alt={category.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{category.name}</Card.Title>
                    <Card.Text className="text-muted">
                      {category.description}
                    </Card.Text>
                    <Card.Text>
                      <span className="badge bg-primary">{getProductCount(category.id)} Productos</span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <Link to={`/products?category=${category.id}`}>
                      <Button variant="outline-primary" className="w-100">Ver Productos</Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default CategoriesPage;