// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/landing/Home';
import Categories from './components/landing/Categories';
import Products from './components/landing/Products';
import About from './components/landing/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users';
import Roles from './components/admin/Roles';
import AdminProducts from './components/admin/Products';
import AdminCategories from './components/admin/Categories';
import Company from './components/admin/Company';
import PrivateRoute from './components/common/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Vista Pública */}
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas Protegidas */}
        <Route path="/admin" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/admin/users" element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path="/admin/roles" element={<PrivateRoute><Roles /></PrivateRoute>} />
        <Route path="/admin/products" element={<PrivateRoute><AdminProducts /></PrivateRoute>} />
        <Route path="/admin/categories" element={<PrivateRoute><AdminCategories /></PrivateRoute>} />
        <Route path="/admin/company" element={<PrivateRoute><Company /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
