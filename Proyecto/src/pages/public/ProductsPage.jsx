// src/pages/public/ProductsPage.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productService, categoryService } from '../../services/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('name_asc');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          productService.getAll(),
          categoryService.getAll()
        ]);
        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter products based on search term and selected category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.categoryId === parseInt(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'name_asc':
        return a.name.localeCompare(b.name);
      case 'name_desc':
        return b.name.localeCompare(a.name);
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="products-page">
      {/* Hero Section */}
      <div className="bg-light py-5 mb-5">
        <Container>
          <h1 className="fw-bold text-center">Nuestros Productos</h1>
          <p className="lead text-center mb-0">
            Descubre nuestra amplia gama de productos para el cuidado de tus mascotas
          </p>
        </Container>
      </div>

      <Container>
        {/* Filters Section */}
        <Row className="mb-4">
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text>
                <i className="fas fa-search"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={3}>
            <Form.Select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="name_asc">Nombre (A-Z)</option>
              <option value="name_desc">Nombre (Z-A)</option>
              <option value="price_asc">Precio (Menor a Mayor)</option>
              <option value="price_desc">Precio (Mayor a Menor)</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : sortedProducts.length === 0 ? (
          <div className="text-center py-5">
            <h3>No se encontraron productos</h3>
            <p>Intenta con otros criterios de búsqueda</p>
          </div>
        ) : (
          <Row>
            {sortedProducts.map(product => (
              <Col md={4} lg={3} key={product.id} className="mb-4">
                <Card className="h-100 shadow-sm hover-card">
                  <Card.Img 
                    variant="top" 
                    src={product.image || "/api/placeholder/300/200"} 
                    alt={product.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="text-muted mb-2">
                      {product.description?.substring(0, 80)}
                      {product.description?.length > 80 ? '...' : ''}
                    </Card.Text>
                    <Card.Text className="fw-bold text-primary mb-3">
                      ${product.price?.toFixed(2) || '0.00'}
                    </Card.Text>
                    {product.categoryId && (
                      <div className="mb-3">
                        <span className="badge bg-secondary">
                          {categories.find(c => c.id === product.categoryId)?.name || 'Categoría'}
                        </span>
                      </div>
                    )}
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <Link to={`/products/${product.id}`}>
                      <Button variant="outline-primary" className="w-100">Ver Detalles</Button>
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

export default ProductsPage;